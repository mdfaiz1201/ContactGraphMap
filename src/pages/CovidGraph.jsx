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


const CovidGraph = () => {
      const [showData, setShowData] = useState(null);
      const [count, setCount] = useState(0);
      const [newDatasets, setNewDatasets] = useState(null);
      const [currentDate, setCurrentDate] = useState(null);
      const [covidData, setCovidData] = useState([]);
      const [allData, setAllData] = useState([]);
      
      useEffect(()=>{
            fetchFromAPI('statistics')
            .then(result=>{
               const response = result.response
               setCovidData(response)
               }
            )
         },[])

      useEffect(()=>{
         const dataItem = covidData[count]
         setCurrentDate(dataItem?.day)
         if (dataItem && allData.length <= 7){
            setAllData([...allData, 
            {'country' : dataItem?.country, 'cases':
              { "Active": dataItem?.cases?.active || 0,
                "Recover": dataItem?.cases?.recovered || 0,
                "Death": dataItem?.deaths?.total || 0,
                "TotalCases": dataItem?.cases?.total || 0
               }
            }
            ])
            setCount(count+1);
         }
      },[covidData, count])

      useEffect(() => {
         if (showData){
            const newData = data.datasets.map((dataset)=>(
               {... dataset, hidden: showData === 'All' ? false : dataset.label !== showData} 
               ))
               setNewDatasets(newData)
            }
            
         }, [showData])
         console.log(covidData)
      
      // Below variables stored the data as an array.

      const countries = allData.map((item) => item.country);
      const death = allData.map((item) => item.cases.Death);
      const active = allData.map((item) => item.cases.Active);
      const recover = allData.map((item) => item.cases.Recover);
      const totalCases = allData.map((item) => item.cases.TotalCases);
      const data = {
         labels: countries,
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
            label: 'Total Cases',
            data: totalCases,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgb(53, 162, 235)',
            hidden: false}
         ]
      
      };
      
      const handleNext = () => {
         setAllData([])
         setNewDatasets(null)
         if (count>=7){
            setCount(count-1)
         }
      }
      const handlePrevious = () => {
         setAllData([])
         setNewDatasets(null)
         if (count >= 8){
            setCount(count - 15)
         }
      }

      return (
            <div className='m-auto w-3/4'>
               <div className='flex justify-between items-center'>
                  <div className='flex flex-col'>
                     <span className='px-3 py-1 bg-gray-200 text-left font-bold'>{currentDate || 'Loading...'}</span>
                     <span className='flex items-center justify-center font-bold text-red-600 animate-blink'>
                        <span className='h-2 w-2 rounded-full bg-red-600 mr-1'></span>LIVE
                     </span>
                  </div>
                  <Filter filterData={setShowData}/>
               </div>
               <div className='mt-2 custom-height'>
                  <Line options={options} data={data} />
               </div>
               <div className='mt-5 flex items-center justify-center'>
                  <button disabled = {count<=8}
                     onClick={handlePrevious}
                     className={`${count<=8 ? 'bg-gray-300' : 'bg-gray-500 hover:shadow-lg'} text-white rounded mr-3 text-xl border py-1 px-2`}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                     </svg>
                  </button>
                  <button 
                     onClick={handleNext} 
                     className='ml-3 bg-gray-500 text-white rounded hover:shadow-lg text-xl border py-1 px-2'>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                     </svg>
                  </button>
               </div>
            </div>
            )
      }
export default CovidGraph;