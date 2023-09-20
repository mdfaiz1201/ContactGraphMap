import React from 'react'
import { TERipple } from 'tw-elements-react'

const Button = (props) => {
  return (
   <TERipple rippleColor="light">
      <button
      onClick={props.onClick}
      type={props.submit ? "submit" : "button"}
      className={`${props.width} transition duration-300 ease-in-out flex items-center justify-center rounded ${props.bgColor} py-${props.padding} px-4 text-md font-${props.fontBold || "normal"} leading-normal text-${props.textColor} shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:${props.color-600} hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:${props.color-600} focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:${props.color-700} active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
      >
         {props.icon ? 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" mr-2 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg> :
          null}
         {props.children}
      </button>
   </TERipple>
  )
}

export default Button