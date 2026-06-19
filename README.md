# JS DOM Gallery

A dynamic image grid generator built with Vanilla JavaScript, focusing on DOM manipulation, dynamic HTML element creation, and robust user input validation. Styled with Tailwind CSS.

## 🚀 Features
- **Dynamic Grid Generation:** Constructs a customized image layout on the fly based on user input, fetching assets from the Lorem Picsum API using template literals.
- **Robust Input Validation:** Implements defensive programming to handle edge cases. Safely intercepts non-numeric inputs (`NaN`), negative numbers, and massive load requests (inputs > 1000).
- **Custom Error UI State:** Dynamically alters the DOM to display a dedicated warning screen (hiding default elements and injecting an error graphic) if invalid data is provided.
- **DOM Manipulation Practice:** Demonstrates clean utilization of `document.createElement()`, `.classList.add()`, and `.append()` to structure components safely via script.
- **Responsive Layout:** Uses Tailwind CSS flexbox to create a fluid, centered card grid that scales perfectly across devices.

## 🛠️ Tech Stack
- **Structure:** HTML5
- **Styling:** Tailwind CSS (via CDN)
- **Logic:** Vanilla JavaScript (ES6+)
- **Assets:** [Lorem Picsum API](https://picsum.photos/)

## 📸 Core Logic Concept
The application routes user input through strict boundary checks before attempting to generate the DOM elements to ensure stability:

```javascript
// 🚨 1. ERROR STATE: Catch bad inputs, negatives, and overloads
if (isNaN(userInput) || userInput > 1000 || userInput <= 0) {
    // Triggers dedicated Error UI state
} 
// ✅ 2. SUCCESS STATE: Only run if the input is perfect
else {
    // Safely builds the dynamic gallery components
}
