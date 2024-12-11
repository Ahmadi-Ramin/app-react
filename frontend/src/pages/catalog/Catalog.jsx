

import React from 'react'

import Select from '../../ui/Select'
import Button from '../../ui/Button'
import Input from '../../ui/Input'

import Card from '../../components/bestHotels/Card'
import Navbar from '../../components/navbar/Navbar'

import image from '../../../public/assets/hr_1.jpg'
import image_1 from '../../../public/assets/hr_1.jpg'
import image_2 from '../../../public/assets/hr_2.jpg'
import image_3 from '../../../public/assets/hr_3.jpg'
import image_4 from '../../../public/assets/hr_4.jpg'
import image_5 from '../../../public/assets/hr_5.jpg'
import image_6 from '../../../public/assets/hr_6.jpg'
import image_7 from '../../../public/assets/hr_7.jpg'

const Catalog = () => {
  const data = [
    {
      name: "Arabian Paradise",
      image: image_1,
      price: 324.50,
      category: "Luxury",
      reviews: 3.8,
      location: "Dubai, UAE"
    },
    {
      name: "Arabian Paradise",
      image: image_2,
      price: 324.50,
      category: "Luxury",
      reviews: 3.5,
      location: "Dubai, UAE"
    },
    {
      name: "Arabian Paradise",
      image: image_3,
      price: 324.50,
      category: "Luxury",
      reviews: 3.9,
      location: "Dubai, UAE"
    },
    {
      name: "Arabian Paradise",
      image: image_4,
      price: 324.50,
      category: "Luxury",
      reviews: 4.8,
      location: "Dubai, UAE"
    },
    {
      name: "Arabian Paradise",
      image: image_5,
      price: 324.50,
      category: "Luxury",
      reviews: 4.4,
      location: "Dubai, UAE"
    },
    {
      name: "Arabian Paradise",
      image: image_6,
      price: 324.50,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE"
    },
    {
      name: "Arabian Paradise",
      image: image_7,
      price: 324.50,
      category: "Luxury",
      reviews: 4.2,
      location: "Dubai, UAE"
    },
  ]

  return (
    <div className='min-h-screen w-full'>
      <Navbar/>
      <div className="relative h-3/5 w-full">
        <img
          alt='Dubai'
          src={image}
          className="brightness-50 h-screen w-full object-cover"
        />
        <h3
          className="absolute text-6xl capitalize font-semibold flex items-center justify-center bottom-0 left-0 right-0 top-0 text-white"
        >
          Dubai
          {/* {city_name} */}
        </h3>
      </div>
      <div className="relative z-20 -mt-12 h-full w-full flex flex-col items-center">
        <form className="border w-2/3 h-28 border-slate-500 px-4 py-12 rounded-xl bg-blue-600 text-white flex justify-between items-center">
        <div className="flex flex-col items-center gap-1">
            <h3 className="ml-1 text-[#efefef] font-semibold">
              City
            </h3>
            <Select
              // register={register("location")}
              // data={optionLocations}
              className="text-blue-800 p-2 rounded-xl outline-none captalize"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3 className="ml-1 text-[#efefef] font-semibold">
              Price
            </h3>
            <div className="flex items-center gap-2">
              <Input
                // register={register("min_price", { valueAsNumber: true })}
                type="number"
                placeholder="Min. price"
                className="text-blue-800 p-2 rounded-xl outline-none"
              />
              <Input
                // register={register("max_price", { valueAsNumber: true })}
                type="number"
                placeholder="Max. price"
                className="text-blue-800 p-2 rounded-xl outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <h3 className="ml-1 text-[#efefef] font-semibold">
              Type of hotel
            </h3>
            <Select
              // register={register("type")}
              // data={optionTypes}
              className="text-blue-800 p-2 rounded-xl outline-none"
            />
          </div>
          <Button
            // disabled={isPending}
            label="Search"
            className="mt-6 px-6 py-2 text-[20px] bg-white text-blue-600 rounded-xl transition-all hover:bg-[#efefef]"
          />
        </form>
        <div className="w-full mt-36 flex flex-wrap justify-center items-center gap-14">
          {data?.map((place, idx) => (
            <Card
              key={idx}
              place={place}
            />
          )) }
          {/* : <h2 className="text-center font-bold text-4xl text-slate-700">No listing with those filters</h2>} */}
        </div>
      </div>
    </div>
  )
}

export default Catalog
