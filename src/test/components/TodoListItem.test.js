import { shallow } from "enzyme";
import { TodoListItem } from "../../components/08-useReducer/TodoListItem";

describe('Evaluar Tod List', () => {
  const item = {
    id:1,
    desc: 'Aprender React',
    done: false
  };
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoListItem 
      description={item.desc} id={item.id} done={item.done} index={1} handleToggle={handleToggle} handleDelete={handleDelete}
    />
  )
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe llamar la funcion borrar', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  test('debe llamar la funcion handleToggle', () => {
    wrapper.find('div').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  
  test('debe lde mostarse el texto correctamente', () => {
    const text = wrapper.find('div').text();
    expect(text).toEqual('2. Aprender React')
  });

  
  test('debe tener la clase complete si el TODO.done=true', () => {
    const todo = {
      id:1,
      desc: 'Aprender React',
      done: true
    };
    const wrapper = shallow(
      <TodoListItem 
        description={todo.desc} id={todo.id} done={todo.done} index={1}
        handleToggle={handleToggle} handleDelete={handleDelete}
      />
    )
    expect(wrapper.find('div').hasClass('complete')).toBe(true)
  });
})