import PropTypes from 'prop-types';
import Logo from '../logo.png';

const ContentHeader = (props) => {
  const {
    tite,
  } = props;
  const itemClassList = 'd-flex text-center  m-0 align-items-center';
  return (
    <div className="row mb-4 mx-0" style={{ minHeight: '100px' }}>
      <div className={`col-4 ${itemClassList}`}>
        <img src={Logo} alt="Age of Empire 2 logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div className={`col-8 display-6 d-flex justify-content-center my-auto  h-100 box ${itemClassList}`} style={{ fontWeight: '700' }}>
        {`${tite || 'Empty Item'}`.toUpperCase()}
      </div>
    </div>
  );
};

ContentHeader.propTypes = {
  tite: PropTypes.string.isRequired,
};
export default ContentHeader;
