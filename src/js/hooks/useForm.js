import { useState, usestate } from "react";

export const useForm = (initialForm,validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
      setForm({...form,[e.target.name]:e.target.value})
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));


      if(Object.keys(errors).length===0){
          console.log("enviando formulario")
      }
      else{
          return;
      }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
