import React, { useState, useEffect } from 'react';
// import { Card } from './Card';

export const Planets = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://www.swapi.tech/api/planets?page=1&limit=8'
      );
      const planetResponse = await response.json();
      setPlanets(planetResponse.results);
      console.log('planets:', planetResponse.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center">
        <h2 className="text-danger">Error: {error.message}</h2>
        <p>Something went wrong! Please refresh the page to try again!</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-row flex-nowrap justify-content-evenly overflow-scroll">
      <h3 className="text-danger ms-4">Planets</h3>
      <ul>
        {planets.map((planet) => {
          return <li key={planet.uid}>{planet.name}</li>;
        })}
      </ul>
    </div>
  );
};
