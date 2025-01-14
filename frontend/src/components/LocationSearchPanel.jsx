import React from 'react'

const LocationSearchPanel = (props) => {


  const locations = [
    "24B, Near Kapoor's cafe, Sector 15, Gurgaon",
    "7A, Opposite City Mall, Sector 23, Dwarka",
    "34C, Near Metro Station, Sector 17, Noida",
    "12B, Next to Shoppers Stop, Sector 28, Chandigarh",
    "56D, Above Domino's, Sector 62, Noida",
    "91E, Behind Haldiram's, Sector 56, Gurgaon",
    "11F, Near Sushant Lok, Sector 50, Gurgaon",
    "33G, Opposite DLF Mall, Saket, New Delhi",
    "4H, Near Apollo Hospital, Sector 45, Faridabad",
    "22I, Above Punjab National Bank, Sector 19, Rohini"
  ];

  return (
    <div>
      {
        locations.map(function (locca,ind) {
          return <div key={ind} onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex items-center justify-start gap-4 p-3 my-2 border-2 border-gray-50 active:border-black rounded-xl'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{locca}</h4>
          </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel