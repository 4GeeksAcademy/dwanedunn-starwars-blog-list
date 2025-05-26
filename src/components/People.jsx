import { useEffect, useState } from 'react';
import { Item } from './Item';

export const People = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const [error, setError] = useState();
  const BASE_URL = 'https://www.swapi.tech/api/people/';

  console.log(URL);
  console.log(BASE_URL);

  useEffect(() => {
    const fetchPeople = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          'https://www.swapi.tech/api/people?page=1&limit=8'
        );
        if (response.ok) {
          // throw new Error('Network response was not ok');
          const data = await response.json();
          setPeople(data.results);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPeople();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <h2 className="text-danger">Loading...</h2>
      </div>
    );
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
    <>
      <div className="text-left ms-3">
        <h2 className="text-danger">People</h2>
      </div>
      <div className="card-group">
        {people.map((person) => {
          return (
            <Item
              key={person.uid}
              imgURL={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
              imgAlt={person.name}
              itemTitle={person.name}
              itemDesc={`Height: ${person?.height} cm`}
            />
          );
        })}
      </div>
    </>
  );
};
