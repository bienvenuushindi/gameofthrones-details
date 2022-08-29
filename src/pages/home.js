import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAll } from '../redux/states/actions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);
  return (
    <div>
      Home
    </div>
  );
};
export default Home;
