# Real Estate Website Questionnaire

## Purpose

This questionnaire is designed to route website visitors to the correct next step quickly. It focuses on intent, property scope, and timing so a real estate business can send each visitor to the most relevant page, form, or booking flow.

## Recommended Flow

Use a short branching flow with one question shown at a time.

### Question 1: What brings you here today?

This is the primary filter and should appear first.

Answer choices:

- Looking to Buy
- Looking to Sell
- Looking to Rent
- Looking for Financing
- Looking for Property Management

Suggested saved value:

```text
segment = "buyer" | "financing" | "seller" | "renter" | "property-management"
```

### Question 2: What type of property is this for?

This question helps qualify the lead and determine the right service path.

Buyer or renter answer choices:

- Single-family home
- Condo or townhouse
- Multi-family property
- Investment property
- Not sure yet

Financing answer choices:

- Primary home purchase
- Investment property
- Refinance an existing property
- Not sure yet

Seller answer choices:

- Single-family home
- Condo or townhouse
- Multi-family property
- Land or commercial property

Investor answer choices:

- Rental property
- Fix-and-flip opportunity
- Multi-family property
- Commercial property

Property management answer choices:

- Single-family rental
- Small multi-unit property
- Large multi-unit property
- Mixed portfolio

Suggested saved value:

```text
property_type = "single-family" | "condo-townhouse" | "multi-family" | "land-commercial" | "rental" | "fix-flip" | "mixed" | "unsure"
```

### Question 3: What is your main goal?

This is the intent question and should drive the recommendation.

Buyer answer choices:

- Start my home search
- Get pre-qualified and plan my budget
- Schedule a consultation

Financing answer choices:

- Get pre-qualified
- Compare loan options
- Speak with a financing specialist

Seller answer choices:

- Find out what my property is worth
- Prepare my property to list
- Talk to an agent about selling soon

Renter answer choices:

- Browse available rentals
- Get help finding the right rental
- Ask about application requirements

Investor answer choices:

- Find investment opportunities
- Analyze returns and strategy
- Speak with an investment-focused agent

Property management answer choices:

- Learn about management services
- Request a rental property review
- Speak with a property manager

Suggested saved value:

```text
objective = "search" | "pre-qualify" | "consultation" | "loan-options" | "financing-consult" | "valuation" | "listing-prep" | "sell-soon" | "browse-rentals" | "rental-help" | "application" | "services" | "portfolio-review" | "manager-consult"
```

### Question 4: What is your timeline?

This question qualifies urgency without adding much friction.

Answer choices:

- Immediately
- Within 30 days
- Within 3 to 6 months
- Just exploring

Suggested saved value:

```text
timeline = "immediate" | "30-days" | "3-6-months" | "exploring"
```

## Routing Recommendations

Route as soon as enough information is available to make a confident recommendation.

### Buyer Routes

- `buyer + search` -> Buyer search page
- `buyer + pre-qualify` -> Financing or buyer-prep page
- `buyer + consultation` -> Buyer consultation booking page
- `buyer + investment-property + search` -> Investment property listings page
- `buyer + investment-property + pre-qualify` -> Investment property financing page
- `buyer + investment-property + consultation` -> Investment property consultation page

### Financing Routes

- `financing + pre-qualify` -> Financing pre-qualification page
- `financing + loan-options` -> Mortgage options page
- `financing + financing-consult` -> Financing consultation page

### Seller Routes

- `seller + valuation` -> Home valuation page
- `seller + listing-prep` -> Seller services page
- `seller + sell-soon` -> Listing consultation booking page

### Renter Routes

- `renter + browse-rentals` -> Available rentals page
- `renter + rental-help` -> Rental assistance contact page
- `renter + application` -> Rental application guide page

### Investor Routes

- `investor + opportunities` -> Investment listings page
- `investor + analysis` -> Investor strategy page
- `investor + investment-consult` -> Investor consultation booking page

### Property Management Routes

- `property-management + services` -> Property management services page
- `property-management + portfolio-review` -> Rental review request page
- `property-management + manager-consult` -> Property management consultation page

## Example Intake Summary

Show or store a short summary before redirecting or on the destination page.

Examples:

- Buyer interested in a condo or townhouse and ready to start a home search
- Seller requesting a property valuation within 30 days
- Buyer looking for an investment property and financing guidance
- Property owner requesting management services for a mixed portfolio

## Recommended Data Model

```text
segment = "seller"
property_type = "single-family"
objective = "valuation"
timeline = "30-days"
recommended_offer = "home-valuation"
source = "website-questionnaire"
```

## Implementation Notes

- Use radio buttons for each question.
- Show one question at a time.
- Save the answers before redirecting.
- Keep the first answer because it defines the lead type.
- Pass values through query parameters, hidden form fields, or CRM fields.
- Track users who land directly on service pages without using the questionnaire.

## Website Copy Example

### Headline

Find the Right Real Estate Service in a Few Quick Steps

### Intro Text

Answer a few short questions and we will guide you to the best next step for buying, selling, renting, investing, or property management.

### CTA

Start Questionnaire
