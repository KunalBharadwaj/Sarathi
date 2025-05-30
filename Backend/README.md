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

### Get User Profile

Retrieve the profile information of the authenticated user.

**URL**: `/users/profile`

**Method**: `GET`

**Authentication Required**: Yes (JWT token via cookie or Authorization header)

#### Request Headers

| Header | Type | Description |
|--------|------|-------------|
| Authorization | String | Bearer token (optional if cookie is set) |

#### Example Response

- `user` (object):
    - `fullname` (object)
        - `firstname` (string): User's first name
        - `lastname` (string): User's last name
    - `email` (string): User's email address
    - `_id` (string): User's unique identifier

#### Error Responses

- Status 401: Unauthorized (missing or invalid token)

### Logout User

Log out the currently authenticated user by invalidating their token.

**URL**: `/users/logout`

**Method**: `GET`

**Authentication Required**: Yes (JWT token via cookie or Authorization header)

#### Request Headers

| Header | Type | Description |
|--------|------|-------------|
| Authorization | String | Bearer token (optional if cookie is set) |

## Captain Endpoints

### Register Captain

Register a new captain in the system.

**URL**: `/captains/register`

**Method**: `POST`

**Authentication Required**: No

#### Request Body

| Field | Type | Description | Constraints |
|-------|------|-------------|------------|
| fullname.firstname | String | Captain's first name | Minimum 3 characters long |
| fullname.lastname | String | Captain's last name (optional) | Minimum 3 characters long if provided |
| email | String | Captain's email address | Valid email format, must be unique |
| password | String | Captain's password | Minimum 8 characters long |
| vehicle.color | String | Vehicle color | Minimum 3 characters long |
| vehicle.plate | String | Vehicle plate number | Minimum 3 characters long, must be unique |
| vehicle.capacity | Number | Vehicle passenger capacity | Minimum value of 1 |
| vehicle.vehicleType | String | Type of vehicle | Must be one of: 'car', 'bike', or 'auto' |

#### Example Response

- `captain` (object):
    - `fullname` (object)
        - `firstname` (string): Captain's first name
        - `lastname` (string): Captain's last name
    - `email` (string): Captain's email address
    - `vehicle` (object)
        - `color` (string): Vehicle color
        - `plate` (string): Vehicle plate number
        - `capacity` (number): Vehicle passenger capacity
        - `vehicleType` (string): Type of vehicle
    - `_id` (string): Captain's unique identifier
    - `status` (string): Captain's status (default: 'inactive')

- `token` (string): JWT Token for authentication

#### Error Responses

- Status 400: Validation error (invalid input fields)
- Status 400: Captain with the provided email already exists

### Login Captain

Authenticate a captain and get an access token.

**URL**: `/captains/login`

**Method**: `POST`

**Authentication Required**: No

#### Request Body

| Field | Type | Description | Constraints |
|-------|------|-------------|------------|
| email | String | Captain's email address | Valid email format |
| password | String | Captain's password | Minimum 8 characters long |

#### Example Response

- `captain` (object):
    - `fullname` (object)
        - `firstname` (string): Captain's first name
        - `lastname` (string): Captain's last name
    - `email` (string): Captain's email address
    - `vehicle` (object)
        - `color` (string): Vehicle color
        - `plate` (string): Vehicle plate number
        - `capacity` (number): Vehicle passenger capacity
        - `vehicleType` (string): Type of vehicle
    - `_id` (string): Captain's unique identifier
    - `status` (string): Captain's status

- `token` (string): JWT Token for authentication

#### Error Responses

- Status 400: Validation error (invalid email format or password length)
- Status 400: Invalid email or password

### Get Captain Profile

Retrieve the profile information of the authenticated captain.

**URL**: `/captains/profile`

**Method**: `GET`

**Authentication Required**: Yes (JWT token via cookie or Authorization header)

#### Request Headers

| Header | Type | Description |
|--------|------|-------------|
| Authorization | String | Bearer token (optional if cookie is set) |

#### Example Response

- `captain` (object):
    - `fullname` (object)
        - `firstname` (string): Captain's first name
        - `lastname` (string): Captain's last name
    - `email` (string): Captain's email address
    - `vehicle` (object)
        - `color` (string): Vehicle color
        - `plate` (string): Vehicle plate number
        - `capacity` (number): Vehicle passenger capacity
        - `vehicleType` (string): Type of vehicle
    - `_id` (string): Captain's unique identifier
    - `status` (string): Captain's status

#### Error Responses

- Status 401: Unauthorized (missing or invalid token)

### Logout Captain

Log out the currently authenticated captain by invalidating their token.

**URL**: `/captains/logout`

**Method**: `GET`

**Authentication Required**: Yes (JWT token via cookie or Authorization header)

#### Request Headers

| Header | Type | Description |
|--------|------|-------------|
| Authorization | String | Bearer token (optional if cookie is set) |

#### Example Response

- `message` (string): "Logged out successfully"

#### Error Responses

- Status 401: Unauthorized (missing or invalid token)



