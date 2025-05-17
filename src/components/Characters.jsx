import { useEffect, useState } from 'react';

export const Characters = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const BASE_URL = 'https://www.swapi.tech/api/';
  const END_POINT = 'people/';
  const URL = BASE_URL + END_POINT;
  console.log(URL);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${URL}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
          const posts = await response.json();
          console.log(posts);
          setPosts(posts);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
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

  if (!isLoading && !error) {
    return (
      <div className="text-center">
        <h2 className="text-danger">No Characters Found</h2>
      </div>
    );
  }

  return (
    <>
      <div className="text-left ms-3">
        <h2 className="text-danger">Characters</h2>
      </div>
      <ul>
        {/* Test the datafetch */}
        {posts.map((post) => {
          return <li key={post.id}>post.title</li>;
        })}
      </ul>
    </>
  );
};
