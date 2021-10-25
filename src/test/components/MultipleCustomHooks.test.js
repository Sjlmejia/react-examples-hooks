import React from 'react';

import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks";
import { useFetch } from '../../hooks/useFetch';
jest.mock('../../hooks/useFetch');
describe('pruebas en custom hooks', () => {
  test('debe de mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data:null,
      loading: true,
      error: null
    })
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  })
  test('debe de mostra la informacio', () => {
    useFetch.mockReturnValue({
      data:[{
        author: 'Jorge',
        quote:'hola mundo'
      }],
      loading: true,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    console.log(wrapper.html())
    expect(wrapper.find('.alert').exists()).toBe(false);
  })
  
  
});