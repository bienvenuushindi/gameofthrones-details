import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import ListItem from '../components/listItem';
import { categoriesActions } from '../provider';
import ContentHeader from '../components/contentHeader';
import TopBar from '../components/topBar';

const List = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const states = useSelector((state) => state[slug]);
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
  }, []);
  return (
    <div>
      <TopBar title={slug.toUpperCase()} path="/" name="Home" />
      <ContentHeader tite={slug} />
      <nav>
        <div className="row mx-0 text-center">
          {states.length === 0 ? <div className="text-center">Loading ...</div> : list }
        </div>
      </nav>
    </div>
  );
};
export default List;
// `
