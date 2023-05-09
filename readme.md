# Quiz App

This is a simple quiz application built with React. It allows users to answer a series of questions and displays their score at the end. The questions are stored in a separate file and can be easily modified or extended.

## Usage

To use the quiz app, simply click on the "Start Quiz" button to begin. Once the quiz has started, select one of the answer options for the current question and click on "Next Question" to move to the next question. You can also see a hint for the current question by clicking on the "Hint" button. Once you have answered all the questions, click on the "Submit Quiz" button to see your final score.

## Logic Used

The quiz app is built using React hooks. The `useState` hook is used to manage the state of the application, such as the current question, the selected answer, the score, etc. The `useRef` hook is used to store a reference to the timer used to track the time taken to complete the quiz.

The `handleOptionSelect` function is called when the user selects an answer option. It sets the `selectedOption` state to the selected option.

The `handleNextQuestion` function is called when the user clicks on the "Next Question" button. It checks whether the selected option is correct or not and updates the score accordingly. It then moves on to the next question and resets the state of the application. If the last question is reached, the function displays the final score and congratulates the user.

The `handleHintClick` function is called when the user clicks on the "Hint" button. It toggles the `hintVisible` state and updates the score accordingly.

The `handleStartQuiz` function is called when the user clicks on the "Start Quiz" button. It sets the `quizStarted` state to true and starts the timer.

The `handleSubmitQuiz` function is called when the user clicks on the "Submit Quiz" button. It stops the timer, calculates the time taken and displays the final score.

## Implementation

The questions for the quiz are stored in a separate file named `constants.js`. The file exports an array of objects, each object representing a question with its answer options, correct answer, and hint.

The app is implemented using functional components in React. The main component is the `Quiz` component, which manages the state of the application and renders the UI. The UI is divided into several components, each responsible for rendering a specific part of the app, such as the question, answer options, hint, etc.

## Conclusion

This quiz app is a simple demonstration of how to build an interactive application using React hooks. It can be easily extended or modified to suit different requirements.

### Alternate 
If the site fails to load due to some error users can always start the site using traditional approach by cloning the repository and installing all the dependencies

### Installation

1. Clone the repository to your local machine using the following command:

   ```
   git clone [repository URL]
   ```

2. Navigate to the project directory:

   ```
   cd [project directory]
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Navigate to the server directory:

   ```
   cd server
   ```

5. Start the server:

   ```
   npm start
   ```

6. Open another terminal and navigate to the client directory:

   ```
   cd ../client
   ```

7. Start the client:

   ```
   npm run dev
   ```

8. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## Built With

- [Node.js](https://nodejs.org)
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Authors

- Amod Katiyar
https://github.com/Amod03 

Enjoy ✌✌