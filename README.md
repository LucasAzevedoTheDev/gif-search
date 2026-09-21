# Gif Search

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

A simple browser app that shows a GIF for whatever you type, built with Vanilla JavaScript, HTML, and CSS. This project is part of The Odin Project's JavaScript curriculum, focused on asynchronous code and working with APIs.

## Features

- **Search any word or phrase** and get a matching GIF from the Giphy API.
- **Family-friendly results:** requests are limited to the `g` rating.
- **Error handling:** failed requests are caught and logged to the console.

## Key Learnings

- **Async/await:** rewrote the app logic with `async`/`await` for cleaner asynchronous code.
- **Fetch API:** requesting data from the Giphy `translate` endpoint and parsing the JSON response.
- **Error handling:** using `try`/`catch` around network requests.
- **DOM manipulation:** updating the `img` source with the result.

## How to run locally

1. Clone this repository:  
   `git clone https://github.com/LucasAzevedoTheDev/gif-search.git`
2. Open `index.html` in your browser.

---

Developed by [Lucas Azevedo](https://github.com/LucasAzevedoTheDev)
