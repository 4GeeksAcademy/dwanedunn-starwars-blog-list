import { useEffect } from 'react';

export const characters = () => {
  useEffect(() => {
    const base_url = 'https://www.swapi.tech/api/';
    const endPoint = 'characters/1/';
    const url = base_url + endPoint;
    console.log(url);
    // use async to fetch data
    // await the data
    // put the data in a variable
    // use the variable to display the data

    document.title = 'Characters';
  }, []);
  return <div>characters</div>;
};
