import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
  const [formState, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  });
  const { name, email, password } = formState;
  const handleSubmit = e => {
    e.preventDefault();
    console.log('for', formState)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
      <hr/>
      <div className= "form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          autoComplete= "off"
          value={ name }
          onChange={handleInputChange}
        />
      </div>
      
      <div className= "form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          autoComplete= "off"
          value={ email }
          onChange={handleInputChange}
        />
      </div>
      <div className= "form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          autoComplete= "off"
          value={ password }
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  )
}
