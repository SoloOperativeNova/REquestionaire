const STORAGE_KEY = "re-questionnaire-state";

const appState = {
  currentStep: 0,
  answers: {}
};

const flows = {
  buyer: {
    propertyOptions: [
      ["single-family", "Single-family home", "Traditional detached home search"],
      ["condo-townhouse", "Condo or townhouse", "Lower-maintenance or attached-home options"],
      ["multi-family", "Multi-family property", "Property with multiple units"],
      ["unsure", "Not sure yet", "Still narrowing down the best fit"]
    ],
    objectiveOptions: [
      ["search", "Start my home search", "Browse homes and move into active search mode"],
      ["pre-qualify", "Get pre-qualified and plan my budget", "Work through financing and purchase range"],
      ["consultation", "Schedule a consultation", "Talk with an agent about the buying process"]
    ]
  },
  seller: {
    propertyOptions: [
      ["single-family", "Single-family home", "Detached residential property"],
      ["condo-townhouse", "Condo or townhouse", "Attached home or HOA-managed property"],
      ["multi-family", "Multi-family property", "Duplex, triplex, or larger residential asset"],
      ["land-commercial", "Land or commercial property", "Lot, office, retail, or similar asset"]
    ],
    objectiveOptions: [
      ["valuation", "Find out what my property is worth", "Request a pricing estimate or valuation"],
      ["listing-prep", "Prepare my property to list", "Get guidance on readiness and marketing"],
      ["sell-soon", "Talk to an agent about selling soon", "Move directly into a listing conversation"]
    ]
  },
  renter: {
    propertyOptions: [
      ["single-family", "Single-family home", "Detached rental home"],
      ["condo-townhouse", "Condo or townhouse", "Townhome or condo rental"],
      ["multi-family", "Multi-family property", "Apartment or multi-unit community"],
      ["unsure", "Not sure yet", "Need help choosing the right type"]
    ],
    objectiveOptions: [
      ["browse-rentals", "Browse available rentals", "Review current listings"],
      ["rental-help", "Get help finding the right rental", "Receive guided support"],
      ["application", "Ask about application requirements", "Understand paperwork and next steps"]
    ]
  },
  investor: {
    propertyOptions: [
      ["rental", "Rental property", "Income-focused buy-and-hold property"],
      ["fix-flip", "Fix-and-flip opportunity", "Shorter-term value-add investment"],
      ["multi-family", "Multi-family property", "Residential property with multiple units"],
      ["land-commercial", "Commercial property", "Office, retail, industrial, or mixed-use"]
    ],
    objectiveOptions: [
      ["opportunities", "Find investment opportunities", "View inventory that matches your criteria"],
      ["analysis", "Analyze returns and strategy", "Work through numbers and acquisition strategy"],
      ["investment-consult", "Speak with an investment-focused agent", "Book a direct consultation"]
    ]
  },
  "property-management": {
    propertyOptions: [
      ["single-family", "Single-family rental", "One residential rental property"],
      ["small-multi-unit", "Small multi-unit property", "A smaller building or grouped units"],
      ["large-multi-unit", "Large multi-unit property", "Larger apartment or multi-unit asset"],
      ["mixed", "Mixed portfolio", "Multiple property types under management"]
    ],
    objectiveOptions: [
      ["services", "Learn about management services", "See coverage, pricing, and support"],
      ["portfolio-review", "Request a rental property review", "Assess operations and fit"],
      ["manager-consult", "Speak with a property manager", "Book a management consultation"]
    ]
  }
};

const timelineOptions = [
  ["immediate", "Immediately", "Ready to move now or take action right away"],
  ["30-days", "Within 30 days", "Likely to move or start soon"],
  ["3-6-months", "Within 3 to 6 months", "Planning ahead but not urgent yet"],
  ["exploring", "Just exploring", "Researching options before committing"]
];

