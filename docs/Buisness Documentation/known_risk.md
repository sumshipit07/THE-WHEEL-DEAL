# ⚠️ Known Risks

**Project:** THE WHEEL DEAL  
**Version:** MVP v1.0  
**Status:** Active  
**Owner:** Founder Team  
**Last Updated:** 2026-07-26

---

# 🎯 Purpose

This document records the known risks associated with THE WHEEL DEAL MVP and defines how each risk will be managed during development and operations.

It serves as a reference for product, engineering, and business decisions and should be reviewed before every major release.

---

# 👤 User & Trust Risks

## KR-01: Fake Owner Registration

### Risk
Fake users register as vehicle owners.

### Impact
Fraudulent vehicle listings and loss of customer trust.

### MVP Mitigation
- Mandatory KYC verification
- Government ID verification
- RC verification
- Insurance verification
- Admin approval before listing

### Future
- AI-assisted KYC verification
- Government verification APIs

**Priority:** 🔴 High

---

## KR-02: Fake Renter Registration

### Risk
Fake users create renter accounts.

### Impact
Spam bookings and payment fraud.

### MVP Mitigation
- Mandatory KYC verification
- Mobile number verification

### Future
- Renter trust score

**Priority:** 🔴 High

---

## KR-03: Identity Theft

### Risk
Someone uses another person's identity.

### Impact
Legal issues and fraudulent activity.

### MVP Mitigation
- KYC verification
- Manual document review

### Future
- Government identity verification APIs

**Priority:** 🔴 High

---

# 🚗 Vehicle Risks

## KR-04: Fake Vehicle Listing

### Risk
Vehicle does not actually exist.

### Impact
Loss of customer trust.

### MVP Mitigation
- RC verification
- Insurance verification
- Admin approval before publishing

### Future
- OCR & AI document verification

**Priority:** 🔴 High

---

## KR-05: Duplicate Vehicle Listing

### Risk
The same vehicle is listed multiple times.

### Impact
Confusing inventory and duplicate bookings.

### MVP Mitigation
- Admin review before publishing

### Future
- Automatic duplicate detection

**Priority:** 🟡 Medium

---

## KR-06: Double Booking

### Risk
A vehicle is booked by multiple renters for the same time.

### Impact
Booking conflicts and poor customer experience.

### MVP Mitigation
- Booking availability validation
- Booking status locking

### Future
- Real-time booking engine

**Priority:** 🔴 High

---

## KR-07: Vehicle Damage During Rental

### Risk
Vehicle is damaged while rented.

### Impact
Owner-renter disputes.

### MVP Mitigation
- Rental agreement
- Security deposit
- Admin dispute handling

### Future
- Insurance integration

**Priority:** 🔴 High

---

## KR-08: Vehicle Returned in Poor Condition

### Risk
Vehicle is returned dirty, damaged, or with less fuel.

### Impact
Owner dissatisfaction and disputes.

### MVP Mitigation
- Security deposit
- Pickup & return inspection
- Rental agreement

### Future
- AI image comparison

**Priority:** 🔴 High

---

# 📅 Booking Risks

## KR-09: Owner Rejects Booking

### Risk
Owner declines the booking request.

### Impact
Poor customer experience.

### MVP Mitigation
- Manual owner confirmation

### Future
- Instant owner approval

**Priority:** 🟡 Medium

---

## KR-10: Owner Doesn't Respond

### Risk
Owner ignores the booking request.

### Impact
Booking delays.

### MVP Mitigation
- Admin follow-up

### Future
- Automatic reminders

**Priority:** 🟡 Medium

---

## KR-11: Renter Doesn't Show Up

### Risk
The renter fails to collect the vehicle.

### Impact
Lost rental opportunity.

### MVP Mitigation
- Cancellation policy
- Admin follow-up

### Future
- No-show penalties

**Priority:** 🟡 Medium

---

## KR-12: Last-Minute Cancellation

### Risk
Booking is cancelled just before pickup.

### Impact
Poor customer experience.

### MVP Mitigation
- Manual refund process

### Future
- Automated cancellation policy

**Priority:** 🟡 Medium

---

# 💳 Payment Risks

## KR-13: Payment Failure

### Risk
Payment cannot be completed.

### Impact
Booking is not confirmed.

### MVP Mitigation
- Retry payment process

### Future
- Multiple payment gateways

**Priority:** 🔴 High

---

## KR-14: Payment Dispute

### Risk
Owner or renter disputes the payment.

### Impact
Loss of trust.

