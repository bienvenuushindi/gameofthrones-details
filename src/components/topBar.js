import PropTypes from 'prop-types';
import { BiMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import PreviousPage from './previousPage';

const TopBar = (props) => {
  const {
    path, name, title,
  } = props;
  return (
    <div className="row mx-0 bg-app pt-1 pb-2">
      <div className="col-3 back-menu control">
        <PreviousPage path={path} name={name} />
      </div>
      <div className="col-6 text-center mt-2">
        {title}
      </div>
      <div className="col-3 control mx-0 text-end d-flex justify-content-between display-6 mt-1">
        <BiMicrophone />
        <FiSettings />
      </div>
    </div>
  );
};

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default TopBar;
