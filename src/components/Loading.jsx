import React from 'react';
import { ThreeDots} from 'react-loader-spinner';



export const Loading = () =>{
    return (
        <div className='flex justify-center items-center'>
            <ThreeDots type = "puff" color="#00BFFF" height={550}  width={80}/>   

        </div>
    )
}