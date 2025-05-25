import React, { useState, useEffect } from 'react';
import { use } from 'react';
import { Card } from './Card';

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
    <div className="d-flex flex-row flex-nowrap justify-content-evenly overflow-scroll">
      <h3 className="text-danger ms-4">Planets</h3>

      {planets.map((planet) => {
        // return <li key={planet.uid}>{planet.name}</li>;
        return;
        <Card
          key={planet.uid}
          title={planet.name}
          imgURL={planet.image}
          imgAlt={planet.imgAlt}
          itemName={planet.name}
          itemDescription={planet.description}
          linkURL={planet.linkURL}
          linkText={planet.linkText}
          // <Link to={`/planets/${planet.uid}`}>{planet.name}</Link>
        />;
      })}
    </div>
  );
};
