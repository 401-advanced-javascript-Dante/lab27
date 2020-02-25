import React from 'react';
import {shallow , mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Main from '../../../components/main/main.js';


describe('<Main />', () => {

  it('already exist in our app' , () => {
    let test = shallow(<Main/>);
    expect(test.find('button').exists()).toBeTruthy();
  });

  it('Assert state changes properly', () => {
    let test = mount(<Main/>);
    let addButton= test.find('#left');
    addButton.simulate('click');
    expect(test.state('counter')).toBe(1);
  });

  it('Assert that state is being transferred to the DOM', () => {
    let test = mount(<Main/>);
    let button= test.find('#right');
    button.simulate('click');
    expect(test.find('#number').text()).toBe('-1');
  });

  it('Assert DOM stability via snapshot', ()=> {
    let test = renderer.create(<Main />);
    expect(test).toMatchSnapshot();
  });



});