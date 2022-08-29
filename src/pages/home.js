import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAll } from '../redux/states/actions';
import StateList from '../components/stateList';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);
  return (
    <div>
      <StateList />
    </div>
  );
};
export default Home;
