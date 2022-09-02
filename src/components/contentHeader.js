import PropTypes from 'prop-types';

const ContentHeader = (props) => {
  const {
    title,
  } = props;
  const itemClassList = 'd-flex text-center  m-0 align-items-center';
  return (
    <div className="row mb-4 mx-0" style={{ minHeight: '100px' }}>
      <div className={`col-4 ${itemClassList}`}>
        <img src="/logo.png" alt="Game of thrones logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div className={`col-8 display-6 d-flex justify-content-center my-auto  h-100 box ${itemClassList}`} style={{ fontWeight: '700' }}>
        {`${title || 'Empty Item'}`.toUpperCase()}
      </div>
    </div>
  );
};

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
export default ContentHeader;
