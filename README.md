you can get the the screen shot "public/scrrenshonshot1" "public/scrrenshonshot2"
# Task 7: API Integration

## Overview
This task implements dynamic data fetching from the Akil Backend API to populate job listings in the application.

## API Details
| Property       | Value                                |
|----------------|--------------------------------------|
| Base URL       | `https://akil-backend.onrender.com/` |
| Endpoint       | `/opportunities/search` (GET)        |


Features
✅ Dynamic Data Loading

Fetches real-time job opportunities

Handles pagination (if implemented in API)

✅ Robust Error Handling

Network error detection

API response validation

User-friendly error messages

✅ Loading States

Skeleton loaders during fetch

Empty state illustrations

✅ Type Safety

TypeScript interfaces for API responses