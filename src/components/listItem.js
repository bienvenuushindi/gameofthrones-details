import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const {
    name, code, id, index,
  } = props;
  return (
    <div className="col-6 p-0">
      <NavLink
        to={`/details/${code}-${id}`}
        className={`mx-0 text-end d-flex text-white flex-column justify-content-between p-1 ${((index % 4 === 0) || (index % 4 === 3)) ? 'bg-app' : 'bg-app-2'}`}
        style={{ height: '100px' }}
      >
        <div className="text-end">
          <FaRegArrowAltCircleRight />
        </div>
        <div>
          <div>{name}</div>
          <div>{id}</div>
        </div>
      </NavLink>
    </div>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
export default ListItem;
