import PropTypes from 'prop-types';
import { appColors } from '../provider';

const DetailItem = (props) => {
  const { name, value, index } = props;
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  const extractValue = (value) => {
    if (typeof value !== 'object') return value;
    if (Array.isArray(value)) {
      return value.length > 1 ? value.map((item, id) => (
        <DetailItem
          key={`${item}-${index}`}
          value={item}
          index={id}
        />
      )) : value;
    }
    return Object.entries(value).map((detail, id) => (
      <DetailItem key={`${detail[0]}-${index}`} name={detail[0]} value={detail[1]} index={id} />
    ));
  };
  return (
    <div
      className="col-12 py-2"
      style={(index % 2 === 0) ? appColors.bgTwo : appColors.bgOne}
    >
      <div className="mx-0 px-0 row">
        {name && <div className="h6 col-5" style={{ fontWeight: 600 }}>{capitalizeFirstLetter(name)}</div>}
        <div className="col-7">
          {extractValue(value)}
        </div>
      </div>
    </div>
  );
};

DetailItem.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
DetailItem.defaultProps = {
  name: null,
};
export default DetailItem;
