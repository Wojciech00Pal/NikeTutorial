import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import icons  from '../assets/icons'
import {shoes, statistics} from '../constants'
import images from "../assets/images"
import { useState } from 'react';

const Hero = () => {
  const[bigShoeImg, setBigShoeImg] = useState(images.bigShoe1)

  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5  flex flex-col justify-center items-start w-full xl:padding-x pt-28">
          <p className="text-xl font-monteserrat text-coral-red">Our summer collection</p>
          <h1 className="mt-10   font-palanquin text-8xl max-sm:text-[70px] max-sm:leading-[2]  font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-slate-grey text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
          </p>
          <Button label="Shop now" iconURL={icons.arrowRight}/>
          <div className="flex justify-start items-start flex-nowrap w-full mt-20 gap-16 ">
            {statistics.map((stat, index) =>(
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-monteserrat text-slate-gray">{stat.label}</p>
              </div>
          ))}
          </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center
       xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center  ">
        <img
        src={bigShoeImg}
        alt="shoe collection"
        width={610}
        height={500}
        className="object-contain relative z-index-10"
        />
      <div className="  absolute flex sm:gap-6 gap-4 top-[75%]  sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) =>(
            <div key={shoe.thumbnail}>
              <ShoeCard 
              imgURL={shoe.thumbnail}
              changeBigShoeImage={(shoe)=>{
                setBigShoeImg(shoe)
                bigShoeImg={bigShoeImg}
              }}
              bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
      </div>
      </div>
    </section> 
  )
}

export default Hero