# Ecommerce-Follow-Along

## Project Overview
The Ecommerce-Follow-Along project is a hands-on learning experience designed to guide you through the process of building a full-fledged e-commerce application from scratch using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project aims to provide practical experience with real-world development concepts and tools.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Auth
- **Hosting**: Vercel

## Milestone 1: Project Overview
In this milestone, you will:
- Understand the overall structure of a MERN project.
- Learn the foundational steps of setting up a new project.
- Gain clarity on the functionalities of an e-commerce application.
- Prepare for upcoming milestones by setting up the project repository.

## Milestone 2: Login Page Layout Added
In this milestone, we have successfully added the layout for the Login Page. This includes the following key features:
- **User Interface Design**: The Login Page has been designed with a clean and user-friendly interface, ensuring a seamless user experience.
- **Responsive Layout**: The layout is fully responsive, adapting to different screen sizes and devices for optimal usability.
- **Form Elements**: The Login Page includes essential form elements such as input fields for email and password, and a submit button.
- **Styling with Tailwind CSS**: Tailwind CSS has been used to style the Login Page, providing a modern and consistent look and feel.

#### Key Components
- **Header**: A welcoming header that introduces the Login Page.
- **Input Fields**: Fields for users to enter their email and password.
- **Submit Button**: A button for users to submit their login credentials.
- **Error Handling**: Basic error handling to inform users of any issues with their input.

## Milestone 3: Backend Added

In this milestone, we have successfully added the backend for our e-commerce application. This includes the following key features:

### Key Features:
- **API Endpoints**: Implemented several API endpoints for handling user authentication, product management, and order processing.
- **Database Integration**: Integrated MongoDB to store and retrieve data, ensuring a seamless connection between the frontend and backend.
- **Authentication**: Added user authentication using JWT (JSON Web Tokens) to secure user data and restrict access to certain endpoints.
- **Error Handling**: Implemented comprehensive error handling to provide informative responses and ensure a smooth user experience.
- **Middleware**: Used middleware to handle tasks such as logging, parsing request bodies, and managing CORS (Cross-Origin Resource Sharing).

This milestone lays the foundation for the backend of our e-commerce application, providing essential functionality to support user interactions and data management. We will continue to build on this foundation in upcoming milestones to enhance the features and improve the user experience.

## Milestone 4: Backend Enhancements
In this milestone, we made several important updates to our e-commerce application. Here's a summary of what we did:

### Learning Goals 🎯
By the end of this milestone, we accomplished the following:
1. **Created a User Model**: This is like a blueprint for how we store user data, such as name, email, and password, in the database.
2. **Created a User Controller**: This part of the server manages user data. It handles actions like adding a new user or getting user information.
3. **Enabled File Uploads with Multer**: Multer is a tool that helps our app accept and store files (like profile pictures) uploaded by users.

### 1. What’s a Model?
A model is like a detailed map or plan. When we create a User Model, we're designing how a user’s data will look in the database. Think of it like drawing a blueprint for a house. The model defines what information we need to store for each user.

### 2. What’s a Controller?
A controller is a part of the server that manages what happens when someone interacts with our app. For example, if someone wants to sign up, the controller handles the data sent to the server. Think of the controller as a "manager" of requests and responses, making sure everything goes smoothly.

### 3. File Uploads with Multer
Sometimes, users want to upload files like profile pictures. Multer is a tool that makes it easy to upload files to our server. It helps us store user images in the backend, like a virtual file cabinet for storing pictures.

## Milestone 5: Signup Page Added

In this milestone, we have successfully added the Signup page to our e-commerce application. This includes the following key features:
- **User Registration Form**: A form that allows new users to register by providing their name, email, password, and profile picture.
- **Form Validation**: Implemented validation for the name, email, and password fields to ensure data integrity and provide feedback to the user.
- **Password Visibility Toggle**: Added an eye icon that allows users to toggle the visibility of the password field for convenience.
- **File Upload**: Users can upload a profile picture during registration. The image is displayed as a preview before submission.
- **Form Submission**: On successful validation, the form data is submitted to the server using Axios. The server processes the registration request and stores the user data in the database.
- **Error Handling**: Basic error handling to inform users of any issues with their input.

