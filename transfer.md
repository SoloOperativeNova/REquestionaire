# Website Questionnaire Transfer Guide

## Purpose

A useful website questionnaire should do one job well: quickly route a visitor to the right next step.

It should not try to gather every possible detail. Early questions should classify the visitor, identify intent, and send them to the best landing page, offer, booking flow, or contact path.

## Core Principles

- Keep questions short.
- Use multiple-choice answers whenever possible.
- Ask the highest-value filter questions first.
- Route users as early as possible instead of forcing unnecessary steps.
- Use professional wording that is easy to understand.
- Each answer should lead to a clear next action.
- Save the routing data so it can be used later for scheduling, email follow-up, CRM tagging, or analytics.

## What Makes a Questionnaire Useful

A strong questionnaire does these things:

- Segments visitors into meaningful business categories.
- Identifies what the visitor actually wants.
- Distinguishes between curiosity, education, diagnosis, and implementation.
- Routes each person to the most relevant page instead of showing the same offer to everyone.
- Reduces confusion and decision fatigue.
- Creates structured intake data for future business development.

## Recommended Questionnaire Structure

Use a branching structure instead of a single linear form.

### 1. Start With a Primary Filter

The first question should classify the visitor into a major segment.

Examples:

- Company size
- Role
- Department scope
- Personal vs company-wide need
- Budget range
- Urgency

This first question matters most because it determines which follow-up questions are relevant.

### 2. Ask a Scope Question

Once the person is classified, determine who the service is for.

Examples:

- Just me
- Me and a small team
- One department
- Entire company

This helps separate group offerings, private services, pilot programs, and enterprise solutions.

### 3. Ask an Intent Question

After segment and scope, ask what they are looking for.

Common intent categories:

- Exploring possibilities
- Learning or training
- Diagnosing problems
- Fixing or implementing solutions

This is usually the most important routing question after segmentation.

### 4. Route Immediately

Once the system has enough information to make a confident recommendation, send the user to the correct destination.

Possible destinations:

- Group workshop page
- Private workshop page
- Diagnostic page
- Full-service solution page
- Booking page
- Waitlist page
- Contact page

## Best Practices for Writing Questions

### Good Questions Are

- Short
- Clear
- Professional
- Easy to answer quickly
- Focused on one decision at a time

### Avoid Questions That Are

- Too long
- Too vague
- Asking two things at once
- Written with jargon the audience may not understand
- Open-ended too early in the flow

### Good Question Pattern

Use this structure:

`Question -> 2 to 4 answer choices -> each answer leads somewhere specific`

That works better than long forms at the top of the funnel.

## Best Practices for Writing Answer Choices

Good answer choices should:

- Be short enough to scan
- Sound professional
- Represent distinct paths
- Match real service offerings
- Avoid overlap

If two answers would send the user to the same place, consider combining them unless the distinction matters for future intake data.

## Recommended Routing Logic

Use answers to build a simple routing model:

- `segment`
- `scope`
- `objective`
- `recommended_offer`

Example data structure:

```text
segment = "sme"
scope = "department"
objective = "diagnostic"
recommended_offer = "business-diagnostic"
```

This data can be passed by:

- Query parameters
- Session storage
- Local storage
- Hidden fields in forms
- CRM integration

## Intake Summary

When the user reaches the final landing page, show or store a short intake summary.

Example summary format:

- Sole Proprietor looking for Group Workshop
- Micro Business looking for Private Workshop
- SME looking for Business Diagnostic
- Large Enterprise looking for Business Solution

This is useful because it creates continuity between the questionnaire and the final page. It also helps later when integrating:

- Calendars
- Lead forms
- Email systems
- CRM pipelines
- Analytics tools

## Landing Page Strategy

The questionnaire only works well if each path ends on a page designed for that specific audience.

Each landing page should:

- Match the visitor’s likely intent
- Reinforce that they are in the right place
- Present one clear primary CTA
- Optionally include a short intake summary

The questionnaire and landing pages should work as one system, not as separate pieces.

## Technical Recommendations

### Frontend

- Use radio buttons for answer choices.
- Show one question at a time if the questionnaire is short.
- Use conditional branching for follow-up questions.
- Provide a back button on intermediate steps.
- Do not overload the user with visible routing logic.

### Data Handling

- Save routing context before redirecting.
- Preserve the first-question segment because it often matters most later.
- Track direct visits to landing pages that bypass the questionnaire.
- Keep parameter names consistent across projects.

### Suggested Naming

- `segment`
- `scope`
- `audience`
- `objective`
- `offer`
- `source`

## Recommended Question Types for Other Websites

The same framework can be reused for many industries.

### Consultant or Agency Site

- Business size
- Who the service is for
- Main goal
- Urgency

### SaaS Website

- Team size
- Use case
- Experience level
- Desired outcome

### Training Website

- Individual vs team training
- Skill level
- Topic of interest
- Preferred format

### Healthcare or Professional Services Intake

- Client type
- Service area
- Level of need
- Preferred next step

## Common Mistakes

- Asking too many questions before routing
- Using vague answers that do not map cleanly to offers
- Sending different answers to the same generic page
- Not preserving questionnaire data after redirect
- Making the questionnaire longer than necessary
- Using open text fields too early
- Writing answers in casual language when the rest of the brand is professional

## Practical Rule

If a question does not improve routing, qualification, or future intake quality, it probably does not belong in the questionnaire.

## Reusable Template

Use this model for most projects:

1. What category best describes you?
2. Who is this for?
3. What are you looking for?
4. Route to the best next page

That is usually enough to build a useful first version.

## Final Recommendation

The most effective website questionnaire is short, structured, and tied directly to real offers. Its job is not to fully assess the visitor. Its job is to identify the best next step fast, save useful intake context, and reduce friction in the buying process.
