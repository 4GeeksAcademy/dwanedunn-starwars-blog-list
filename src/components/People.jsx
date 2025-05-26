import { useEffect, useState } from 'react';
import { Item } from './Item';
import storeReducer, { initialStore } from '../store';

export const People = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const [error, setError] = useState();
  const BASE_URL = 'https://www.swapi.tech/api/people/?page=1&limit=8';

  console.log(BASE_URL);
  const fetchPeople = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}`);
      if (response.ok) {
        const peopleResponse = await response.json();
        console.log('People fetch: ', peopleResponse);
        setPeople(peopleResponse.results || []);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
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
