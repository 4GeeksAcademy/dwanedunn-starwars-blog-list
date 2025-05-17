// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { Characters } from '../components/Characters.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      {/* Display the Characters Component */}
      <Characters />
      {/* Display the Characters Component */}
      {/* <Planets /> */}
    </>
  );
};
