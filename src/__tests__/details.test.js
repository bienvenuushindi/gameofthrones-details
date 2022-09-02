import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Details from '../pages/details';
import store from '../redux/configureStore';

it('Test Details Page has details', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Details />
      </BrowserRouter>
    </Provider>,
  );
  const element = screen.getByText(/details/i);
  expect(element).toBeInTheDocument();
});
