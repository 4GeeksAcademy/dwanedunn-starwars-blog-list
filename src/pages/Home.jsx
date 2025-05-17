// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { People } from '../components/People.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      {/* Display the People Component */}
      <People />
      {/* Display the Characters Component */}
      {/* <Planets /> */}
    </>
  );
};
