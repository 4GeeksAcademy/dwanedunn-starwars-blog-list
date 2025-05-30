// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { PeopleList } from '../components/People.jsx';
import { PlanetList } from '../components/Planets.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <PeopleList />

      <PlanetList />
    </>
  );
};
