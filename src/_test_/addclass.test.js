import React from 'react';
import {shallow} from 'enzyme';

import AddClass from '../components/LectureDashbord/AddClass';

describe('User name input', () => {
    it('should respond to change event and change the state of the Login Component',() => {
        const wrapper = shallow(<AddClass />);

        wrapper.find('#subject').simulate('change', {
                target: {name :'subject',value:'Netweorking'}
        });
        expect(wrapper.state('subject')).toEqual('Netweorking');
    })
})

describe('User name input', () => {
    it('should respond to change event and change the state of the Login Component',() => {
        const wrapper = shallow(<AddClass />);

        wrapper.find('#place').simulate('change', {
                target: {name :'place',value:'E412'}
        });
        expect(wrapper.state('lecturePlace')).toEqual('E412');
    })
})

describe('User name input', () => {
    it('should respond to change event and change the state of the Login Component',() => {
        const wrapper = shallow(<AddClass />);

        wrapper.find('#year').simulate('change', {
                target: {name :'year',value:'2022'}
        });
        expect(wrapper.state('year')).toEqual('2022');
    })
})

describe('User name input', () => {
    it('should respond to change event and change the state of the Login Component',() => {
        const wrapper = shallow(<AddClass />);

        wrapper.find('#time').simulate('change', {
                target: {name :'time',value:'10.20'}
        });
        expect(wrapper.state('time')).toEqual('10.20');
    })
})