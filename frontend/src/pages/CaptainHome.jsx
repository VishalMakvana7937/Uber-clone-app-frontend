import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])

  useGSAP(function () {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePopupPanel])

  return (
    <div className=''>
      <div className='fixed top-0 flex items-center justify-between w-screen p-6'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/captain-home' className='flex items-center justify-center w-10 h-10 bg-white rounded-full '>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className='h-3/5'>
        <img className='object-cover w-full h-full' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

      </div>

      <div className='p-4 h-2/5'>
        <CaptainDetails />
      </div>

      <div ref={ridePopupPanelRef} className='fixed bottom-0 z-10 w-full px-3 py-10 pt-12 translate-y-full bg-white'>
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>

      <div ref={confirmRidePopupPanelRef} className='fixed bottom-0 z-10 w-full px-3 py-10 pt-12 translate-y-full bg-white'>
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>

    </div>
  )
}

export default CaptainHome