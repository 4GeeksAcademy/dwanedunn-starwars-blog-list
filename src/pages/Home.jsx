// import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <div className="text-left ms-3">
        <h2 className="text-danger">Characters</h2>
      </div>
      <section></section>
    </>
  );
};
