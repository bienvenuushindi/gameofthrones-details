import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import ListItem from '../components/listItem';
import { categoriesActions } from '../provider';
import ContentHeader from '../components/contentHeader';
import TopBar from '../components/topBar';

const List = () => {
  const { slug = 'units' } = useParams();
  const dispatch = useDispatch();
  const states = useSelector((state) => state[slug]) || [];
  // const [loading, setLoading] = useState(true);
  const list = states.map((item, index) => (
    <ListItem
      key={`${slug}-${item.id}`}
      code={slug}
      id={item.id}
      index={index}
      name={item.name}
    />
  ));
  useEffect(() => {
    if (states.length === 0) dispatch(categoriesActions[slug]);
    // setLoading(false);
  }, []);
  return (
    <div>
      <TopBar title={slug.toUpperCase()} path="/" name="Home" />
      <ContentHeader tite={slug} />
      <nav>
        <div className="row mx-0 text-center">
          {list }
        </div>
      </nav>
    </div>
  );
};
export default List;
// `
