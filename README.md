# Sonam Dargay - Portfolio Site

## Purpose

This project is created for the fulfilment of Web & Mobile Application 
Development course taken as a part of my master's degree pursued in [Queensland University of Technology](https://qut.edu.au)

The project displays my profile, resume and portfolio as a software developer. 

## Packages installation Guide
1. React Bootstrap

I have used Bootstrap for theming of the project to make the designs consistent over various pages.

   ```npm install react-bootstrap bootstrap```

2. Axios

For handling HTTP requests, I have use ```axios```. To install it:

   ```npm install axios```

## Features
1. Homepage background changes based on the weather my location. 
2. Profile page extracts my public git repositories using GitHub API. Specific repo can be accessed using search feature.

## File Structure
```
my-portfolio
|- public
|- src
|-----| assets
|---------- | hero-image.png
|-----| components
|---------- | About.jsx
|---------- | Contact.jsx
|---------- | DocumentTitle.jsx
|---------- | Footer.jsx
|---------- | Home.jsx
|---------- | Navigation.jsx
|---------- | Portfolio.jsx
|---------- | Resume.jsx
|-----| service
|---------- | WeatherService.js
|-----| styles
|---------- | styles.css
|-----| App.css
|-----| App.js
|-----| index.js
|-----| logo.svg
|-----| reportWebVitals.js
|-----| setupTests.js
|- .env.example
|- .gitignore
|- LICENSE
|- package.json
|- README.md
```
