<img width="1418" alt="Screenshot 2025-04-28 at 11 32 05 AM" src="https://github.com/user-attachments/assets/fa0e4ae7-5f60-4af9-a897-a202cc12f0bb" /><!-- @format -->

# 🎬 Movie Cards Application

A responsive React application that displays a collection of movie cards with details using Bootstrap for styling.

![Movie Cards Screenshot]([Uploading Screenshot 2025-04-28 at 11.32.05 AM.png…]
s+App)

##  Features

- **Responsive Design**: Works on all device sizes
- **Movie Cards**: Displays movie information in attractive card format
- **Bootstrap Styling**: Uses React Bootstrap components for modern UI
- **Hover Effects**: Interactive card animations

## 🚀 Technologies Used

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [React Bootstrap](https://react-bootstrap.github.io/) - Bootstrap components for React

## Project Structure

```
movies-card/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MovieCard.jsx    # Individual movie card component
│   │   ├── MoviesList.jsx   # Grid layout of movie cards
│   │   └── Navbar.jsx       # Application navigation bar
│   ├── data/
│   │   └── moviesData.js    # Sample movie data
│   ├── App.css              # Application styles
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
└── package.json             # Project dependencies
```

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone <https://github.com/mahmoudadel810/React-Card_movies.git>
   cd movies-card
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📱 Responsive Design

The application is fully responsive and works on:

- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop computers

## 🧩 Components

### Navbar

A simple navigation bar that displays the application title.

### MovieCard

Displays individual movie information including:

- Movie title
- Movie poster image
- Release date
- Rating
- Movie description

### MoviesList

Arranges multiple MovieCard components in a responsive grid layout.

## 📊 Data Structure

Each movie object contains:

```javascript
{
  id: 1,
  title: "Movie Title",
  details: "Movie description...",
  date: "YYYY-MM-DD",
  image: "image-url.jpg",
  rating: 8.5
}
```

## 🔄 Future Enhancements

- Add search functionality
- Implement filtering by genre, year, or rating
- Add movie details page
- Integrate with a movie API for real-time data

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
