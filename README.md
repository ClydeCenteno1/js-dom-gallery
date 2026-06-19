# JS DOM Gallery

A dynamic image grid generator built with Vanilla JavaScript to practice DOM manipulation, dynamic HTML element creation, and utility-first styling with Tailwind CSS.

## 🚀 Features
- **User-Driven Grid:** Prompts the user for a specific number of images and dynamically builds the gallery layout on the fly.
- **DOM Manipulation Practice:** Demonstrates clean utilization of `document.createElement()`, `.classList.add()`, and `.append()` to structure components via script.
- **Dynamic API Fetching:** Leverages template literals to inject loop increments directly into the Lorem Picsum URL string (`https://picsum.photos/id/${i}/200/300`).
- **Responsive Layout:** Uses Tailwind CSS flexbox wraps to create a fluid, centered card grid that scales perfectly across devices.

## 🛠️ Tech Stack
- **Structure:** HTML5
- **Styling:** Tailwind CSS (via CDN)
- **Logic:** Vanilla JavaScript (ES6+)
- **Assets:** [Lorem Picsum API](https://picsum.photos/)

## 📸 Preview
The application dynamically builds a responsive grid container, wrapping each placeholder image alongside its specific iteration ID badge:

```html
<div class="border p-3 bg-gray-800 rounded-lg">
    <img src="[https://picsum.photos/id/1/200/300](https://picsum.photos/id/1/200/300)" alt="Practice Image">
    <p class="text-white text-center text-[1.1rem]">#1</p>
</div>
