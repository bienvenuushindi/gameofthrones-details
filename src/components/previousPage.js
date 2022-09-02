import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';

const PreviousPage = (props) => {
  const { path, name } = props;
  return (
    <NavLink
      to={path}
      className="d-flex align-items-center  h-100 text-white"
    >
      <div className="text-start display-6 ">
        <FaRegArrowAltCircleLeft />
      </div>
      <div className="mt-1 mx-1 ">{name.toUpperCase()}</div>
    </NavLink>
  );
};

PreviousPage.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default PreviousPage;
