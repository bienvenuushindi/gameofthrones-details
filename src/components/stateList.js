import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import StateItem from './stateItem';
import { getAll } from '../redux/states/actions';

const StateList = () => {
  const states = useSelector((state) => state.states);
  const dispatch = useDispatch();
  useEffect(() => {
    if (states.length === 0) dispatch(getAll());
  }, []);
  console.log(states);
  const list = states.map((item) => (
    <StateItem
      key={item.state_code}
      code={item.state_code}
      name={item.name}
    />
  ));
  return (
    <div>
      <div className="row">
        <div className="col-6 bg-white ">Logo</div>
        <div className="col-6 ">US Covid Data</div>
      </div>
      <nav>
        <div className="row ">
          {list}
        </div>
      </nav>
    </div>
  );
};

export default StateList;
// `
