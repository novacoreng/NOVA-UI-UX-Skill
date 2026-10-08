# Nova Mandatory Privacy and Consumer Protection Gate

Status: REQUIRED for every project. This is a design, implementation and QA gate, not a guarantee of legal compliance. Determine applicable jurisdictions and obtain legal review where needed.

## Prohibited patterns and required alternatives

1. **No unsubscribe or opt-out:** Never send marketing email or SMS without the legally required consent or other valid basis. Provide an easy, functional opt-out/unsubscribe, honor suppression requests promptly, and do not send further marketing to opted-out recipients. Preserve necessary transactional communications separately.
2. **Leaky analytics:** Do not expose personal information, tokens, sensitive URL parameters, private messages or identifiers to analytics providers. Minimize collection, restrict access and retention, document vendors, configure consent where required, and test network requests for leaks.
3. **Spam texts:** No unsolicited bulk promotional SMS, deceptive sender IDs, purchased-list abuse or consent laundering. Respect local telecom, marketing and opt-out rules, including country-specific requirements.
4. **Face scans and biometrics:** Do not silently collect face images, embeddings or biometric identifiers. Prefer non-biometric alternatives. If genuinely required, conduct a necessity/privacy assessment, apply appropriate consent or other lawful basis, secure processing and storage, retention/deletion limits, vendor review and jurisdiction-specific checks. Never claim biometric processing is harmless.
5. **No privacy policy:** Every product processing personal data must provide an accurate, accessible privacy notice explaining what is collected, purposes, lawful basis where relevant, sharing, retention, rights, contact, and cross-border transfers where relevant. The policy must reflect actual implementation, not generic invented claims.
6. **Kids' data:** Do not knowingly collect children's personal data without the applicable child-specific protections, age-assurance approach, parental consent where required, restricted profiling/targeted advertising, safety defaults and data minimization. Flag child-directed products for specialist review.
7. **Fake reviews:** Never fabricate, purchase, manipulate or misrepresent testimonials, ratings, endorsements or social proof. Clearly disclose material incentives and relationships. Use verifiable reviews and appropriate moderation.
8. **Hard-to-cancel subscriptions:** Display pricing, billing intervals, trial conversion, renewals and cancellation terms clearly before purchase. Obtain informed authorization. Provide straightforward cancellation through applicable channels, confirmation and timely cessation of future charges. Do not add deceptive friction or hide cancellation.
9. **Fake AI claims and likes:** Never misrepresent AI capabilities, automation, accuracy, human involvement, endorsements, user counts, likes, engagement, security, certifications or results. Clearly label synthetic testimonials/content when appropriate and substantiate measurable claims. Do not simulate real users or transactions.

## Mandatory build process

- During PRD/TRD intake, identify data categories, user ages, marketing channels, payment/subscription models, AI claims, reviews/social features, jurisdictions and vendors.
- Create a privacy and consumer-protection threat model before implementation.
- Make privacy-preserving defaults and consent/opt-out states explicit in design.
- Add server-side enforcement, audit logs and suppression lists where applicable; UI alone is insufficient.
- Test consent denial, withdrawal, opt-out, cancellation, data access/deletion, vendor data leakage, minors' protections and truthful marketing content.
- Verify privacy notices, terms, billing disclosures and actual implementation agree.
- Block production readiness when a critical prohibited pattern exists or mandatory legal review remains unresolved.
- Do not invent privacy policies, regulatory approvals or claims of compliance.
- Preserve evidence of testing and identify jurisdiction-specific requirements, including Nigeria NDPA, GDPR/UK GDPR, US FTC and state laws, COPPA and applicable SMS/email rules when relevant.

## Reusable prompt

> Use the Nova Privacy and Consumer Protection Gate. Audit this build for missing unsubscribe, analytics leakage, spam SMS, unnecessary biometric/face scanning, missing or inaccurate privacy policy, children's data risks, fake reviews, deceptive subscription cancellation, and false AI/engagement claims. Implement lawful, privacy-preserving alternatives and test enforcement. Do not claim legal compliance without jurisdiction-specific review.
