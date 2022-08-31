import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const StateItem = (props) => {
  const { name } = props;
  return (
    <div className="col-6 ">
      <NavLink
        to="/details"
        className="card m-1 bg-app text-end d-flex flex-column justify-content-between p-1"
        style={{ height: '100px' }}
      >
        <div className="text-end">
          <FaRegArrowAltCircleRight />
        </div>
        <span className="">{name}</span>
      </NavLink>
    </div>
  );
};

StateItem.propTypes = {
  name: PropTypes.string.isRequired,
};
export default StateItem;
