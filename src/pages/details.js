import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetailItem from '../components/detailItem';
import ContentHeader from '../components/contentHeader';
import TopBar from '../components/topBar';

const Details = () => {
  const { slug = 'Item Not Found-0' } = useParams();
  const [category, index] = slug.split('-');
  const states = useSelector((state) => state[category]) || [];
  const details = states.find((item) => item.id === parseInt(index, 10)) || { name: 'No item Found' };
  const list = Object.entries(details).map((detail, id) => (
    <DetailItem key={`${detail[0]}-${index}`} name={detail[0]} value={detail[1]} index={id} />
  ));
  return (
    <div>
      <TopBar title={`${details.name}`} path={`/${category}`} name={category} />
      <ContentHeader tite={category} />
      <div className="row mx-0">
        <DetailItem
          name={'Details about'.toUpperCase()}
          index={21}
          value={details.name.toUpperCase()}
        />
        {list}
      </div>
    </div>
  );
};
export default Details;
