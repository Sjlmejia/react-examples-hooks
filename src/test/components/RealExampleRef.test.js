import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../components/04-useRef/RealExampleRef';

describe('Pruebas en real Example', () => {
  const wrapper = shallow(<RealExampleRef />);
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe Mostrar el componente multiple custom hooks', () => {
    const button = wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
  
});