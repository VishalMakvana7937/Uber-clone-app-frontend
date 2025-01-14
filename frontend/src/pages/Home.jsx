import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null)
  const panelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [ vehicleFound, setVehicleFound ] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0
      });
    }
  }, [panelOpen]);

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  return (
    <div className="relative h-screen overflow-hidden">
      <img className="absolute w-16 left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className="w-screen h-screen">
        <img className="object-cover w-full h-full" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className="absolute top-0 flex flex-col justify-end w-full h-screen">

        <div className="h-[30%] p-6 bg-white relative">
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute text-2xl opacity-0 right-6 top-6'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler} className="relative py-3">
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
          {/* <button
            className='w-full px-4 py-2 mt-3 text-white bg-black rounded-lg'>
            Find Trip
          </button> */}
        </div>

        <div ref={panelRef} className="h-[0%] overflow-scroll bg-white p-5  transition-all duration-300">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>

        <div ref={vehiclePanelRef} className='fixed bottom-0 z-10 w-full px-3 py-10 pt-12 translate-y-full bg-white'>
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
        </div>

        <div ref={confirmRidePanelRef} className='fixed bottom-0 z-10 w-full px-3 py-6 pt-12 translate-y-full bg-white'>
          <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
        </div>

        <div ref={vehicleFoundRef} className='fixed bottom-0 z-10 w-full px-3 py-6 pt-12 translate-y-full bg-white'>
          <LookingForDriver  />
        </div>

      </div>
    </div >
  );
}

export default Home;
