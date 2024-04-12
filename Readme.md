### Project Overview: Loan Application Management System

## Description:

The Loan Application Management System is a web application that allows authenticated users to apply for loans, view their loan details, and submit weekly repayments. The system includes functionality for customers to create loan requests, admins to approve or reject loan requests, and customers to manage their repayments.

## Key Features:

# Loan Application Submission:

Customers can submit loan requests specifying the amount required and loan term.
Upon submission, the system generates scheduled repayments based on the loan term and sets their state to PENDING.

# Loan Approval by Admin:

Admins have the authority to approve or reject pending loan requests.
Upon approval, the loan state changes from PENDING to APPROVED.

# Loan Viewing:

Customers can view details of loans that belong to them only.
A policy check ensures that customers can only access their own loan information.

# Repayment Submission:

Customers can add repayments, specifying an amount equal to or greater than the scheduled repayment.
When a repayment is made, the corresponding scheduled repayment's status changes to PAID.
If all scheduled repayments linked to a loan are PAID, the loan status changes to PAID.

# Technologies:

1. Frontend: React.js for building the user interface.
2. Backend: Node.js with Express.js for the server-side logic and API endpoints.
3. Database: MongoDB for storing user, loan, and repayment data.
4. Authentication: JSON Web Tokens (JWT) for user authentication and authorization.
5. State Management: Redux for managing application state, especially for loan and repayment data.
6. Date Manipulation: Moment.js for handling date calculations and formatting.

## Implementation Plan:

# Frontend Development:

Design user interfaces for loan application, loan viewing, and repayment submission using React.js.
Implement Redux for state management to handle loan and repayment data.
Develop authentication screens and user-specific views.

# Backend Development:

Set up Node.js with Express.js for the server-side logic.
Create API endpoints for handling loan application, approval, repayment submission, and user-specific loan viewing.
Implement authentication mechanisms using JSON Web Tokens (JWT) for user authentication and authorization.

# Database Setup:

Use MongoDB to store user, loan, and repayment data.
Design database schemas to represent loans, repayments, and user information.
Ensure data integrity and implement proper indexing for efficient data retrieval.

# Integration and Testing:

Integrate frontend and backend components to ensure seamless communication.
Conduct unit tests and integration tests to validate system functionality.
Perform user acceptance testing (UAT) to gather feedback and make necessary improvements.

### to run the project

### install dependencies = npm i

## To start the backend = nodemon index.js

### Script to install the app in one go

npm i express nodemon bcrypt cookie-parser cors dotenv jsonwebtoken

## To run frontend = npm run dev

### Script to install the app in one go

npm i heroicons/react @reduxjs/toolkit axios lucide-react react react-dom react-redux react-router-dom react-toastify redux

### POSTMAN COLLECTION

https://documenter.getpostman.com/view/24218852/2sA3Bheudz
