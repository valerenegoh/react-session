import React from 'react';
import { shallow } from "enzyme";
import Header from "./Header";

describe('Header component', () => {

    it('should render a React Session text', () => {
        const headerComponent = shallow(<Header/>);

        expect(headerComponent.find('header').exists()).toBe(true);
        expect(headerComponent.find('h1').exists()).toBe(true);
        expect(headerComponent.find('h1').text()).toBe('React Session');
    });

});