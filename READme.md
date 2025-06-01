# Phase 0 Portfolio

## Description
This is a personal portfolio website showcasing my skills in HTML, CSS, and JavaScript. Since I have only learned these three technologies so far, I built this entire site using them. Although I could have created a static portfolio with plain HTML, I chose to leverage JavaScript heavily to demonstrate object/array usage, loops, conditionals, and DOM manipulation.

## Tech Stack
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

## Features
- **Dark/Light Theme Toggle**  
  A button switches between dark and light modes by adding/removing a CSS class on the `<body>` element.

- **Dynamic “About Me” Section**  
  JavaScript reads an object of personal information and injects the HTML for name, role, summary, and skills.

- **Dynamic Projects Grid**  
  An array of project objects is looped through to generate individual project cards (title, description, technologies, link).

- **Contact Card**  
  JavaScript builds a contact section with email, phone, and LinkedIn link based on a `contactInfo` object.

- **Responsive Layout**  
  The projects grid and header adapt to smaller screens without any external libraries.

## Installation & Usage
1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/GibsonWaheire/phase-0-portfolio.git



Open the project folder in your terminal/command prompt.

Inside the project folder, open index.html in your browser (double-click or right-click → “Open with…”).

The site will load with the dark theme by default. Click “Toggle Theme” to switch between dark/light.

No build step or server is required—everything runs in the browser.

File Structure

phase-0-portfolio/
├─ index.html
├─ style.css
└─ script.js

index.html Contains the empty containers (<section> elements) that JavaScript populates.

style.css Defines colors, layout, typography, and responsive behavior without using CSS variables.

script.js Holds all data objects/arrays and functions that generate the About, Projects, and Contact sections plus theme-toggle logic.

“About Me” Data

All personal details are stored in the aboutInfo object inside script.js. Example:

const aboutInfo = {
  name: "Gibson Waheire",
  role: "Phase 0 Student / Front-End Enthusiast",
  summary:
    "Learning the fundamentals of HTML, CSS, and JavaScript at Moringa School. Comfortable using the terminal and Git/GitHub to version and host projects.",
  skills: ["HTML5", "CSS3", "JavaScript (ES6 Basics)", "Git & GitHub", "Terminal Usage"],
};


To update the “About Me” section, simply edit this object.

Projects Data
Projects are stored in the projects array inside script.js. Each object has:

title

description

technologies (array)

link

Example:

const projects = [
  {
    title: "What to Eat Web App",
    description:
      "A simple food-recommendation app that suggests your next meal based on time of day. Built with plain HTML, CSS, and vanilla JavaScript. Hosted on GitHub Pages.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://gibsonwaheire.github.io/what-to-eat-web-app/",
  },
  {
    title: "My GitHub Profile",
    description:
      "All my Phase 0 and Foundation in Software Engineering projects are here. Forked, committed, and pushed using Git from the terminal.",
    technologies: ["Git", "GitHub", "Terminal"],
    link: "https://github.com/GibsonWaheire",
  },
];

Add or remove project objects to update the Projects grid.

Contact Data
const contactInfo = {
  email: "gibson.waheire@example.com",
  phone: "+254712345678",
  linkedin: "https://linkedin.com/in/GibsonWaheire",
};

Edit this object to update email, phone, or LinkedIn.

Why JavaScript?
Although a simple portfolio could be created entirely with HTML, I wanted to showcase my understanding of JavaScript basics (objects, arrays, loops, conditionals, DOM APIs). Every section of this site is built at runtime by JavaScript, rather than hardcoded in HTML. This reinforces the core Phase 0 concepts I’ve learned so far.

Customization
Update “About Me”
Edit the aboutInfo object in script.js.

Add or Remove Projects
Modify the projects array in script.js.

Change Contact Details
Update the contactInfo object in script.js.

Tweak Colors or Layout
Edit style.css (no CSS variables are used; fixed color values are defined directly).

License
This project is open source and available under the MIT License.#Portfolio_site-
