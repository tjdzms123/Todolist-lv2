const ADD_TODO = "ADD-TODO";
const DELETE_TODO = "DELETE_TODO";
const DONE_TODO = "DONE_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
    payload,
  };
};

export const getTodoById = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

const initialState = {
  todos: [
    { id: "1", title: "리액트", body: "리액트를 배워봅시다", isDone: false },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todos: state.todos.find((todo) => todo.id === action.payload),
      };
    default:
      return state;
  }
};

export default todos;
