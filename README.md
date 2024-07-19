# Shih Tzu Dog Gallery Website

## Project Overview

The Shih Tzu Dog Gallery Website is a responsive and interactive web application showcasing a gallery of Shih Tzu dogs. It features a dynamic gallery with detailed information about each dog, a responsive navigation menu, and a contact form. The application utilizes a modern tech stack for both frontend and backend development.

## Features

- **Gallery Page**: Displays images of Shih Tzu dogs with details such as price, name, and gender. The layout is responsive, adjusting to different screen sizes with CSS.
- **Navigation**: A responsive navigation menu that includes smooth scrolling to different sections of the website.
- **Contact Form**: Users can submit inquiries through a contact form, with backend support for handling submissions.
- **Backend API**: Provides endpoints for managing gallery items and processing contact form submissions.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: RESTful API for gallery management and contact form submissions
- **Tools**: Body-parser, CORS, Nodemon, Mongoose

## Installation and Setup

### Frontend

1. **Clone the Repository**

   ```bash
   git clone <frontend_repository_url>
   cd frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Frontend**

   ```bash
   npm start
   ```

### Backend

1. **Clone the Repository**

   ```bash
   git clone <backend_repository_url>
   cd backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the `backend` directory:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the Server**

   ```bash
   npx nodemon server.js
   ```

## API Endpoints

- **Gallery Items**
  - **GET /api/gallery**: Retrieve all gallery items.
  - **POST /api/gallery**: Add a new gallery item. Requires JSON body with `name`, `price`, `gender`, and `imageUrl`.

- **Contact Form**
  - **POST /api/contact**: Submit a contact form. Requires JSON body with `name`, `email`, and `message`.

## Frontend Integration

- **Fetch Gallery Items**

  ```javascript
  fetch('http://localhost:5000/api/gallery')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

- **Submit Contact Form**

  ```javascript
  fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'John Doe', email: 'john@example.com', message: 'Hello!' })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Special thanks to [Your Name/Organization] for providing the initial inspiration and resources for this project.

