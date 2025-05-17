// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { People } from '../components/People.jsx';
import { Planets } from '../components/Planets.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <People />

      <Planets />
    </>
  );
};
