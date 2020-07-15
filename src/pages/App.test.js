import React from 'react';
import App from './App';
import { mount } from 'enzyme';

describe('App component', () => {
    it('should render a header', () => {
        const app = mount(<App/>);

        expect(app.find('header').exists()).toBe(true);
    });
});