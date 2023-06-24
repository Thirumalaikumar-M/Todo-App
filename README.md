# Todo App

This is a fully functional Todo App built with React, utilizing the power of Tailwind CSS and powered by Firebase. Tailwind CSS is a utility-first CSS framework that provides a comprehensive set of pre-built styles and utilities. It is important in this project because it allows for rapid development by providing ready-to-use classes that can be easily applied to components, resulting in consistent and responsive designs. Firebase is a powerful backend platform that provides various services, including Firestore, which is used in this app for real-time data storage and synchronization.

## Features

- Create new todos by entering a task description.
- Mark todos as completed or incomplete.
- Edit the description of existing todos.
- Delete todos.
- Real-time data synchronization using Firebase Firestore.

## Technologies Used

- React
- Tailwind CSS
- Firebase Firestore

## Demo

https://github.com/Thirumalaikumar-M/Todo-App/assets/111740460/d50d499d-7ae1-4857-b60d-6ca8e03c5a4d

## Deployment

View my deployment on Netlify : <a href="https://tk-todo-app.netlify.app/">https://tk-todo-app.netlify.app/</a>

## Setup

To run the Todo App locally on your machine, follow these steps:

1. Make sure you have Node.js installed on your machine.

2. Clone this repository or download the source code.
   ```
     git clone https://github.com/Thirumalaikumar-M/Todo-App.git
   ```
3. Open a terminal and navigate to the project directory.
   ```
     cd todo-app
   ```
4. Run the following command to install the project dependencies:
   ```
     npm install
   ```
   
5. Set up Firebase:
   - Login or Signup with Firebase
   - Create a Firebase project on the Firebase Console.
   - Enable Firestore as the database for the project.
   - Obtain the Firebase configuration object, including the API key and other credentials.
   - Replace the placeholder values in the src/firebase.js file with your Firebase configuration.

6. Start the development server with the following command:
   ```
     npm start
   ```
7. Open the app in your browser:
   - Open http://localhost:3000 in your preferred browser.
   - The Todo App should now be running and accessible in your browser.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
