import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);

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
          <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
        </div>

        <div ref={vehiclePanelRef} className='fixed bottom-0 z-10 w-full px-3 py-10 pt-12 translate-y-full bg-white'>
          <h3 className='mb-5 text-2xl font-semibold'>Choose a Vehicle</h3>
          <div className='flex justify-between w-full p-3 mb-2 border-2 items-cente r active:border-black rounded-xl'>
            <img className='h-10' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
            <div className='w-1/2 ml-2'>
              <h4 className='text-base font-medium'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className='text-sm font-medium'>2 mins away </h5>
              <p className='text-xs font-normal text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>193.20</h2>
          </div>

          <div className='flex items-center justify-between w-full p-3 mb-2 border-2 active:border-black rounded-xl'>
            <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className='w-1/2 ml-2'>
              <h4 className='text-base font-medium'>Moto <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className='text-sm font-medium'>3 mins away </h5>
              <p className='text-xs font-normal text-gray-600'>Affordable motorcycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>193.20</h2>
          </div>

          <div ref={vehiclePanelRef} className='flex items-center justify-between w-full p-3 mb-2 border-2 active:border-black rounded-xl'>
            <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className='w-1/2 ml-2'>
              <h4 className='text-base font-medium'>UberAuto <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className='text-sm font-medium'>3 mins away </h5>
              <p className='text-xs font-normal text-gray-600'>Affordable Auto rides</p>
            </div>
            <h2 className='text-lg font-semibold'>193.20</h2>
          </div>

        </div>

      </div>
    </div >
  );
}

export default Home;
