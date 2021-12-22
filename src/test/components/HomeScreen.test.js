import { mount, shallow } from 'enzyme';
import React from 'react'
import { HomeScreen } from '../../components/09-useContext/HomeScreen';
import { UserContext } from '../../components/09-useContext/UserContext';
describe('Pruebas en HomScreen', () => {
  const user = {
    name: 'Jorge',
    email:'jorge@gmail.com'
  }
  const wrapper = mount(
    <UserContext.Provider value ={{
      user
    }}>
      <HomeScreen />
    </UserContext.Provider>
  );
  test('debe crearse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});