import React from 'react';
import Footer from 'client/components/Footer';
import { shallow } from 'enzyme';
import test from 'ava';
import sinon from 'sinon';

const props = {
  todos: [],
  actions: {
    clearCompleted: sinon.spy(),
  },
  onShow: sinon.spy(),
  filter: 'SHOW_ALL',
};

test('do not render button', t => {
  const wrapper = shallow(<Footer {...props} />);
  t.is(wrapper.find('button').length, 0);
});

test('render button correctly', t => {
  const wrapper = shallow(<Footer {...props} />);
  wrapper.setProps({ todos: [{ completed: true }] });
  t.is(wrapper.find('button').length, 1);
});

test('render 3 li correctly', t => {
  const wrapper = shallow(<Footer {...props} />);
  wrapper.setProps({ todos: [{ completed: true }] });
  t.is(wrapper.find('li').length, 3);
  t.is(wrapper.find('a.selected').length, 1);
  t.is(wrapper.find('a.selected').text(), 'All');
});
