import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import ListItem from './listItem';
import { categoriesActions } from '../provider';

const List = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const states = useSelector((state) => state[slug]);
  const list = states.map((item) => (
    <ListItem
      key={item.id}
      name={item.name}
    />
  ));
  useEffect(() => {
    if (states.length === 0) dispatch(categoriesActions[slug]);
  });
  return (
    <div>
      <div className="row">
        <div className="col-6 bg-white ">Logo</div>
        <div className="col-6 ">{slug}</div>
      </div>
      <nav>
        <div className="row ">
          {list}
        </div>
      </nav>
    </div>
  );
};
export default List;
// `
