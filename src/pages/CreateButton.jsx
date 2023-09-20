import React, { useState } from 'react';

import Button from '../reusableComponents/Button';
import { ContactCard } from '../components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CreateButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const navigate = useNavigate()

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    navigate("/form")
  };

  const contactDetails = useSelector((state)=> state.contactList)

  return (
    <> 
      <div  className=' mb-11 '>
         <Button 
         icon ={true} fontBold ="bold" bgColor="bg-green-500"
         onClick={toggleForm} textColor="white" padding="3"
         >
         <span>Create Contact</span>
         </Button>
         { contactDetails.length <=0 && 
               <div className='flex items-center justify-center flex-col my-12 mx-auto text-xl w-1/2 border p-12 shadow'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className=" w-[70px]">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p>No Contact Found Please add contact from Create Contact Button</p>
               </div>
         }
      </div>
      <ContactCard />
    </>
  );
};

export default CreateButton;