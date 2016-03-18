import todos from 'client/reducers/todos';
import * as at from 'client/constants/ActionTypes';
import test from 'ava';


test('add todo correctly', t => {
  const result = todos({}, { type: at.ADD_TODO, text: 'foo'});
  t.is(result.length, 1);
  t.is(result[0].text, 'foo');
});
