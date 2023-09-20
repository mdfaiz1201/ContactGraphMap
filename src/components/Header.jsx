import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Header = () => {
      let location = useLocation();
      const {id} = useParams();

      return (
      <header className=" bg-green-100 text-gray-700 py-4 mb-1 text-center font-bold text-3xl">
         {  location.pathname === "/" ? "Contact Page" :
            location.pathname === "/form" ? "Contact Form" :
            location.pathname === `/contactDetails/${id}` ? "Contact Details" :  
            location.pathname === "/chartsAndMaps" ? "Charts and Maps" : null}
      </header>
  )
}

export default Header