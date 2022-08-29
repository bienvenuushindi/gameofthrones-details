import { useSelector } from 'react-redux';
import StateItem from './stateItem';

const StateList = () => {
  const states = useSelector((state) => state.states);
  console.log(states);
  const list = states.map((item) => (
    <StateItem
      key={item.state_code}
      code={item.state_code}
      name={item.name}
    />
  ));
  return (
    <nav>
      <ul>
        {list}
      </ul>
    </nav>
  );
};

export default StateList;
// `
