# Real-Time Chat Application

## Project Overview : 
Create a real-time chat application using Node.js and Express. 

Users will be able to join chat rooms, send messages, and see real-time updates as other users participate in the conversation.

## Key Features
    1. User Authentication: Implement user registration and login functionality.
    2. Chat Rooms: Allow users to create or join chat rooms.
    3. Real-Time Messaging: Use WebSockets (e.g., Socket.io) to enable real-time communication between users.
    4. Message History: Store and display chat history for each room.
    5. User Profiles: Let users set up profiles with avatars and usernames.
    6. Responsive Design: Ensure the application works well on both desktop and mobile devices.


## Steps to Build the Project
    * Setup Project
    * Initialize a new Node.js project using npm init.
    * Install necessary dependencies (Express, Socket.io, etc.).
    * Create Routes and Views
    * Set up routes for home, login, registration, chat rooms, and user profiles.
    * Create HTML views for each route.
    * User Authentication
    * Implement user registration and login using Express middleware.
    * Use sessions or JWT for authentication.
    * Chat Room Logic
    * Create chat rooms dynamically.
    * Handle user joining and leaving rooms.
    * Emit messages to all users in a room.
    * Real-Time Messaging
    * Integrate Socket.io for real-time communication.
    * Emit and listen for chat messages.
    * Message History
    * Store chat messages in a database (e.g., MongoDB).
    * Retrieve and display message history when users join a room.
    * User Profiles
    * Allow users to upload avatars.
    * Display user information on their profile page.
    * Styling and Responsiveness
    * Use CSS or a front-end framework (e.g., Bootstrap) for styling.
    * Ensure the application looks good on various devices.
