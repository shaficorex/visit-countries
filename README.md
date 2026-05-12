# Countries Explorer React Project

## Overview

Countries Explorer is a React-based web application built to practice React fundamentals, component-based architecture, and state management using the `useState` hook.

The application fetches country data from an external API and displays each country dynamically as a card with its flag and details. Users can mark countries as visited, which updates the UI dynamically and maintains a visited countries list.

## Live Demo
- **Live Site:** https://stellar-chebakia-7455e3.netlify.app/

## API Used
- Countries API: https://openapi.programming-hero.com/api/all

## Features
- Fetch country data from external API
- Display countries dynamically using React
- Show country flags and information card by card
- Mark countries as visited
- Dynamic button text update (`Not Visited` → `Visited`)
- Conditional CSS styling for visited countries
- Display visited countries count
- Display visited countries list dynamically
- Practice state-driven UI updates

## Technologies Used
- React
- JavaScript (ES6)
- CSS
- HTML
- Netlify Deployment

## React Concepts Practiced 
### useState 
Used to store and update:
  - Visited countries 
  - Button state 
  - Dynamic UI updates 
  
### Example:
```jsx 
const [visitedCountries, setVisitedCountries] = useState([]);
```
# useEffect

Used for fetching API data when the component loads.

## Example:

```jsx
useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/all')
        .then(res => res.json())
        .then(data => setCountries(data));
}, []);
```

# Dynamic Rendering with `map()`

Countries are rendered dynamically from API data.

## Example:

```jsx
countries.map(country => (
    <Country country={country}></Country>
))
```

# Event Handling

Button click events are used to mark countries as visited.

## Example:

```jsx
<button onClick={() => handleVisited(country)}>
    Visited
</button>
```

# Conditional Styling

Visited countries receive different CSS styles dynamically.

## Example:

```jsx
display className={visited ? 'visited-country' : 'country'}
display \
to apply different styles based on whether the country is visited or not.
```

# Project Structure:
```
src/
├── components/
│   ├── Countries/
│   ├── Country/
│   └── VisitedCountries/
├── App.jsx
├── main.jsx
└── index.css```
```


# Core Learning Outcomes

This project helped strengthen understanding of:

- React component structure
- State management
- Data fetching
- Rendering dynamic data
- React re-rendering behavior
- Immutable state updates
- Event-driven UI updates
- Conditional rendering and styling

# Future Improvements

Potential features to add:

- Remove visited countries
- Search functionality
- Filter by region
- Loading spinner
- Error handling
- Save data using localStorage
- React Router integration
- Dark mode
- Responsive UI improvements

# Installation

Clone the repository:

```bash
git clone https://github.com/shaficorex/visit-countries.git
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

# Deployment

The project is deployed using:
- **Netlify**

# Author

**Shafi**  
Computer Science Student | React Learner | Future Software Engineer
