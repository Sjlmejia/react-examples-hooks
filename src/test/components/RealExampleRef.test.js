import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../components/04-useRef/RealExampleRef';

describe('Pruebas en real Example', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<RealExampleRef />);
    expect(wrapper).toMatchSnapshot()
  })
  
});