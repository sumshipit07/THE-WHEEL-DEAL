# 📌 Founder Decisions

**Project:** THE WHEEL DEAL  
**Version:** MVP v1.0  
**Status:** Active

---

# 🎯 Purpose

This document records the key business decisions made for THE WHEEL DEAL MVP.  
Each decision includes the reason, trade-offs, and future direction.

---

# 🛡 Trust & Verification

## FD-01: Manual Owner Verification
**Decision**
- Every booking requires owner confirmation before approval.

**Reason**
- Build trust and reduce fake bookings.

**Trade-off**
- Slower booking process.

**Future**
- Replace with automated approval based on owner trust score.

**Status**
- ✅ MVP

---
## FD-02: Mandatory KYC Before Platform Access

**Decision**
- Every owner must complete KYC before listing a vehicle.
- Every renter must complete KYC before making a booking.

**Reason**
- Increase trust.
- Reduce fraud.
- Protect owners and renters.
- Comply with platform verification standards.

**Status**
- ✅ MVP
---

# 💳 Payments

## FD-03: Escrow Payment System
**Decision**
- Hold payment until the rental is completed.

**Reason**
- Protect both owner and renter.

**Trade-off**
- More complex payment workflow.

**Future**
- Automated dispute resolution.

**Status**
- ✅ MVP

---

## FD-04: Platform Commission
**Decision**
- Commission is deducted automatically before owner payout.

**Reason**
- Simple and transparent revenue model.

**Future**
- Dynamic commission based on owner tier.

**Status**
- ✅ MVP

---

# 🚗 Rental Workflow

## FD-05: Manual Booking Approval
**Decision**
- Admin contacts the owner after every booking request.

**Reason**
- Confirm vehicle availability and pricing.

**Trade-off**
- Requires manual operations.

**Future**
- One-click owner approval.

**Status**
- ✅ MVP

---

## FD-06: Two OTP Verification
**Decision**
- Separate Pickup OTP and Return OTP.

**Reason**
- Secure vehicle handover and return.

**Future**
- GPS + OTP verification.

**Status**
- ✅ MVP

---

# ⭐ User Experience

## FD-07: WhatsApp Communication
**Decision**
- Use WhatsApp instead of in-app chat.

**Reason**
- Faster MVP with lower development effort.

**Future**
- In-app messaging.

**Status**
- ⏳ Future

---

## FD-08: Reviews After Completed Rental
**Decision**
- Reviews are allowed only after successful rental completion.

**Reason**
- Prevent fake reviews.

**Future**
- Owner and renter rating system.

**Status**
- ✅ MVP

---

# 🚀 Product Strategy

## FD-09: Build Core Features First
**Decision**
- Focus only on features required to complete a rental.

**Delayed Features**
- Chat
- Coupons
- Referrals
- Loyalty Program
- AI Recommendations
- Dynamic Pricing
- Push Notifications

**Reason**
- Validate the business before expanding features.

**Status**
- ✅ MVP

---

# 📈 Founder Principles

Every major decision should answer:

- 👤 Does it improve user experience?
- 💼 Does it build trust or revenue?
- 🏗 Is it technically maintainable?
- ⚙ Can operations handle it?
- 📈 Can it scale in the future?

If most answers are **No**, postpone the feature.

---

# 📋 Decision Summary

| ID | Decision | Status |
|----|----------|--------|
| FD-01 | Manual Owner Verification | ✅ |
| FD-02 | Vehicle Verification | ✅ |
| FD-03 | Escrow Payment | ✅ |
| FD-04 | Platform Commission | ✅ |
| FD-05 | Manual Booking Approval | ✅ |
| FD-06 | Two OTP Verification | ✅ |
| FD-07 | WhatsApp Communication | ⏳ |
| FD-08 | Reviews After Completion | ✅ |
| FD-09 | Core Features First | ✅ |

---

# 📝 Notes

- Update this document whenever a major business decision changes.
- Do not delete old decisions; add new versions instead.