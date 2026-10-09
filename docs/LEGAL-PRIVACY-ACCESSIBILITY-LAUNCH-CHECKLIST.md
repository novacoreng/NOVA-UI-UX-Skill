# Nova Mandatory Legal, Privacy, Accessibility and Trust Launch Checklist

Status: Required review for all Nova builds. Apply requirements based on actual product features and jurisdictions. This checklist reduces risk but is not a legal compliance certification or guarantee against lawsuits.

## Mandatory checks

1. **Privacy policy:** Provide a discoverable, accurate privacy notice reflecting actual data collected, purposes, retention, sharing, transfers, user rights and contact details. Never publish fabricated legal text as a verified policy.
2. **Remove fake reviews:** No fabricated testimonials, purchased ratings, impersonated customers or misleading social proof. Label genuine incentivized endorsements and moderate appropriately.
3. **Terms of service:** Provide appropriate, accessible terms aligned with the actual product, service, jurisdiction and user rights. Flag for legal review.
4. **Remove unsupported claims:** Substantiate AI, performance, health, financial, security, certification, user-count and outcome claims. Remove unverifiable promises and fake metrics.
5. **Refund policy:** Disclose applicable refund eligibility, exclusions, process and timelines before payment. Honor mandatory statutory rights; do not invent blanket no-refund restrictions.
6. **Accessibility alt text:** Give informative images meaningful alt text; decorative images empty alt text. Label icons and interactive controls correctly.
7. **Cookie policy:** Disclose cookies and similar technologies accurately, including purposes, categories, durations and third parties where required.
8. **Fix color contrast:** Test text, controls, focus indicators and states against applicable WCAG contrast guidance, including light/dark themes and disabled/error states.
9. **Cookie consent banner:** Where required, obtain valid opt-in before non-essential cookies or tracking run. Provide equally accessible reject/accept choices, granular preferences and withdrawal; no pre-ticked boxes or deceptive nudging.
10. **Keyboard navigation:** All core functions must work without a mouse. Ensure logical tab order, visible focus, skip links, correct dialogs, focus trapping/return, escape handling and no keyboard traps.
11. **Check form consents:** Separate required contractual acknowledgments from optional marketing consents. Use clear language, no pre-checked marketing consent, server-side consent records and withdrawal paths where relevant.
12. **Add business details:** Show truthful business name and suitable contact/support information, registration and location details where legally required. Never invent addresses, registration numbers or certifications.
13. **No unnecessary data:** Minimize data collection, permissions, logs and retention. Require documented purpose and lawful basis where applicable. Never request sensitive data solely for convenience.
14. **Age consent for kids' data:** Determine whether the service is child-directed or likely used by minors; implement appropriate age checks, parental authorization where required, age-appropriate defaults and restrictions on profiling/ads. Escalate for specialist review.
15. **Audit third-party SDKs:** Inventory SDKs, trackers, analytics, ad pixels, payment tools and embedded widgets. Review data collection, network transmissions, consent gating, security, vendor agreements, version risk and cross-border transfers. Remove unnecessary SDKs.
16. **Unsubscribe links in emails:** Marketing emails require a functioning unsubscribe or compliant opt-out mechanism, correct suppression handling and no continued marketing after withdrawal. Keep transactional messages distinct.
17. **Remove dark patterns:** No forced continuity, deceptive scarcity, disguised ads, confirmshaming, misleading toggles, obstruction, hidden consent, fake urgency or manipulative subscription cancellation.
18. **License fonts and images:** Use only approved assets with documented commercial rights or valid licenses. Preserve required attribution and license notices. Never assume web-accessible assets are free to reuse.
19. **Remove hidden fees:** Display full material prices, recurring charges, taxes, service fees and billing frequency before final purchase as required. Avoid drip pricing and surprise add-ons.
20. **Data deletion request:** Provide a discoverable request channel or self-service flow as appropriate. Verify identity safely, respect applicable exceptions/retention obligations, propagate deletion to processors where required, and confirm request status without disclosing other users' data.

## Build integration

- At PRD/TRD intake, identify jurisdictions, user age groups, data flows, subscriptions, payments, marketing, tracking and external vendors.
- During design, implement honest disclosures, accessible controls, privacy-friendly defaults and unambiguous consent.
- During engineering, enforce consent and permissions server-side where needed, block non-essential tracking until consent where required, and maintain auditable subscription/opt-out/deletion flows.
- During QA, test each applicable item in real user journeys, including mobile, tablet, desktop, keyboard and screen-reader paths.
- Before launch, record Pass, Fail, Not Applicable (with rationale), or Needs Legal Review for every item. Block launch on critical failures.
- Verify policies and notices match deployed behavior. Do not claim legal compliance based only on this checklist.
- Preserve previously approved brand assets and existing product functionality. Do not fabricate reviews, legal business details, licenses or capabilities.
- Avoid the em dash character in all project output.

## Nova reusable prompt

> Run the Nova Legal, Privacy, Accessibility and Trust Launch Checklist against the actual codebase and deployment. Audit privacy policy, reviews, terms, claims, refunds, alt text, cookies, consent banner, color contrast, keyboard navigation, form consent, business details, data minimization, children's data, third-party SDKs, marketing unsubscribe, dark patterns, asset licensing, hidden fees and data deletion. Fix confirmed issues, test affected flows and report pass/fail/not-applicable/legal-review results with evidence. Do not invent policies, permissions, licenses or claims.
