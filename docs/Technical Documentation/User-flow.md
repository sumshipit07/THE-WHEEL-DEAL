# THE WHEEL DEAL - User Flow

## Overview

The Wheel Deal is a hyperlocal peer-to-peer vehicle rental platform.

The platform connects:

- Vehicle Owners
- Renters
- Admin

The complete rental lifecycle consists of four major flows:

1. Owner Flow
2. Renter Flow
3. Booking & Agreement Flow
4. Payment & Rental Completion Flow

---

# 1. Owner Flow

### Step 1
Owner signs up or logs in.

↓

### Step 2
Owner opens the Owner Dashboard.

↓

### Step 3
Owner selects **List a Vehicle**.

↓

### Step 4
Owner enters vehicle details.

Information includes:

- Vehicle Title
- Price
- Location
- Images
- Description
- Vehicle Specifications

↓

### Step 5
Owner submits the listing.

↓

### Step 6
Admin reviews the listing.

Checks include:

- Vehicle documents
- RC
- Insurance
- Owner verification
- Listing accuracy

↓

### Step 7
Listing is approved.

↓

### Step 8
Vehicle becomes visible on the marketplace.

---

# 2. Renter Flow

### Step 1
Renter signs up or logs in.

↓

### Step 2
Renter grants location permission.

↓

### Step 3
Nearby vehicles are displayed.

Available filters:

- Distance
- Vehicle Type
- Fuel Type
- Price Range

↓

### Step 4
Renter opens a vehicle.

Can view:

- Images
- Description
- Reviews
- Specifications
- Pricing
- Location

↓

### Step 5
Renter sends a booking request.

---

# 3. Booking & Agreement Flow

### Step 1
Booking request is created.

↓

### Step 2
Admin receives the booking request.

↓

### Step 3
Admin contacts the vehicle owner.

Confirms:

- Availability
- Rental price

↓

### Step 4
Owner confirms booking terms.

↓

### Step 5
Admin informs the renter.

↓

### Step 6
Booking is approved.

↓

### Step 7
System generates the rental agreement.

Agreement contains:

- Owner details
- Renter details
- Vehicle details
- Rental duration
- Security deposit
- Terms & Conditions

↓

### Step 8
Renter accepts the agreement.

↓

### Step 9
Owner accepts the agreement.

↓

### Step 10
Agreement becomes active.

Booking is locked.

---

# 4. Payment & Rental Flow

### Step 1
Renter pays the rental amount.

↓

### Step 2
Payment is stored in The Wheel Deal Escrow.

↓

### Step 3
Booking status changes to:

Pending Vehicle Handover

---

## Vehicle Handover

### Step 4
Renter arrives to collect the vehicle.

↓

### Step 5
Owner shares the handover OTP.

↓

### Step 6
Renter enters the OTP.

↓

### Step 7
System verifies the OTP.

↓

### Step 8
Rental timer starts.

---

## Rental Completion

### Step 9
Rental duration ends.

↓

### Step 10
Renter returns the vehicle.

↓

### Step 11
Owner confirms successful return.

↓

### Step 12
If required,

Admin resolves disputes.

---

## Payment Release

### Step 13
Return is confirmed.

↓

### Step 14
Escrow releases the payment.

↓

### Step 15
Payment Distribution

- 80% → Vehicle Owner
- 20% → The Wheel Deal Commission

↓

Booking Completed

Vehicle becomes available for future bookings.

---

# Possible Future Improvements

These flows are not part of the MVP but should be considered later.

## Booking Rejection

- Owner rejects booking
- Notify renter
- Cancel booking

---

## Payment Failure

- Retry payment
- Cancel booking if unsuccessful

---

## Owner No-show

- Notify admin
- Refund renter
- Record incident

---

## Renter No-show

- Owner reports no-show
- Admin reviews
- Apply cancellation policy

---

## Vehicle Damage

- Owner uploads evidence
- Renter uploads evidence
- Admin reviews
- Refund / deduction decision

---

# End-to-End Journey

Owner
↓
List Vehicle
↓
Admin Verification
↓
Listing Published
↓
Renter Searches
↓
Booking Request
↓
Admin Verification
↓
Agreement
↓
Payment
↓
Escrow
↓
OTP Handover
↓
Rental
↓
Vehicle Return
↓
Payment Release
↓
Booking Completeds