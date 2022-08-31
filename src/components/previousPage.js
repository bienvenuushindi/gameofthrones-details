import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';

const PreviousPage = (props) => {
  const { path, name } = props;
  return (
    <NavLink
      to={path}
      className="d-flex text-white bg-app px-2 pt-1 pb-2"
    >
      <div className="text-start display-6 ">
        <FaRegArrowAltCircleLeft />
      </div>
      <div className="mt-2 ml-2">{name.toUpperCase()}</div>
    </NavLink>
  );
};

PreviousPage.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default PreviousPage;
