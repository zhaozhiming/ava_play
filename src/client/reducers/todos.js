import {ADD_TODO, COMPLETE_TODO, DELETE_TODO,
  COMPLETE_ALL, CLEAR_COMPLETED, UPDATE_TODO} from '../constants/ActionTypes';

const initState = [
  {
    text: 'TODO LIST',
    completed: false,
    id: 0,
  },
];

export default function todos(state = initState, action) {
  switch (action.type) {
  case ADD_TODO:
    return [
      ...state,
      {
        text: action.text,
        completed: false,
        id: new Date().getTime(),
      },
    ];
  case COMPLETE_TODO:
    return state.map(todo =>
      todo.id === action.id ?
        Object.assign({}, todo, { completed: !todo.completed }) : todo
    );
  case DELETE_TODO:
    return state.filter(todo => todo.id !== action.id);
  case COMPLETE_ALL:
    let allCompleted = true;
    state.forEach(todo => allCompleted = allCompleted && todo.completed);
    return state.map(todo =>
      Object.assign({}, todo, { completed: allCompleted ? false : true}));
  case CLEAR_COMPLETED:
    return state.filter(todo => todo.completed === false);
  case UPDATE_TODO:
    return state.map(todo =>
      todo.id === action.id ?
        Object.assign({}, todo, { text: action.text}) : todo
    );
  default:
    return state;
  }
}
