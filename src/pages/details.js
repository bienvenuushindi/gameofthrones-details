import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const states = useSelector((state) => state.states);
  const { slug } = useParams();
  const item = states.filter((item) => item.state_code === slug);
  console.log(item);
  return (
    <div>
      {slug}
    </div>
  );
};
export default Details;
