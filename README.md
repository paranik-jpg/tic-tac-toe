# tic-tac-toe
A simple **Tic Tac Toe** game built using **HTML**, **CSS**, and **JavaScript**.  
This project allows two players to play against each other on the same device.

---

## 📌 Features
- ✅ Two-player mode (O starts first)
- ✅ Dynamic turn switching between **O** and **X**
- ✅ Highlights the winner and disables further moves
- ✅ Detects and announces a **draw**
- ✅ "New Game" and "Reset" buttons
- ✅ Responsive game grid with custom styling

---

## 🎯 How to Play
- **Player O** always starts first.
- Click on an empty box to make your move.
- The turn alternates between **O** and **X**.
- The game stops when:
  - A player matches 3 symbols in a row (win)
  - All 9 cells are filled without a winner (draw)
- Use:
  - **"New Game"** → Start a fresh game without reloading the page.
  - **"Reset"** → Reset scores and restart the game.

---

## 🛠️ Technologies Used
- **HTML5** → Markup for game board
- **CSS3** → Styling & grid layout
- **Vanilla JavaScript (ES6)** → Game logic handling turns, win/draw detection, and UI updates

---

## 🔍 Game Logic
- The game board is a `3×3` grid of buttons.
- Winning combinations are checked against a predefined array of patterns:

const winPatterns = [
, [0,0, 4,]

[1, 4,,]


[3,6, 7,```

    After every move:

        Check if a win condition is met → Display winner message.

        If all boxes are filled without a winner → Display "Draw".
