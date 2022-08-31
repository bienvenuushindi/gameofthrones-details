import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const { name, code, id } = props;
  return (
    <NavLink
      to={`/details/${code}-${id}`}
      className="card m-1 bg-app text-end d-flex flex-column justify-content-between p-1"
      style={{ height: '100px' }}
    >
      <div className="text-end">
        <FaRegArrowAltCircleRight/>
      </div>
      <span className="">{name}</span>
    </NavLink>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default ListItem;
