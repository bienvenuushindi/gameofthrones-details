import React from 'react';
import {
  cleanup, render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import store from '../redux/configureStore';
import Home from '../pages/home';
import { categories } from '../provider';

afterEach(cleanup);
describe('Test HomePage', () => {
  // const category = categories[0];
  it('should have a text  What do you want to know', () => {
    render(<Home />, { wrapper: BrowserRouter });
    const element = screen.getByText(/WHAT DO YOU WANT TO KNOW/i);
    expect(element).toBeInTheDocument();
  });
  describe.each(categories)('Should list categories %i', (category) => {
    it(`Should have the text ${category}`, async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>,
      );
      const item = screen.getByText(new RegExp(category, 'i'));
      expect(item).toBeInTheDocument();
    });
    test('should load a new page on click', () => {
      const history = createMemoryHistory({ initialEntries: ['/'] });
      const { getByText } = render(
        <Router location={history.location} navigator={history}>
          <Home />
        </Router>,
      );
      expect(history.location.pathname).toBe('/');
      fireEvent.click(getByText(new RegExp(category, 'i')));
      expect(history.location.pathname).toBe(`/${category}`);
    });
  });
});
