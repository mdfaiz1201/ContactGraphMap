import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import MainDashboard from './Main/MainDashboard';
import { CreateButton, ContactForms, ContactDetails, CovidGraph } from './pages';
import { Header, Footer, PageNotFound, ScrollToTop } from './components';


function App() {
   const location = useLocation();

   return (
      <>
         <Header/>
         <main>
            <ScrollToTop key={location.pathname}/>
            <Routes>
               <Route path="/" element ={<MainDashboard/>}>   
                  <Route path="/" element ={<CreateButton/>}/>  
                  <Route path="/form" element ={<ContactForms />}/>  
                  <Route path="/contactDetails/:id" element ={<ContactDetails />}/> 
                  <Route path="/covidGraph" element ={<CovidGraph />}/>   
               </Route>
               <Route path="*" element ={<PageNotFound/>}/>
            </Routes>
         </main>
         <Footer/>
      </>

   );
}
      

export default App;
