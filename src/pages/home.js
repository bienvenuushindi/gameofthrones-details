import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { categories } from '../provider';

const Home = () => {
  const list = categories.map((item) => (
    <div key={item} className="col-6">
      <NavLink
        to={`/${item}`}
        key={item}
        className="card m-1 bg-app text-end d-flex flex-column justify-content-between p-1"
        style={{ height: '100px' }}
      >
        <div className="text-end">
          <FaRegArrowAltCircleRight />
        </div>
        <span className="">{item.toUpperCase()}</span>
      </NavLink>
    </div>
  ));
  return (
    <div className="d-flex flex-column h-100 justify-content-center">
      <h1 className="text-center">{'What Do You Want to Know?'.toUpperCase()}</h1>
      <div className="d-flex row mx-0">
        {list}
      </div>
    </div>
  );
};

export default Home;