const routes = {
  buyer: {
    search: {
      page: "Buyer Search Page",
      description: "Direct this visitor to current listings and a buyer-focused search experience.",
      offer: "buyer-search"
    },
    "pre-qualify": {
      page: "Financing and Buyer Prep Page",
      description: "Send this visitor to financing guidance and pre-qualification resources.",
      offer: "buyer-financing"
    },
    consultation: {
      page: "Buyer Consultation Booking Page",
      description: "Move this visitor into a direct consultation with a buyer agent.",
      offer: "buyer-consultation"
    }
  },
  seller: {
    valuation: {
      page: "Home Valuation Page",
      description: "Route this seller to a valuation request or pricing assessment page.",
      offer: "home-valuation"
    },
    "listing-prep": {
      page: "Seller Services Page",
      description: "Show listing preparation, marketing support, and selling guidance.",
      offer: "seller-services"
    },
    "sell-soon": {
      page: "Listing Consultation Booking Page",
      description: "Route this seller into a near-term listing consultation.",
      offer: "listing-consultation"
    }
  },
  renter: {
    "browse-rentals": {
      page: "Available Rentals Page",
      description: "Send this renter to active rental listings.",
      offer: "rental-listings"
    },
    "rental-help": {
      page: "Rental Assistance Contact Page",
      description: "Connect this renter to a guided rental search path.",
      offer: "rental-assistance"
    },
    application: {
      page: "Rental Application Guide Page",
      description: "Provide application requirements and next-step instructions.",
      offer: "rental-application"
    }
  },
  investor: {
    opportunities: {
      page: "Investment Listings Page",
      description: "Route this lead to investor-relevant opportunities and inventory.",
      offer: "investment-listings"
    },
    analysis: {
      page: "Investor Strategy Page",
      description: "Show analysis, return modeling, and acquisition support.",
      offer: "investor-strategy"
    },
    "investment-consult": {
      page: "Investor Consultation Booking Page",
      description: "Book this lead into an investor-focused consultation.",
      offer: "investor-consultation"
    }
  },
  "property-management": {
    services: {
      page: "Property Management Services Page",
      description: "Show management scope, fees, and owner support.",
      offer: "property-management-services"
    },
    "portfolio-review": {
      page: "Rental Review Request Page",
      description: "Route this owner into a portfolio review or discovery form.",
      offer: "property-review"
    },
    "manager-consult": {
      page: "Property Management Consultation Page",
      description: "Book a management call with the operations team.",
      offer: "property-management-consultation"
    }
  }
};

const elements = {
  startButton: document.getElementById("start-button"),
  restartButton: document.getElementById("restart-button"),
  questionCard: document.getElementById("question-card"),
  resultCard: document.getElementById("result-card"),
  backButton: document.getElementById("back-button"),
  questionKicker: document.getElementById("question-kicker"),
  questionTitle: document.getElementById("question-title"),
  questionDescription: document.getElementById("question-description"),
  questionForm: document.getElementById("question-form"),
  progressLabel: document.getElementById("progress-label"),
  progressPercent: document.getElementById("progress-percent"),
  progressFill: document.getElementById("progress-fill"),
  resultTitle: document.getElementById("result-title"),
  resultDescription: document.getElementById("result-description"),
  resultPage: document.getElementById("result-page"),
  resultSummary: document.getElementById("result-summary"),
  resultData: document.getElementById("result-data")
};

const questions = [
  {
    key: "segment",
    title: "What brings you here today?",
    description: "Choose the main reason for your visit so we can direct you to the right service.",
    options: [
      ["buyer", "Buy a home", "Home search, financing prep, and buyer guidance"],
      ["seller", "Sell a property", "Valuation, listing prep, and agent support"],
      ["renter", "Rent a home", "Rental search, applications, and leasing help"],
      ["investor", "Invest in real estate", "Opportunities, return analysis, and strategy"],
      ["property-management", "Get property management help", "Services for rental owners and portfolios"]
    ]
  },
  {
    key: "property_type",
    title: "What type of property is this for?",
    description: "This helps qualify the lead and determine the right service path.",
    getOptions: (answers) => flows[answers.segment]?.propertyOptions ?? []
  },
  {
    key: "objective",
    title: "What is your main goal?",
    description: "Select the outcome you want most so the recommendation is specific.",
    getOptions: (answers) => flows[answers.segment]?.objectiveOptions ?? []
  },
  {
    key: "timeline",
    title: "What is your timeline?",
    description: "This qualifies urgency without adding unnecessary friction.",
    options: timelineOptions
  }
];

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    appState.currentStep = Number.isInteger(parsed.currentStep) ? parsed.currentStep : 0;
    appState.answers = parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {};
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function resetState() {
  appState.currentStep = 0;
  appState.answers = {};
  saveState();
}

function getQuestion(stepIndex) {
  return questions[stepIndex];
}

function getOptions(question) {
  if (question.options) {
    return question.options;
  }
  if (question.getOptions) {
    return question.getOptions(appState.answers);
  }
  return [];
}

function renderProgress() {
  const completed = Math.min(appState.currentStep + 1, questions.length);
  const percent = Math.round((completed / questions.length) * 100);
  elements.progressLabel.textContent = `Question ${completed} of ${questions.length}`;
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressFill.style.width = `${percent}%`;
}

function renderQuestion() {
  const question = getQuestion(appState.currentStep);
  const options = getOptions(question);

  elements.resultCard.classList.add("hidden");
  elements.questionCard.classList.remove("hidden");
  elements.restartButton.classList.remove("hidden");

  elements.questionKicker.textContent = `Step ${appState.currentStep + 1}`;
  elements.questionTitle.textContent = question.title;
  elements.questionDescription.textContent = question.description;
  elements.questionForm.innerHTML = "";
  elements.backButton.disabled = appState.currentStep === 0;
  elements.backButton.classList.toggle("invisible", appState.currentStep === 0);

  options.forEach(([value, title, detail]) => {
    const wrapper = document.createElement("div");
    wrapper.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = question.key;
    input.id = `${question.key}-${value}`;
    input.value = value;
    input.checked = appState.answers[question.key] === value;

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.innerHTML = `
      <span class="option-title">${title}</span>
      <span class="option-detail">${detail}</span>
    `;

    input.addEventListener("change", () => {
      handleAnswer(question.key, value);
    });

    wrapper.append(input, label);
    elements.questionForm.appendChild(wrapper);
  });

  renderProgress();
}

