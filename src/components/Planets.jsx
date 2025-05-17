import React, { useState, useEffect } from 'react';
import { use } from 'react';

export const Planets = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      setIsLoading(true);

      try {
        //   Limit the number of planets to 8 on 1 page
        const response = await fetch(
          'https://www.swapi.tech/api/planets?page=1&limit=8'
        );
        const data = await response.json();
        console.log('this is the data:', data);
        console.log('this is the data.results:', data.results);
        setPlanets(data.results);
      } catch (error) {
        setError(error);
        console.log('this is the error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Call the fetchPlanets function
    fetchPlanets();

    // Only run the effect once when the component mounts
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Planets</h3>
      <ul>
        {planets.map((planet) => {
          return <li key={planet.uid}>{planet.name}</li>;
        })}
      </ul>
    </div>
  );
};
