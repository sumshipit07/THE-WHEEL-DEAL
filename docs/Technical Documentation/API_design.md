# 🌐 API Design

**Project:** THE WHEEL DEAL
**Version:** MVP v1.0
**Architecture:** REST API
**Status:** Finalized

---

# 🎯 Purpose

This document defines every API required for THE WHEEL DEAL MVP.

It acts as the communication contract between:

- Frontend
- Backend
- Database

*Every feature implemented in MVP must have a corresponding API documented here.*

---

# 📖 API Design Principles

## REST Standards

| Method | Purpose |
|---------|---------|
| GET | Retrieve Data |
| POST | Create Resource |
| PATCH | Update Resource |
| DELETE | Delete Resource |

---

## Authentication Levels

| Access Level | Description |
|--------------|-------------|
| 🌍 Public | Anyone can access |
| 🔐 Authenticated | Logged-in users |
| 👤 Owner | Vehicle Owner |
| 🚗 Renter | Vehicle Renter |
| 🛡 Admin | Platform Administrator |
| ⚙ System | Internal backend process |

---

## Standard HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Invalid Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Resource Not Found |
| 409 | Conflict |
| 500 | Internal Server Error |

---

# 📦 API Modules

1. Authentication
2. User
3. Vehicle
4. Vehicle Media
5. Vehicle Documents
6. Vehicle Verification
7. Booking
8. Admin Booking Workflow
9. Rental Agreement
10. Payment
11. Escrow
12. Wallet
13. OTP Verification
14. Rental Lifecycle
15. Reviews
16. Admin Dashboard

---

# 🔐 Authentication Module

## Purpose

Manages user registration, login and authentication.

## Database Tables

- Users

## APIs

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| POST | /auth/signup | Public | Register user |
| POST | /auth/login | Public | Login |
| POST | /auth/logout | Authenticated | Logout |
| GET | /users/me | Authenticated | View profile |
| PATCH | /users/me | Authenticated | Update profile |

---

# 👤 User Module

## Purpose

Manage user profile information.

## Database Tables

- Users

## APIs

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| GET | /users/:id | Admin | View user |
| PATCH | /users/:id | Admin | Update user |
| DELETE | /users/:id | Admin | Disable account |

---

# 🚗 Vehicle Module

## Purpose

Manage vehicle listings.

## Database Tables

- Vehicles

## APIs

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| POST | /vehicles | Owner | Create vehicle |
| GET | /vehicles | Public | Browse vehicles |
| GET | /vehicles/:vehicleId | Public | Vehicle details |
| PATCH | /vehicles/:vehicleId | Owner | Update listing |
| DELETE | /vehicles/:vehicleId | Owner | Delete listing |
| GET | /users/me/vehicles | Owner | View own vehicles |

---

# 📸 Vehicle Media Module

## Database

VehicleMedia

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| POST | /vehicles/:vehicleId/media | Owner | Upload images |
| DELETE | /media/:mediaId | Owner | Remove image |

---

# 📄 Vehicle Documents Module

## Database

VehicleDocuments

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| POST | /vehicles/:vehicleId/documents | Owner | Upload RC/Insurance/ID |
| GET | /vehicles/:vehicleId/documents | Owner/Admin | View documents |
| PATCH | /documents/:documentId/approve | Admin | Approve document |
| PATCH | /documents/:documentId/reject | Admin | Reject document |

---

# ✅ Vehicle Verification Module

## Purpose

Admin verifies vehicle before publishing.

## APIs

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| GET | /admin/vehicles/pending | Admin | Pending vehicles |
| PATCH | /admin/vehicles/:vehicleId/approve | Admin | Publish vehicle |
| PATCH | /admin/vehicles/:vehicleId/reject | Admin | Reject vehicle |

---

# 📅 Booking Module

## Purpose

Create and manage bookings.

## Database

Bookings

## APIs

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| POST | /bookings | Renter | Create booking |
| GET | /bookings/:bookingId | Owner/Renter/Admin | Booking details |
| GET | /users/me/bookings | Authenticated | My bookings |
| PATCH | /bookings/:bookingId/cancel | Renter | Cancel booking |

---

# ☎ Admin Booking Workflow

## Purpose

Implements the manual owner confirmation workflow.

## APIs

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| GET | /admin/bookings/pending | Admin | Pending requests |
| PATCH | /admin/bookings/:bookingId/contact-owner | Admin | Contact owner |
| PATCH | /admin/bookings/:bookingId/owner-approved | Admin | Owner accepted |
| PATCH | /admin/bookings/:bookingId/owner-rejected | Admin | Owner rejected |

