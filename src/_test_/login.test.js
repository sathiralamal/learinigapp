import React from 'react';
import {shallow} from 'enzyme';

import Home from '../components/Home/Home';

describe('User name input', () => {
    it('should respond to change event and change the state of the Login Component',() => {
        const wrapper = shallow(<Home />);

        wrapper.find('#username').simulate('change', {
                target: {name :'username',value:'nimal_dissanayake'}
        });
        expect(wrapper.state('username')).toEqual('nimal_dissanayake');
    })
})

describe('User name input', () => {
    it('should respond to change event and change the state of the Login Component',() => {
        const wrapper = shallow(<Home />);

        wrapper.find('#password').simulate('change', {
                target: {name :'password',value:'123456'}
        });
        expect(wrapper.state('password')).toEqual('123456');
    })
})