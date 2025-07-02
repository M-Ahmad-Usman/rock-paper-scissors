# Rock Paper Scissors

A classic Rock Paper Scissors game implemented in JavaScript with an interactive web interface. This project demonstrates fundamental JavaScript concepts including DOM manipulation, event handling, and game logic implementation.

## About The Project

This project was created as part of **The Odin Project's** Foundations course assignments:

1. **[Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)** - Initial console-based implementation
2. **[Revisiting Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors)** - Adding UI and DOM manipulation

## Features

- **Interactive UI**: Click buttons to make your choice instead of typing in console
- **Visual Feedback**: Images representing each choice (rock, paper, scissors)
- **Score Tracking**: Real-time score display for both player and computer
- **5-Round Games**: Each game consists of 5 rounds with automatic winner determination
- **Auto-Reset**: Game automatically resets after 5 rounds for continuous play
- **Responsive Design**: Clean, centered layout that works on different screen sizes

## How to Play

1. Click on one of the three buttons: **Rock**, **Paper**, or **Scissors**
2. The computer will automatically make its choice
3. The winner of each round is determined by the classic rules:
   - Rock beats Scissors
   - Scissors beats Paper  
   - Paper beats Rock
4. Scores are updated after each round
5. After 5 rounds, the overall winner is announced
6. The game automatically resets for another 5-round match

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling and responsive layout
- **JavaScript (ES6)**: Game logic, DOM manipulation, and event handling

## Project Structure

```
rock-paper-scissors/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript game logic
├── images/             # Game assets
│   ├── rock.jpeg       # Rock hand symbol
│   ├── paper.jpeg      # Paper hand symbol
│   └── scissor.jpeg    # Scissors hand symbol
└── README.md           # Project documentation
```

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rock-paper-scissors.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rock-paper-scissors
   ```

3. Open `index.html` in your web browser or serve it using a local server

## Key Implementation Details

### Game Logic
- **Random Computer Choice**: Uses `Math.random()` to generate computer selections
- **Round Logic**: Implements all possible win/lose/tie scenarios
- **Score Management**: Tracks scores and rounds using global variables
- **Auto-Reset**: Cleans up scores and displays after each 5-round game

### DOM Manipulation
- **Event Delegation**: Uses event bubbling to handle button clicks efficiently
- **Dynamic Updates**: Real-time score and result display updates
- **Element Selection**: Efficient DOM querying and manipulation

### User Experience
- **Visual Feedback**: Clear button styling and image representation
- **Result Display**: Immediate feedback on round outcomes and final winners
- **Responsive Design**: Flexible layout using CSS Flexbox

## Learning Objectives Achieved

This project demonstrates proficiency in:

- **JavaScript Fundamentals**: Variables, functions, conditionals, and loops
- **DOM Manipulation**: Element selection, event handling, and content updates
- **Game Logic**: Implementing rules-based decision making
- **User Interface Design**: Creating intuitive and responsive layouts
- **Problem Solving**: Breaking down complex problems into manageable functions
- **Git Workflow**: Using branches, commits, and merges for version control

## Version History

- **v1.0**: Console-based implementation with basic game logic
- **v2.0**: Added web interface with clickable buttons and visual feedback
- **v2.1**: Enhanced UI with images and improved styling

## Acknowledgments

- **The Odin Project** for providing comprehensive learning materials and project guidelines
- **MDN Web Docs** for JavaScript and DOM API references
- **Git and GitHub** for version control and project hosting

---
*This project is part of my journey learning web development through The Odin Project curriculum.*