### MVP Mitigation
- Escrow payment system

### Future
- Automated dispute resolution

**Priority:** 🔴 High

---

## KR-15: Incorrect Commission Calculation

### Risk
Platform commission is calculated incorrectly.

### Impact
Financial loss.

### MVP Mitigation
- Backend validation
- Transaction logging

### Future
- Automated financial audits

**Priority:** 🟡 Medium

---

# 🔐 Security Risks

## KR-16: OTP Misuse

### Risk
OTP is shared with an unauthorized person.

### Impact
Unauthorized vehicle handover.

### MVP Mitigation
- Time-limited OTP
- Single-use OTP

### Future
- Device verification

**Priority:** 🔴 High

---

## KR-17: Unauthorized Access

### Risk
Unauthorized access to accounts or APIs.

### Impact
Data breach.

### MVP Mitigation
- JWT authentication
- Role-based authorization

### Future
- Multi-factor authentication

**Priority:** 🔴 High

---

## KR-18: Malicious File Upload

### Risk
Users upload harmful files.

### Impact
Security vulnerabilities.

### MVP Mitigation
- File type validation
- File size validation

### Future
- Malware scanning

**Priority:** 🔴 High

---

# ⚙️ Operational Risks

## KR-19: Admin Bottleneck

### Risk
Too many manual approvals slow operations.

### Impact
Long approval times.

### MVP Mitigation
- Manual workflow during MVP

### Future
- Workflow automation

**Priority:** 🟡 Medium

---

## KR-20: Slow KYC Verification

### Risk
Delayed account verification.

### Impact
Poor onboarding experience.

### MVP Mitigation
- Daily KYC review process

### Future
- Automated KYC verification

**Priority:** 🟡 Medium

---

# ⚖️ Legal & Compliance Risks

## KR-21: Invalid Documents

### Risk
Fake or expired documents are submitted.

### Impact
Legal liability.

### MVP Mitigation
- Manual document verification

### Future
- Government verification APIs

**Priority:** 🔴 High

---

## KR-22: Rental Agreement Dispute

### Risk
Disagreement over rental terms.

### Impact
Legal conflict.

### MVP Mitigation
- Digital rental agreement

### Future
- Electronic signatures

**Priority:** 🔴 High

---

# 💻 Technical Risks

## KR-23: Server Downtime

### Risk
Platform becomes unavailable.

### Impact
Users cannot access the platform.

### MVP Mitigation
- Cloud hosting
- Automated monitoring
- Regular backups

### Future
- Multi-region deployment

**Priority:** 🔴 High

---

## KR-24: Database Failure

### Risk
Database outage or corruption.

### Impact
Service interruption and potential data loss.

### MVP Mitigation
- Automated backups

### Future
- High-availability database cluster

**Priority:** 🔴 High

---

## KR-25: Payment Gateway Downtime

### Risk
Payment provider becomes unavailable.

### Impact
Payment failures.

### MVP Mitigation
- Retry mechanism

### Future
- Multiple payment providers

**Priority:** 🔴 High

---

# 📈 Business Risks

## KR-26: Low Vehicle Supply

### Risk
Not enough owners list their vehicles.

### Impact
Low inventory.

### MVP Mitigation
- Owner onboarding campaign

### Future
- Referral program

**Priority:** 🔴 High

---

## KR-27: Low Customer Demand

### Risk
Few renters use the platform.

### Impact
Low revenue.

### MVP Mitigation
- Launch in a focused market

### Future
- Marketing campaigns

**Priority:** 🔴 High

---

## KR-28: Low User Trust

### Risk
Users hesitate to use the platform.

### Impact
Poor growth and retention.

### MVP Mitigation
- Mandatory KYC
- Escrow payments
- Admin verification
- Reviews and ratings

### Future
- Verified badges
- Trust score system

**Priority:** 🔴 High

---

# 📋 Risk Summary

| Priority | Meaning |
|----------|---------|
| 🔴 High | Immediate attention required |
| 🟡 Medium | Monitor and improve |
| 🟢 Low | Acceptable during MVP |

> High-priority risks should always have an active mitigation strategy.

---

# 📝 Notes

- Review this document before every major release.
- Add newly discovered risks immediately.
- Never delete historical risks.
- Update mitigation strategies as the platform evolves.
- Reassess priorities whenever the business model changes.

---

# 📜 Version History

| Version | Date | Changes |
|---------|------------|------------------------------|
| MVP v1.0 | 2026-07-26 | Initial Known Risks document |