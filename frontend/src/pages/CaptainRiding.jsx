import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
    return (
        <div className='relative flex flex-col justify-end h-screen'>
            <div className='fixed top-0 flex items-center justify-between w-screen p-6'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain-home' className='flex items-center justify-center w-10 h-10 bg-white rounded-full '>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className='relative flex items-center justify-between p-6 pt-10 bg-yellow-400 h-1/5'
                onClick={() => {
                    setFinishRidePanel(true)
                }}
            >
                <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {

                }}><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>{'4 KM away'}</h4>
                <button className='p-3 px-10 font-semibold text-white bg-green-600 rounded-lg '>Complete Ride</button>
            </div>

            
        </div>
    )
}

export default CaptainRiding