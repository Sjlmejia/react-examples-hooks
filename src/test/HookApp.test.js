import React from 'react';

import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('pruebas HookApp', () => {
   test('debecrear HookApp', () => {
       const wrapper = shallow(<HookApp />);
       expect(wrapper).toMatchSnapshot();
   })
    
});