function handleAnswer(key, value) {
  appState.answers[key] = value;

  if (key === "segment") {
    delete appState.answers.property_type;
    delete appState.answers.objective;
  }

  if (key === "property_type") {
    delete appState.answers.objective;
  }

  if (appState.currentStep < questions.length - 1) {
    appState.currentStep += 1;
    saveState();
    renderQuestion();
    return;
  }

  saveState();
  renderResult();
}

function goBack() {
  if (appState.currentStep === 0) {
    return;
  }
  appState.currentStep -= 1;
  saveState();
  renderQuestion();
}

function humanizeSegment(segment) {
  const map = {
    buyer: "Buyer",
    seller: "Seller",
    renter: "Renter",
    investor: "Investor",
    "property-management": "Property owner"
  };
  return map[segment] ?? segment;
}

function humanizeProperty(propertyType) {
  const map = {
    "single-family": "single-family home",
    "condo-townhouse": "condo or townhouse",
    "multi-family": "multi-family property",
    "land-commercial": "land or commercial property",
    rental: "rental property",
    "fix-flip": "fix-and-flip opportunity",
    mixed: "mixed portfolio",
    unsure: "property options still being explored",
    "small-multi-unit": "small multi-unit property",
    "large-multi-unit": "large multi-unit property"
  };
  return map[propertyType] ?? propertyType;
}

function humanizeObjective(segment, objective) {
  const optionSet = flows[segment]?.objectiveOptions ?? [];
  const match = optionSet.find(([value]) => value === objective);
  return match ? match[1].toLowerCase() : objective;
}

function humanizeTimeline(timeline) {
  const match = timelineOptions.find(([value]) => value === timeline);
  return match ? match[1].toLowerCase() : timeline;
}

function buildTimelinePhrase(timeline) {
  const phrases = {
    immediate: "immediately",
    "30-days": "within 30 days",
    "3-6-months": "within 3 to 6 months",
    exploring: "while still exploring options"
  };
  return phrases[timeline] ?? humanizeTimeline(timeline);
}

function buildSummary() {
  const { segment, property_type: propertyType, objective, timeline } = appState.answers;
  const timelinePhrase = timeline ? ` ${buildTimelinePhrase(timeline)}` : "";
  return `${humanizeSegment(segment)} interested in a ${humanizeProperty(propertyType)} and looking to ${humanizeObjective(segment, objective)}${timelinePhrase}`.replace(/\s+/g, " ").trim();
}

function renderResult() {
  const { segment, objective } = appState.answers;
  const route = routes[segment]?.[objective];

  if (!route) {
    elements.resultTitle.textContent = "Recommendation unavailable";
    elements.resultDescription.textContent = "This combination does not yet have a mapped route.";
    elements.resultPage.textContent = "Manual review needed";
    elements.resultSummary.textContent = buildSummary();
    elements.resultData.textContent = JSON.stringify(appState.answers, null, 2);
  } else {
    const routingData = {
      ...appState.answers,
      recommended_offer: route.offer,
      source: "website-questionnaire"
    };

    elements.resultTitle.textContent = route.page;
    elements.resultDescription.textContent = route.description;
    elements.resultPage.textContent = route.page;
    elements.resultSummary.textContent = buildSummary();
    elements.resultData.textContent = JSON.stringify(routingData, null, 2);
  }

  appState.currentStep = questions.length - 1;
  saveState();
  renderProgress();

  elements.questionCard.classList.add("hidden");
  elements.resultCard.classList.remove("hidden");
}

function maybeResumeResult() {
  const requiredKeys = questions.map((question) => question.key);
  const hasAllAnswers = requiredKeys.every((key) => Boolean(appState.answers[key]));

  if (hasAllAnswers) {
    renderResult();
    return;
  }

  const firstIncomplete = requiredKeys.findIndex((key) => !appState.answers[key]);
  appState.currentStep = firstIncomplete === -1 ? 0 : firstIncomplete;
  renderQuestion();
}

if (elements.startButton) {
  elements.startButton.addEventListener("click", () => {
    resetState();
    renderQuestion();
  });
}

if (elements.restartButton) {
  elements.restartButton.addEventListener("click", () => {
    resetState();
    renderQuestion();
  });
}

elements.backButton.addEventListener("click", goBack);

loadState();
maybeResumeResult();
