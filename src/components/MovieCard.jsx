import React from 'react';
import { Card, Badge } from 'react-bootstrap';


const MovieCard = ({ movie }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Card className="h-100 shadow-sm">


      <Card.Img 
        variant="top" 
        src={movie.image} 
        alt={movie.title}
        style={{ height: '700px', objectFit: 'cover' }}
      />

    {/* ================================================================ */}

      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title>{movie.title}</Card.Title>
          <Badge bg="warning" text="dark" pill>
            {movie.rating}/10
          </Badge>
        </div>

        
        <Card.Text>{movie.details}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        Released: {formatDate(movie.date)}
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;
