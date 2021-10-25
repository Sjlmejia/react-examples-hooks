import {renderHook, act} from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch';
describe('Pruebas en el use Fetch', () => {
  test('debe retornar la informacion por defecto', () => {
    const {result} = renderHook( ()=> useFetch(`https://www.breakingbadapi.com/api/quotes/1`))
    const {data, loading, error} = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  })

  test('debe retornar la informacion deseada', async() => {
    const {result, waitForNextUpdate} = renderHook( ()=> useFetch('https://www.breakingbadapi.com/api/quotes/1'))
    await waitForNextUpdate();
    const {data, loading, error} = result.current;
    expect(data.length).toBe(1)
  })
});
