import {renderHook, act} from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm';

describe('prueba en useForm', () => {
  const initialForm = {
    name: 'jorge',
    email: 'jorgemejia2304@gmail.com'
  };

  test('debe regresar un formulario', () => {
    const {result} = renderHook(()=> useForm(initialForm));
    const [values] = result.current
    console.log(result)
    expect(values).toEqual(initialForm);
  })
  
  test('debe cambiar  un formulario', () => {
    const {result} = renderHook(()=> useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(()=> {
      const target = {
        name: 'name',
        value: 'Luis'
      };
      handleInputChange({target})
    });
    const [values] = result.current;
    expect(values).toEqual({
      name: 'Luis',
      email: 'jorgemejia2304@gmail.com'
    })
  })

  test('debe resetar un formulario', () => {
    const {result} = renderHook(()=> useForm(initialForm));
    const [,handleInputChange , reset] = result.current;
    act(()=> {
      const target = {
        name: 'name',
        value: 'Luis'
      };
      handleInputChange({target})
      reset()
    });
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  })
});
