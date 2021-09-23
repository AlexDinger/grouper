import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'

const TripCard = props => {
  console.log(props)
  return (
    <section className="w-full overflow-hidden border-gray-300 border flex flex-col mb-10 rounded-lg">
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-52 -mb-3"
        style={{ backgroundImage: `url(${props.image})` }}
      />
      <div className="px-6 py-5 flex flex-col space-y-7 rounded-t-2xl overflow-hidden bg-white">
        <div className="flex flex-col">
          <h1 className="text-3xl">{props.name}</h1>
          <span className="text-sm italic">Los Angeles, California</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          ducimus commodi sint, adipisci et nihil dolorum, deserunt, pariatur
          repellat excepturi delectus!
        </p>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center justify-center space-x-2">
            <BsFillPersonFill size={24} />
            <span className="text-lg">{props.members}</span>
          </div>
          <div className="flex flex-row space-x-2 justify-center items-center">
            <BiTimeFive size={24} />
            <span className="text-lg">Starts in 5 days</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TripCard
