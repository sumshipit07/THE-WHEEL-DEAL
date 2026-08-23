# 🌐 API Contracts

**Project:** THE WHEEL DEAL  
**Version:** MVP v1.0  
**Status:** Active  
**Owner:** Founder Team  
**Last Updated:** YYYY-MM-DD

---

# 🎯 Purpose

This document defines the implementation contract for every REST API used by THE WHEEL DEAL.

It serves as the official agreement between the Frontend and Backend teams by specifying:

- API purpose
- Request format
- Validation rules
- Business rules
- Authentication requirements
- Backend processing flow
- Database interactions
- External integrations
- Response format
- Error handling

This document should always remain synchronized with the backend implementation.

---

# 📑 Table of Contents

1. API Design Principles
2. API Naming Standards
3. HTTP Methods
4. Standard Headers
5. Authentication
6. Response Standards
7. Error Standards
8. API Contract Template
9. Authentication Module
10. User Module
11. KYC Module
12. Vehicle Module
13. Booking Module
14. Agreement Module
15. Payment Module
16. Wallet Module
17. OTP Module
18. Review Module
19. Admin Module
20. Notes
21. Version History

---

# 📐 API Design Principles

All APIs must follow these principles.

- RESTful design
- Stateless communication
- JSON request and response bodies
- Predictable endpoint naming
- Standard HTTP status codes
- Thin Controllers
- Business Logic inside Services
- Repository Pattern
- Input Validation before processing
- Authentication before Authorization
- Consistent Error Responses

---

# 🏷 API Naming Standards

## Resource Naming

Good

/users

/vehicles

/bookings

/payments

Bad

/getUser

/createBooking

/doPayment

---

## HTTP Methods

GET

Retrieve data

POST

Create resources

PUT

Replace resources

PATCH

Partial update

DELETE

Delete resource

---

# 📨 Standard Request Headers

| Header | Required | Description |
|---------|----------|-------------|
| Content-Type | Yes | application/json |
| Authorization | Protected APIs | Bearer JWT |
| Accept | Optional | application/json |

---

# 🔐 Authentication

Protected APIs require

Authorization

Bearer <JWT>

Roles

- Guest
- Renter
- Owner
- Admin

---

# 📤 Standard Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully.",
  "data": {}
}
```

---

# 📥 Standard Error Response

```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": []
}
```

---

# 🚨 Standard HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Resource Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Resource Not Found |
| 409 | Conflict |
| 422 | Business Rule Failed |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

---

# 📄 API Contract Template

Every API in this project must follow this template.

---

## API Information

### API Name

Human readable API name.

Example

User Login

---

### Module

Authentication

---

### Endpoint

```http
POST /auth/login
```

---

### Purpose

Explain what this API does and why it exists.

---

### User Journey Context

Actor

Guest / Owner / Renter / Admin

Triggered From

Which page or feature calls this API?

Example

Login Page

Related User Flow

Reference the corresponding flow from user-flow.md.

---

## Authentication & Authorization

Authentication Required

Yes / No

Allowed Roles

- Guest
- Owner
- Renter
- Admin

Permissions Required (Future)

Specify if applicable.

---

# Request

## Headers

| Header | Required | Example | Description |
|---------|----------|---------|-------------|

---

## URL Parameters

| Parameter | Type | Required | Description |
|------------|------|----------|-------------|

---

## Query Parameters

| Parameter | Type | Required | Description |
|------------|------|----------|-------------|

---

## Request Body

```json
{}
```

---

## Request Body Fields

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|

---

# Validation Rules

List every validation rule.

Examples

- Required fields
- Format validation
- Length validation
- Range validation
- Existence validation

---

# Business Rules

Document all business rules.

Examples

- User must complete KYC.
- Vehicle must be verified.
- Booking dates cannot overlap.
- Escrow payment required.
- Owner must approve booking.

---

# Backend Processing

## Controller

Example

AuthController.login()

---

## Services Called

List services in execution order.

Authentication Service

↓

User Service

↓

Notification Service

---

## Repositories Called

User Repository

Booking Repository

Vehicle Repository

etc.

---

## Database Tables Used

List every table touched.

Example

Users

Bookings

Vehicles

Wallets

Payments

---

## External Services Used

Example

Supabase Storage

Payment Gateway

Email Provider

SMS Provider

OTP Provider

Maps API

---

# Database Operations

Describe database actions.

Examples

Read User

Create Booking

Update Wallet

Create Payment

Insert OTP

Update Booking Status

---

# Side Effects

Actions triggered after successful execution.

Examples

Send Email

Send SMS

Generate OTP

Upload Image

Create Wallet Transaction

Generate Agreement

Write Audit Log

---

# Response

## Success Response

### Status Code

```http
200 OK
```

### Response Body

```json
{}
```

---

## Error Responses

| Status Code | Condition |
|-------------|-----------|
| 400 | Validation Failed |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Resource Not Found |
| 409 | Conflict |
| 422 | Business Rule Failed |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

---

# Security Considerations

Document security requirements.

Examples

- JWT Validation
- Password Hashing
- Input Sanitization
- SQL Injection Prevention
- XSS Protection
- Rate Limiting
- Secure File Upload
- Role Verification

---

# Performance Considerations

Examples

- Pagination
- Maximum Response Time
- Indexed Queries
- Batch Operations
- Caching Opportunities

---

# Logging & Audit

Specify what must be logged.

Examples

User ID

Request ID

Booking ID

Payment ID

Timestamp

IP Address

Failure Reason

Audit Trail

---

# Dependencies

List internal dependencies.

Examples

Authentication Service

Booking Service

Payment Service

Notification Service

Wallet Service

Vehicle Repository

---

# Failure Behaviour

Describe system behaviour if this API fails.

Examples

- Rollback transaction
- Retry request
- Show frontend error
- Disable button
- Cancel workflow
- Maintain previous state

---

# Future Improvements

Examples

Redis Cache

Queues

Background Jobs

Async Processing

WebSockets

Event Bus

---

# Notes

Implementation notes for developers.

---

# Authentication Module

(Add all Authentication APIs here)

---

# User Module

(Add all User APIs here)

---

# KYC Module

(Add all KYC APIs here)

---

# Vehicle Module

(Add all Vehicle APIs here)

---

# Booking Module

(Add all Booking APIs here)

---

# Agreement Module

(Add all Agreement APIs here)

---

# Payment Module

(Add all Payment APIs here)

---

# Wallet Module

(Add all Wallet APIs here)

---

# OTP Module

(Add all OTP APIs here)

---

# Review Module

(Add all Review APIs here)

---

# Admin Module

(Add all Admin APIs here)

---

# 📝 Notes

- Every new API must follow the standard template.
- Keep API Contracts synchronized with implementation.
- Update this document whenever request or response formats change.
- API changes affecting the frontend must be reflected here before implementation.

---

# 📜 Version History

| Version | Date | Changes |
|---------|------|---------|
| MVP v1.0 | YYYY-MM-DD | Initial API Contracts Document |