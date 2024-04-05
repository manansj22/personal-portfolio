import React from 'react';

import { send } from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/React-Toastify.css";

import "./style.scss";

const Form = () => {
    const {register, 
        handleSubmit, 
        formState: {error},
    }= useForm();


    const onSubmit = (data) => {
        send(
          "service_gr5kl47",
          "template_8zdp3mm",
          data,
          "sgItGk8dtvNbs5vOJ"  
        ).then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            formSuccess();
        })
        .catch((err) => {
            console.log("FAILED...",err);
        })
    };

    const formSuccess = () => {
        toast("Thanks for submitting your Query!");
        document.getElementById("queryForm").reset();
    };
 
  
    return (
   <div className="query-form">
        <ToastContainer/>
        <form 
            id="queryForm" 
            onSubmit={handleSubmit(onSubmit)}
        
        ></form>
   </div>
  );
};

export default Form;