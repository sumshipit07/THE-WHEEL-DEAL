# 🗂️ Entity Relationship Diagram (ERD)

## 🎯 Purpose

This document describes how all database tables are connected in THE WHEEL DEAL.

---

## 📊 ERD Diagram

(We'll add the ERD diagram here.)

---

## 🔗 Relationships

| Parent Table | Child Table | Relationship |
|--------------|-------------|--------------|
| Users | Vehicles | One-to-Many (1:N) |
| Users | Wallets | One-to-One (1:1) |
| Vehicles | Bookings | One-to-Many (1:N) |
| Bookings | RentalAgreements | One-to-One (1:1) |
| Bookings | Payments | One-to-One (1:1) |
| Bookings | OTPVerifications | One-to-Many (1:N) |
| Users | Reviews | One-to-Many (1:N) |

---

## 📌 Business Rules

- One owner can list multiple vehicles.
- One renter can make multiple bookings.
- A booking belongs to exactly one renter.
- A booking is created for exactly one vehicle.
- A payment belongs to one booking.
- A rental agreement belongs to one booking.
- A wallet belongs to one user.

---

## 🚀 Future Relationships

(To be added in future versions.)