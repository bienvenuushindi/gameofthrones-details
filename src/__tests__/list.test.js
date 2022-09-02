import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import List from '../pages/list';
import store from '../redux/configureStore';

it('Test List Page has Details', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <List/>
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
