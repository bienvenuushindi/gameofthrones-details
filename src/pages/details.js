import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../redux/states/actions';

const Details = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.states);
  const { slug } = useParams();
  console.log(states);
  useEffect(() => {
    dispatch(fetchDetails(slug));
  }, []);
  return (
    <div>
      {slug}
    </div>
  );
};
export default Details;
