import React, { useEffect, useState } from 'react'
import {fetchFromAPI} from '../Fetch/fetchFromAPI'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import '../App.css'
import Filter from '../components/Filter';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false, // Disable aspect ratio for custom height
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
  scales: {
   y:{
      ticks:{
      }
   },
   x: {
      grid : {
         display:false
      }
   }
 }
};

const ChartsAndMaps = () => {
   const [showData, setShowData] = useState(null);
   const [country, setCountry] = useState([]);
   const [active, setActive] = useState([]);
   const [recover, setRecover] = useState([]);
   const [totalCases, setTotalCases] = useState([]);
   const [death, setDeath] = useState([]);
   const [count, setCount] = useState(0);
   const [newDatasets, setNewDatasets] = useState(null);
   const [currentDate, setCurrentDate] = useState(null);
   
   useEffect(()=>{
         fetchFromAPI('statistics')
         .then(result=>{
            const response = result.response[count]
            setCurrentDate(response.day)
            // console.log(response)
            if (country.length <= 15 && count <= 14){
               setCountry([...country, response.country])
               setActive([...active, response.cases.active || 0])
               setRecover([...recover, response.cases.recovered || 0])
               setTotalCases([...totalCases, response.cases.total || 0])
               setDeath([...death, response.deaths.total || 0])
               setCount(count+1);
               }
            }
         )
      },[country,active,recover,totalCases,count])

      useEffect(() => {
         if (showData){
            console.log("inside useffect showdata!==ALL func")
            const newData = data.datasets.map((dataset)=>(
               {... dataset, hidden: showData === 'All' ? false : dataset.label !== showData} 
               ))
            setNewDatasets(newData)
         }
         
      }, [showData])
      
      const data = {
         labels: country,
         datasets: newDatasets || 
         [
            {
            label: 'Death',
            data: death,
            borderColor: 'red',
            backgroundColor: 'red',
            hidden: false}
            ,
            {
            label: 'Active',
            data: active,
            borderColor: 'orange',
            backgroundColor: 'orange',
            hidden: false},
            {
            label: 'Recover',
            data: recover,
            borderColor:'green',
            backgroundColor:'green',
            hidden: false},
            {
            label: 'Total',
            data: totalCases,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgb(53, 162, 235)',
            hidden: false}
         ]
      
      };
      return (
            <div className='m-auto w-3/4'>
               <div className='flex justify-between items-center'>
                  <div className='flex flex-col'>
                     <span className='px-3 py-1 bg-gray-200 text-left font-bold'>{currentDate}</span>
                     <span className='flex items-center justify-center font-bold text-red-600 animate-blink'>
                        <span className='h-2 w-2 rounded-full bg-red-600 mr-1'></span>LIVE
                     </span>
                  </div>
                  <Filter filterData={setShowData}/>
               </div>
               <div className='mt-2 custom-height'>
                  <Line options={options} data={data} />
               </div>
            </div>
            )
}

export default ChartsAndMaps;