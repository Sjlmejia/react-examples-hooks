import {renderHook, act} from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter';

describe('prueba sobre useCounter', () => {
   test('debe retornar valores por defecto', () => {
       const {result} =renderHook(()=> useCounter());
       expect(result.current.state).toBe(1);
       expect( typeof result.current.increment).toBe('function');
       expect(typeof result.current.decrement).toBe('function');
       expect( typeof result.current.reset).toBe('function');
   })
    
   test('debe retornar el state 100', () => {
    const {result} =renderHook(()=> useCounter(100));
    expect(result.current.state).toBe(100);
    })

    test('debe incrementar el counter en 1', () => {
        const {result} =renderHook(()=> useCounter());
        const {increment} = result.current;
        act(() => {
            increment();
        });
        const {state} = result.current;
        expect(state).toBe(2);
    })

    test('debe ser 9 despues de decrementar y 10 en el reset', () => {
        const {result} =renderHook(()=> useCounter(10));
        const {decrement, reset} = result.current;
        act(() => {
            decrement();
        });
        const {state} = result.current;
        expect(state).toBe(9);
        act(() => {
          reset();
        });
        const {state:value} = result.current;
        expect(value).toBe(10);
    })
    
});
