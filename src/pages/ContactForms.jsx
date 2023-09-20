import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addContact, editContact } from '../reduxStore/slice';
import Form from '../reusableComponents/Form';
import '../App.css'


const ContactForms = ({ editContactIndex, onCancel }) => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [status, setStatus] = useState('');
   const [isFormOpen, setIsFormOpen] = useState(false);
  
  const contacts = useSelector((state) => state.contactList);
  const dispatch = useDispatch();

  // Load contact data when editing
  useEffect(() => {
    if (editContactIndex >= 0) {
      const previousContact = contacts[editContactIndex];
      setFirstName(previousContact.firstName);
      setLastName(previousContact.lastName);
      setStatus(previousContact.status);
    }
  }, [editContactIndex, contacts]);

  const navigate = useNavigate()

// Handle First Name validation
  const handleFirstChange = (e) => {
      const value = e.target.value;
      const validateValue = value.replace(/[^A-Za-z ]/g,'');

      if (validateValue.length <=13){
         setFirstName(validateValue);
      }
  }

// Handle Last Name validation
  const handleLastChange = (e) => {
      const value = e.target.value;
      const validateValue = value.replace(/[^A-Za-z ]/g,'');

      if (validateValue.length <=13){
         setLastName(validateValue);
      }
  }


  // Handle cancel button click
  const handleCancel = () => {
   setIsFormOpen(!isFormOpen)
   if (editContactIndex >= 0){
      onCancel()
   }
   navigate("/")
};

  // Handle form submission (add or edit)
  const handleSubmit = (e) => {
      e.preventDefault();
      if (editContactIndex >= 0) {
         dispatch(editContact({ id: editContactIndex, firstName, lastName, status }));
         onCancel()
      }
      else {
         dispatch(addContact({ firstName, lastName, status }));
      }
      navigate("/")
  };

  return (
   <div className ={`${isFormOpen ? "animate-close-form" : "animate-open-form"} mx-auto block ${editContactIndex >= 0 ? "md:w-60" : "max-w-sm"} rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`}>
      <h2 className='text-2xl'>{editContactIndex >= 0 ? "Edit Contact Form" : "Contact Form"}</h2>
      <hr className='py-6'/>
      <Form 
         onSubmit={handleSubmit} handleCancel={handleCancel}
         firstName={firstName} handleFirstName={handleFirstChange}
         lastName={lastName} handleLastName={handleLastChange}
         status={status} handleStatus={(e)=>setStatus(e.target.value)}
         editContactIndex={editContactIndex}
      />
   </div>
  );
};

export default ContactForms;

