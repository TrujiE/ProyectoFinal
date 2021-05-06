import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {
userName:"",
name:"",
lastName:"",
rut:"",
email:"",
adress:"",
comuna:"",
password:"",
rePassword:"",
secretQuestion:"",
secretAnswer:"",
};



const validationsForm = (form) => {
let errors = {};
let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

if(!form.userName.trim())
{errors.userName = "username  es requerido"
}
else if(!regexName.test(form.userName.trim())){
    errors.userName= "el nombre de usurio solo acepta letras y espacios en blanco"
}


if(!form.name.trim())
{errors.name = "el nombre de  es requerido"
}
else if(!regexName.test(form.name.trim())){
    errors.name= "el nombre solo acepta letras y espacios en blanco"
}



if(!form.email.trim())
{errors.email = "el email  es requerido"
}

else if(!regexEmail.test(form.email.trim())){
    errors.email= "ha ingresado un formato de email no valido"
}



return errors
};

const RegisterForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>registro cliente</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          name="userName"
          placeholder="escribe tu usuario"
          onChange={handleChange}
          value={form.userName}
          onBlur={handleBlur}
        />
        {errors.userName && <p className= "text-danger">{errors.userName}</p>}
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="escribe tu nombre"
          onChange={handleChange}
          value={form.name}
          onBlur={handleBlur}
        />
        {errors.name && <p className= "text-danger">{errors.name}</p>}
        <input
          className="form-control mb-3"
          type="text"
          name="lastName"
          placeholder="escribe tu apellido"
          onChange={handleChange}
          value={form.lastName}
          onBlur={handleBlur}
        />
       {errors.lastName && <p className= "text-danger">{errors.lastName}</p>}
       <input
          className="form-control mb-3"
          type="text"
          name="rut"
          placeholder="escribe tu Rut"
          onChange={handleChange}
          value={form.rut}
          onBlur={handleBlur}
        />
        {errors.rut && <p className= "text-danger">{errors.rut}</p>}
         <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="escribe tu email"
          onChange={handleChange}
          value={form.email}
          onBlur={handleBlur}
        />
        {errors.email && <p className= "text-danger">{errors.email}</p>}
         <input
          className="form-control mb-3"
          type="text"
          name="adress"
          placeholder="escribe tu direccion"
          onChange={handleChange}
          value={form.adress}
          onBlur={handleBlur}
        />
         <input
          className="form-control mb-3"
          type="text"
          name="comuna"
          placeholder="escribe tu comuna"
          onChange={handleChange}
          value={form.comuna}
          onBlur={handleBlur}
        />
         <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="escribe tu contraseña"
          onChange={handleChange}
          value={form.password}
          onBlur={handleBlur}
        />
         <input
          className="form-control mb-3"
          type="password"
          name="rePasword"
          placeholder="reingresa tu contraseña"
          onChange={handleChange}
          value={form.rePassword}
          onBlur={handleBlur}
        />
         <input
          className="form-control mb-3"
          type="text"
          name="secretQuestion"
          placeholder="escribe tu pregunta secreta"
          onChange={handleChange}
          value={form.secretQuestion}
          onBlur={handleBlur}
        />

        <input
          className="form-control mb-3"
          type="text"
          name="secretAnswer"
          placeholder="escribe tu respuesta secreta"
          onChange={handleChange}
          value={form.secretAnswer}
          onBlur={handleBlur}
        />


       <input type="submit" value="enviar"/>
     
    
        
      </form>
    </div>
  );
};

export default RegisterForm;
