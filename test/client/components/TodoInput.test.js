import React from 'react';
import { shallow } from 'enzyme';
import test from 'ava';
import sinon from 'sinon';
import TodoInput from 'client/components/TodoInput';

const props = {
  text: 'foo',
  placeholder: 'foo placeholder',
  editing: false,
  newTodo: false,
  onSave: sinon.spy(),
};

test.afterEach(() => {
  props.onSave = sinon.spy();
});

test('input change value correctly', t => {
  const wrapper = shallow(<TodoInput {...props} />);
  wrapper.find('input').simulate('change', { target: { value: 'bar' } });
  t.is(wrapper.state('text'), 'bar');
});

test('input blur correctly', t => {
  const wrapper = shallow(<TodoInput {...props} />);
  wrapper.find('input').simulate('blur', { target: { value: 'bar' } });
  t.is(props.onSave.callCount, 1);
});

test('input keydown correctly', t => {
  const wrapper = shallow(<TodoInput {...props} />);
  wrapper.setProps({ newTodo: true });
  wrapper.find('input').simulate('keydown', { target: { value: 'bar' }, which: 13 });
  t.is(props.onSave.callCount, 1);
  t.is(wrapper.state('text'), '');
});
