# 🗄️ Database Design

## 📋 Database Tables

| 🟢 **Table** | 🟡 **Purpose** | 🔴 **Status** |
|--------------|----------------|---------------|



1.| 🟢 **Users** | 🟡 Stores all user accounts (Owner, Renter, Admin). Handles authentication, profile information, and user roles. | 🔴 MVP |

2.| 🟢 **Vehicles** | 🟡 Stores vehicle information listed by owners, including specifications, availability, pricing, and verification status. | 🔴 MVP |

3.| 🟢 **VehicleMedia** | 🟡 Stores all vehicle images and media URLs linked to each vehicle listing. | 🔴 MVP |

4.| 🟢 **VehicleDocuments** | 🟡 Stores verification documents such as RC, Insurance, Pollution Certificate, and Owner ID for admin approval. | 🔴 MVP |

5.| 🟢 **Bookings** | 🟡 Stores booking requests, booking status, rental duration, owner-renter relationship, and booking lifecycle. | 🔴 MVP |

6.| 🟢 **RentalAgreements** | 🟡 Stores digitally generated rental agreements accepted by both owner and renter before payment. | 🔴 MVP |

7.| 🟢 **Payments** | 🟡 Stores payment transactions, escrow status, payment history, refunds, and commission details. | 🔴 MVP |

8.| 🟢 **Wallets** | 🟡 Stores wallet balances, owner earnings, platform commission, and payout history. | 🔴 MVP |

9.| 🟢 **OTPVerifications** | 🟡 Stores OTPs used for secure vehicle handover, verification status, expiry time, and attempt history. | 🔴 MVP |

10.| 🟢 **Reviews** *(Optional)* | 🟡 Stores ratings and reviews submitted by renters after a completed booking. | 🔴 MVP v1.1 |