## Milestone 6: Database Added to Signup Page

In this milestone, we have successfully connected the Signup page to the database. This includes the following key features:
- **User Data Storage**: When users register, their information (name, email, hashed password, and profile picture URL) is now stored in MongoDB.
- **Backend Validation**: Ensured that duplicate email registrations are prevented and added server-side validation to enhance security.
- **Encrypted Passwords**: Used bcrypt to hash user passwords before storing them in the database for added security.
- **Improved User Experience**: Users now receive a confirmation message after successful registration.

## Milestone 7: Logic Added to Signup Page and login page

This milestone focuses on adding robust logic to the Signup and Login pages, improving data validation, user authentication, error handling, database integration, and overall user experience. These enhancements lay the groundwork for a secure and user-friendly application, ensuring that user interactions are smooth and reliable.

Feel free to reach out if you need further details or have any questions!

### Milestone 8: Home Page with Product Display

In this milestone, we've added a Home Page to our e-commerce application, where our products are prominently displayed. Here are the key features and improvements:

#### Key Features:
1. **Product Display**:
   - The Home Page now showcases a variety of products with images, names, and prices.
   - Each product is displayed in a grid layout for easy browsing.

2. **Responsive Design**:
   - The layout is fully responsive, ensuring optimal viewing on different devices, including desktops, tablets, and mobile phones.

3. **User-Friendly Interface**:
   - Enhanced the user interface with intuitive navigation, ensuring a smooth and enjoyable shopping experience.
   - Added hover effects and animations to improve visual appeal and interactivity.

#### Summary:
This milestone focuses on creating an engaging Home Page where users can easily browse and explore our products. By adding responsive design. we have significantly improved the user experience. This update marks an essential step in making our e-commerce application user-friendly and visually appealing.

# 🛍️ Product Management Frontend (Milestone 9)

A React.js frontend to interact with the **Product API** (Milestone 10). Users can add and view products in a simple UI.

## 🚀 Features
- Display a form to add products.
- Form to add a new product.
- Connects to **Express & MongoDB API** (Milestone 10).


# 🛒 Product API (Milestone 10)

A simple Express & MongoDB API to store product details with validation using Mongoose.

## 🚀 Features
- Create a product with **name, description, price, and image**.
- Validates input before storing data in MongoDB.
- RESTful **POST endpoint** to add products.

# Product endpoint 
send all products which are updated by uploading form

# Milestone 11: Dynamic Home Page

## Welcome to Milestone 11! 🌟

Today, we will make our home page that will display all the products dynamic. We will write an endpoint that will send all the data that was saved in MongoDB using the add products page earlier.

### Learning Goals 🎯
By the end of this milestone, you will:
- Understand how to write an endpoint that will extract and send data from MongoDB.
- Learn how to receive data at the frontend.
- Learn how to display that data dynamically using the product card component created earlier.

# Milestone 12: My Products Page

## Overview
In this milestone, we created a "My Products" page that displays all the products added by the user, filtered by their email.

## Features
- **Backend**: Added an endpoint to fetch products by user email.
- **Frontend**: Created a function to retrieve and display products dynamically.
- **Component**: Utilized the `Card` component to present each product.

Got it! Here’s a simplified version of the README file without code:

---

# Milestone 13: Edit Product Functionality

## Learning Goals 🎯
- Write an endpoint to update existing data in MongoDB.
- Autofill forms with previous data for editing.

# Milestone 14: Delete Product Functionality

## Learning Goals 🎯
- Write an endpoint to update existing data in MongoDB.
- Deletes the product from the page

Great, you're working on Milestone 15 of your follow-along project. Here’s a short README file tailored to your milestone:

---

# Milestone 15: Responsive navbar added

### Description
This milestone involves creating a responsive Navbar component with links to all pages in your application and ensuring smooth and easy navigation.

### Learning Goals 🎯
By the end of this milestone, you will:
- Learn how to create a Nav component.
- Understand how to reuse the same component across multiple pages.

### Features
- Links to Home, Add product, and Cart pages.
- Responsive design for all screen sizes.
- Reusable Navbar component.

