import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const ContactDetails = () => {
   const contacts = useSelector((state)=>state.contactList)

   const { id } = useParams();
   const contact= contacts[id];
   // console.log(contact)

   return (
      <section className='border shadow border-red-900 p-10 xs:mx-1 sm:mx-5 md:mx-auto md:w-2/4'>
         <h2 className='text-3xl text-center font-bold mb-2'>Contact Details</h2>
         <hr className='mb-10'/>
         <div className='text-left mb-6 flex items-center '>
            <span className='font-semibold text-xl w-1/2'>First Name:</span>
            <span className='font-normal'>{contact.firstName}</span>
         </div>
         <div className='text-left mb-6 flex items-center'>
            <span className='font-semibold text-xl w-1/2'>Last Name:</span>
            <span className='font-normal'>{contact.lastName}</span>
         </div>
         <div className='text-left mb-12 flex items-center'>
            <span className='font-semibold text-xl w-1/2'>Status:</span>
            <span className='font-normal'>{contact.status}</span>
         </div>
         <div className='text-left'>
            <Link
            to="/" className="px-5 py-2 rounded-md text-white bg-green-500 hover:bg-green-500">
               Go home
            </Link>
         </div>
      </section>
   )
}

export default ContactDetails