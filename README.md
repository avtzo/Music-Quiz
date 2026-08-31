🎵 Music Genre Quiz App
A responsive, dynamic web-based Quiz application that tests users' knowledge across various music genres (House, RnB, AfroBeat). Built with modern vanilla JavaScript, HTML5, and CSS3, the application features screen flow transitions, custom audio controls, device-specific responsive backgrounds, and interactive quiz mechanics.

🚀 Features
Genre Selection: Choose between multiple music genres (House, RnB, AfroBeat) with active button states.

Responsive Backgrounds: Dynamic background updates customized for both Desktop and Mobile viewports using JS media query detection.

Customized Audio & Controls: Custom-styled volume slider inputs using WebKit pseudo-elements and tailored player controls.

Dynamic Quiz Mechanics:

Randomized question pool for fresh gameplay on every run.

Interactive feedback on answer selection.

Automatic progress and score tracking.

Clean Single-Page Flow: Seamless screen transitions between Start Menu, Active Quiz, and Final Results without page reloads.

🛠️ Tech Stack
HTML5: Semantic layout and structured quiz screens.

CSS3: Custom UI styling, Flexbox/Grid layouts, custom range input styling (::-webkit-slider-thumb), and responsive breakpoints.

JavaScript (ES6+): Dynamic DOM manipulation, array methods (.map(), .forEach()), event handling, and viewport detection (window.matchMedia).

📂 Project Structure
Plaintext
├── assets/
│   ├── images/         # Genre background images (desktop & mobile variants)
│   └── audio/          # Sound effects and music tracks
├── index.html          # Main application structure
├── style.css           # Custom styles and responsive designs
└── app.js              # Core application logic & state management
💻 Getting Started
Prerequisites
To run this project locally, all you need is a modern web browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).

Installation & Execution
Clone the repository to your local machine:

Bash
git clone https://github.com/your-username/music-quiz-app.git

🕹️ How to Play
Select a Music Genre from the start screen.

Click Start Quiz to begin.

Answer the multiple-choice questions displayed on the screen.

View your total score on the end screen upon completion.

Click Back to Menu to reset the quiz state and choose another genre!
