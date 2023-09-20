import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactForms } from '../pages';
import { deleteContact } from '../reduxStore/slice';
import Button from '../reusableComponents/Button';
import { useNavigate } from 'react-router-dom';
import { TERipple } from 'tw-elements-react';

import emptyImg from '../Images/emptyImage.jpg'

 
const ContactCard = () => {
   const [editedContactIndex, setEditedContactIndex] = useState(-1);

   const contacts = useSelector((state) => state.contactList);
   const dispatch = useDispatch();

   const navigate = useNavigate()

   const handlecontacts = (index) => {
      navigate(`/contactDetails/${index}` );
    };

   const renderNames = contacts.map((contact, index) => {
         const firstLetter = contact.firstName[0];

         const renderContent = () => {
            if (editedContactIndex === index) {
            return <ContactForms onCancel={() => setEditedContactIndex(-1)} editContactIndex={index} />;
            } 
            else {
            return (
               <div className=" bg-red w-60 mx-auto bg-white rounded-lg shadow-lg text-center">
                  <TERipple>
                     <div
                        className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                        className="w-52 rounded-t-lg"
                        src={emptyImg}
                        alt="blank contact" />
                     </div>
                  </TERipple>
                  <div className='p-2'>
                     <h2 onClick={()=>handlecontacts(index)} className="text-xl font-bold text-primary mb-8 hover:underline hover:cursor-pointer">
                        {firstLetter + '. ' + contact.lastName}
                     </h2>
                     <div className="mb-4 flex justify-around">
                        <Button padding="2" onClick={() => setEditedContactIndex(index)}>Edit</Button>
                        <Button textColor="white" bgColor="bg-red-500" padding="2" onClick={() => dispatch(deleteContact({ id: index }))}>Delete</Button>
                     </div>
                  </div>
               </div>
            );
            }
         };

         return (
            <div key={index} className='my-5'>
               {renderContent()}
            </div>
         );
   });

  return <div className='flex gap-6 items-center justify-center md:justify-start md:ms-2 flex-wrap'>
            {renderNames}
         </div>;
};

export default ContactCard;
