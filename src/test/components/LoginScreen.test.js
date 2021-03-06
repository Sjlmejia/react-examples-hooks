import { act} from '@testing-library/react  '
import { mount } from 'enzyme';
import React from 'react'
import { LoginScreen } from '../../components/09-useContext/LoginScreen';
import { UserContext } from '../../components/09-useContext/UserContext';
describe('test en login screen', () => {
  const setUser = jest.fn();
  const wrapper =mount(<UserContext.Provider value={{
    setUser
  }}>
    <LoginScreen/>
  </UserContext.Provider>)
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de llamarse setUSer',() => {
    act(() =>{
      wrapper.find('button').prop('onClick')()
    });
    expect(setUser).toHaveBeenCalled();
  })
});