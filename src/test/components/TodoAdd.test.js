import React from 'react';
import { shallow } from 'enzyme';
import {TodoAdd} from '../../components/08-useReducer/TodoAdd'

describe('prueba es todo Add', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd  handleAddTodo={ handleAddTodo}/>)

  test('deberia montarse el comopente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('no debe llamar el handleaddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({preventDefault(){} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('debe de llamar la funcion HandleaddTodo', () => {
    const value = 'Aprender React';
    wrapper.find('input').simulate('change', {
      target:{
        value,
        name: 'description'
      }
    });
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({preventDefault(){} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith({
      desc: value,
      done: false,
      id:expect.any(Number)
    });
    expect( wrapper.find('input').prop('value')).toBe('');
  });
  
  
});
