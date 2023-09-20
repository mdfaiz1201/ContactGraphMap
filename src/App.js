import { Route, Routes } from 'react-router-dom';
import './App.css';

import MainDashboard from './Main/MainDashboard';
import { CreateButton, ContactForms, ContactDetails, ChartsAndMaps } from './pages';
import { Header, Footer, PageNotFound } from './components';


function App() {
  return (
   <>
      <Header/>
      <main>
         <Routes>
            <Route path="/" element ={<MainDashboard/>}>   
               <Route path="/" element ={<CreateButton/>}/>  
               <Route path="/form" element ={<ContactForms />}/>  
               <Route path="/contactDetails/:id" element ={<ContactDetails />}/> 
               <Route path="/chartsAndMaps" element ={<ChartsAndMaps />}/>   
            </Route>
            <Route path="*" element ={<PageNotFound/>}/>
         </Routes>
      </main>
      <Footer/>
   </>

  );
}
      

export default App;
