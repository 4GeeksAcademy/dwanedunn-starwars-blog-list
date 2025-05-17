import { useEffect } from 'react';

export const Characters = () => {
  useEffect(() => {
    async function fetchCharacters() {
      const base_url = 'https://www.swapi.tech/api/';
      const endPoint = 'characters/1/';
      const url = base_url + endPoint;
      console.log(url);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const characters = await response.json();
        console.log(characters);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <>
      <div className="text-left ms-3">
        <h2 className="text-danger">Characters</h2>
      </div>
    </>
  );
};
