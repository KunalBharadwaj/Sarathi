# Uber Backend API Documentation

This document provides information about the API endpoints available in the Uber Backend application.

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