---

# 📜 Rental Agreement Module

## Database

RentalAgreements

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| POST | /agreements | System | Generate agreement |
| GET | /agreements/:agreementId | Owner/Renter | View agreement |
| PATCH | /agreements/:agreementId/owner-sign | Owner | Owner signs |
| PATCH | /agreements/:agreementId/renter-sign | Renter | Renter signs |

---

# 💳 Payment Module

## Database

Payments

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| POST | /payments | Renter | Create payment |
| GET | /payments/:paymentId | Owner/Renter/Admin | View payment |
| PATCH | /payments/:paymentId/mark-paid | System | Payment completed |

---

# 🏦 Escrow Module

## Purpose

Secure payment until rental ends.

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| POST | /escrow/hold | System | Hold payment |
| PATCH | /escrow/release | System | Release funds |
| PATCH | /escrow/refund | Admin | Refund payment |

---

# 👛 Wallet Module

## Database

Wallets

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| GET | /wallet | Owner | Wallet balance |
| GET | /wallet/transactions | Owner | Transaction history |

---

# 🔐 OTP Verification Module

## Database

OTPVerifications

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| POST | /otp/pickup | System | Generate pickup OTP |
| POST | /otp/verify-pickup | Owner/Renter | Verify pickup OTP |
| POST | /otp/return | System | Generate return OTP |
| POST | /otp/verify-return | Owner/Renter | Verify return OTP |

---

# 🚗 Rental Lifecycle Module

## Purpose

Manage rental execution.

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| PATCH | /bookings/:bookingId/start-rental | System | Start rental |
| PATCH | /bookings/:bookingId/end-rental | System | Finish rental |

---

# ⭐ Reviews Module

## Database

Reviews

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| POST | /reviews | Renter | Submit review |
| GET | /vehicles/:vehicleId/reviews | Public | View reviews |

---

# 🛡 Admin Dashboard Module

| Method | Endpoint | Access | Purpose |
|---------|----------|--------|---------|
| GET | /admin/dashboard | Admin | Dashboard summary |
| GET | /admin/users | Admin | View users |
| GET | /admin/payments | Admin | View payments |
| GET | /admin/wallets | Admin | View wallets |
| GET | /admin/agreements | Admin | View agreements |

---

# 🔄 Complete Business Workflow

Owner

↓

Register

↓

Create Vehicle

↓

Upload Documents

↓

Admin Verification

↓

Vehicle Published

↓

Renter Browses Vehicle

↓

Booking Created

↓

Admin Contacts Owner

↓

Owner Accepts

↓

Agreement Generated

↓

Payment

↓

Escrow Hold

↓

Pickup OTP

↓

Rental Started

↓

Return OTP

↓

Rental Completed

↓

Escrow Released

↓

Wallet Updated

↓

Review Submitted

---

# 📊 Database Mapping

| Module | Tables |
|----------|--------|
| Authentication | Users |
| Vehicle | Vehicles |
| Vehicle Media | VehicleMedia |
| Vehicle Documents | VehicleDocuments |
| Booking | Bookings |
| Agreement | RentalAgreements |
| Payment | Payments |
| Wallet | Wallets |
| OTP | OTPVerifications |
| Reviews | Reviews |

---

# 🔒 Security Rules

- JWT Authentication
- Role-Based Authorization
- Owner Ownership Validation
- Admin Authorization
- OTP Verification
- Escrow Validation
- Payment Validation
- Input Validation
- File Upload Validation

---

# 📌 API Naming Convention

- RESTful URLs
- Plural Resource Names
- Version Ready (/api/v1)
- JSON Request/Response
- Stateless APIs

---

# 🚀 Future APIs (Not MVP)

- Notifications
- Support Tickets
- Coupons
- Referral System
- Analytics
- Vehicle Availability Calendar
- Dispute Resolution
- Chat System
- Push Notifications
- Email Notifications

---

# ✅ MVP Coverage Checklist

| Feature | Status |
|---------|--------|
| Authentication | ✅ |
| User Management | ✅ |
| Vehicle Listing | ✅ |
| Vehicle Media | ✅ |
| Vehicle Documents | ✅ |
| Vehicle Verification | ✅ |
| Booking | ✅ |
| Admin Workflow | ✅ |
| Rental Agreement | ✅ |
| Payments | ✅ |
| Escrow | ✅ |
| Wallet | ✅ |
| OTP | ✅ |
| Rental Lifecycle | ✅ |
| Reviews | ✅ |
| Admin Dashboard | ✅ |

**Status:** ✅ API Design Finalized for MVP v1.0