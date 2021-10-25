import { todoReducer } from "../../components/08-useReducer/todoReducer"
import { demoTodos } from "../fixtures/demoTodos";

describe('pruebas en todoReducer', () => {
  test('debe retornar el estado por defecto', () => {
    const state =todoReducer(demoTodos, {});
    expect( state ).toEqual(demoTodos);
  });
  test('debe agregar un Todo', () => {
    const newTodo = {
      id:3,
      desc: 'Aprender Angular',
      done: false
    };
    const action = {
      type: 'add',
      payload: newTodo
    };
    const result = [...demoTodos, newTodo];
    const state =todoReducer(demoTodos, action);
    expect( state ).toEqual(result);
    expect( state.length ).toBe(3);
  });

  test('debe de borrar un todo', () => {
    const newTodo = {
      id:3,
      desc: 'Aprender Angular',
      done: false
    };
    const action = {
      type: 'add',
      payload: newTodo
    };
    const state =todoReducer(demoTodos, action);
    const finalState =todoReducer(demoTodos, {
      action : 'delete',
      payload: 3
    });
    expect( finalState ).toEqual(demoTodos);
  });

  test('debe de hacer el toggle de un todo', () => {
    const action = {
      type: 'toggle',
      payload: 1
    }

    const state = todoReducer( demoTodos, action);

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1])
  });
});