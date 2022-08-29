import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const StateItem = (props) => {
  const { name, code } = props;
  return (
    <NavLink to={`/details/${code}`}>
      <li>{name}</li>
    </NavLink>
  );
};

StateItem.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
export default StateItem;