# Milestone 16: Product in detail Page is added

### Description
This milestone involves creating a Page where it contains more detailed information about the product

### Features
- Links to Buy, Cart pages.
- Responsive design for all screen sizes.
- Shows similar products at bottom of Page.

### 🛒 Milestone 17: Cart Functionality in Node.js + MongoDB
This project adds cart functionality to an existing Node.js + MongoDB application. The functionality includes creating a cart, adding products to the cart, retrieving cart details, and removing products from the cart. Here’s a professional README.md file tailored for Milestone 18 — Fetching products inside a cart using the user's email:

### 🛒 Milestone 18: Fetch Products in Cart using User Email
This project adds functionality to fetch products inside a user's cart using their email. The backend endpoint retrieves cart data, including full product details, and returns it in a structured format to display on the cart page.

### Milestone 19: Cart Functionality Implementation
Overview 📝
In this milestone, we implemented a cart system with both frontend and backend functionalities. The cart page is designed to display products dynamically, allowing users to adjust the quantity of each product with + and - buttons. Backend endpoints were created to handle quantity updates efficiently.

Key Features 🚀
Cart Frontend Page:
Displays all the products in the user's cart.
Each product has:
Name
Price
Product Image
Quantity Counter with + and - buttons.
### Milestone 20: Profile Page and User Data API
Overview 📝
In this milestone, we implemented a profile page and a backend endpoint to enhance user experience and manage user data. The profile page displays key user information such as profile photo, name, email, and address. It allows adding new addresses while handling cases where no addresses exist.

Key Features 🚀
Backend Endpoint:

Created an endpoint to retrieve all user data.
Supports sending user data via email (optional, as per requirements).
Frontend Profile Page:

Displays:
Profile Photo, Name, and Email in one section.
Address in another section.
Provides an option to Add Address.
Displays a fallback message "No address found" if no addresses are available.
Dynamic Design:

The profile page is designed with responsiveness and usability in mind.

## Milestone 21: Form to add user Address
Project Overview
This project implements an address form page where users can input and submit their address details. It includes the following fields:

Country
City
Address Line 1
Address Line 2
Zip Code
Address Type (Home/Office/Other)
Features
Address form with state to store user inputs.
Navigation to the address form page when "Add Address" is clicked in the profile section.
Data logging upon form submission (console output for demonstration).

## Milestone 22: Creating Backend Endpoint to Store Address
Project Overview
This project focuses on creating a backend endpoint to receive address data from a frontend form and save it in the user's address array inside the database. It helps you understand how to design and implement such endpoints.

Learning Goals ✨
Create a backend API endpoint.
Understand how to receive data from a frontend form.
Modify and save data within a database collection.
Features
Address Submission: Accepts address details submitted via the frontend form.
Data Storage: Adds the submitted address to the addresses array in the user's collection in the database.

## Milestone 23: Select Address Page + Order Schema
Frontend:
Added "Place Order" button inside the Cart Page
On click, it navigates to the Select Address Page
The Select Address Page:
Fetches and displays all saved user addresses
Allows selection of a delivery address
Backend:
Created an API endpoint: GET /api/addresses/:email
Fetches all saved addresses for the given user email
Database:
Created a new Order Schema using Mongoose to store:
User ID
Products
Delivery Address
Order status

## Milestone 24: Order Confirmation Page
Displays the selected delivery address
Lists all cart products with quantity and total price
Shows "Confirm Order" button
This page summarizes everything before placing the order

## Milestone 25: Backend - Place Order Endpoint
Endpoint: POST /api/orders/place
Accepts:
User email
Selected address
Cart products
Retrieves user ID from the database
Creates one order per product (same address for all)
Saves each order to the orders collection

## Milestone 26: Backend - Get User Orders
Endpoint: POST /api/orders/my-orders
Accepts user email in the body
Finds the corresponding user ID
Returns all orders made by that user from the database

## Milestone 27: My Orders Page (Frontend)
New route: /my-orders
Sends GET request to my-orders endpoint with user email
Displays all orders in a card/grid format
Added "My Orders" link to the Navbar