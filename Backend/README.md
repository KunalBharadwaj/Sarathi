# Sarathi Backend API Documentation

This document provides information about the API endpoints available in the Sarathi Backend application.

## User Endpoints

### Register User

Register a new user in the system.

**URL**: `/users/register`

**Method**: `POST`

**Authentication Required**: No

#### Request Body

| Field | Type | Description | Constraints |
|-------|------|-------------|------------|
| fullname.firstname | String | User's first name | Minimum 3 characters long |
| fullname.lastname | String | User's last name (optional) | Minimum 3 characters long if provided |
| email | String | User's email address | Valid email format, minimum 5 characters long, must be unique |
| password | String | User's password | Minimum 8 characters long |

#### Example Response

- `user` (object):
    - `fullname` (object).
        - `firstname` (string) : User's first name with minimum 3 characters.
        - `lastname` (string) : User's last name with minimum 3 characters.
    - `email` (string) : User's email address must be a valid email.
    - `password` (string) : Hashed User password.

- `token` (string) : JWT Token.

### Login User

Authenticate a user and get an access token.

**URL**: `/users/login`

**Method**: `POST`

**Authentication Required**: No

#### Request Body

| Field | Type | Description | Constraints |
|-------|------|-------------|------------|
| email | String | User's email address | Valid email format |
| password | String | User's password | Minimum 8 characters long |

#### Example Response

- `user` (object): 
    - `fullname` (object).
        - `firstname` (string): User's first name.
        - `lastname` (string): User's last name.
    - `email` (string): User's email address.
    - `_id` (string): User's unique identifier.

- `token` (string): JWT Token for authentication.

#### Error Responses

- Status 400: Validation error (invalid email format or password length)
- Status 401: Invalid credentials
