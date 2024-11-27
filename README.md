"React Blog App"

Overview:

This is a simple React application designed to help me learn the basics of React, focusing on routing, state management, and fetching data from an API. The app allows users to view, create, and delete blog posts. It utilizes React Router for navigation and a custom hook for fetching data.

Features:

Blog Listing: Displays all blog posts with the ability to filter by author.
Create Blog: Form for adding new blog posts.
Blog Details: Each blog has a detailed view with an option to delete the post.
Error Handling: Displays error messages if data fetching fails.
Responsive Design: The layout adjusts to fit various screen sizes.

Technologies Used:

React
React Router
Custom Hook for Fetching Data
CSS
Pages/Components

Home:
Displays a list of blog posts and filters them by author.
Uses the useFetch hook to fetch blog data from the API.

Create:
A form for creating new blog posts.
Uses useState for form data management and useHistory to redirect after submission.

BlogDetails:
Displays detailed information about a selected blog.
Provides a button to delete the blog, which also redirects back to the homepage after deletion.

NavBar:
Provides navigation links for home, creating a new blog, and viewing blog details.
NotFound:

Displays a message when a non-existent route is accessed.
How It Works
Routing: React Router is used to navigate between pages: / (home), /create (create a new blog), and /blogs/:id (view a single blog post).
State Management: useState and useEffect hooks are used to manage the state of blog data, form inputs, and loading/error states.
Data Fetching: A custom hook (useFetch) is used to fetch blog data from a mock API (http://localhost:8000/blogs).
