// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { PeopleList } from '../components/PeopleList.jsx';
import { PlanetList } from '../components/PlanetList.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <PeopleList />

      <PlanetList />
    </>
  );
};
