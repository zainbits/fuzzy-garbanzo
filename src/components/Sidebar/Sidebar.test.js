import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/rootReducer'

describe('Dashboard Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
        <Provider store={store}>
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        </Provider>
    );
  
    expect(component).toMatchSnapshot();
  });
});