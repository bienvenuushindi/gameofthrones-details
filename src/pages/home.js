import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { actionSources } from '../provider';
import Logo from '../logo.png';

const Home = () => {
  const list = actionSources.map((item) => (
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
      <div className="text-center">
        <img src={Logo} alt="Game of thrones logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <h1 className="text-center">{'What Do You Want to Know?'.toUpperCase()}</h1>
      <div className="d-flex row mx-0">
        {list}
      </div>
    </div>
  );
};

export default Home;
