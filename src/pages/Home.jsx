// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <div className="text-left mt-5">
        <h2>Characters</h2>
      </div>
      <section></section>
    </>
  );
};
