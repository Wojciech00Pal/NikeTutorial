import Button from "../components/Button"
import icons  from '../assets/icons'
import images from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us"
    className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col '>
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold
          lg:max-w-lg">
            We provide YOU
          <br />
          <span className="text-coral-red ">Super</span> 
          <span className="text-coral-red "> Quality</span> Shoes
          </h2>
          
          <p className="mt-4 lg:max-w-lg info-text">
          Explore the latest and most stylish Nike arrivals, where quality meets comfort, and innovation fuels your active lifestyle. Whether you're hitting the gym, embarking on a morning run, or simply strolling through the city streets, you'll find a diverse range of Nike products designed to elevate your performance and enhance your everyday style. From cutting-edge athletic footwear to high-performance activewear, Nike is dedicated to helping you achieve your best, offering unmatched support and style for your active life. 
          </p>
          <p className="mt-6 lg:max-w-[50%] info-text">Embrace the Nike experience and step confidently into a world of limitless possibilities, where your athletic potential knows no bounds.</p>
          <div className="mt-11 ">
            <Button  label="Shop now" iconURL={icons.arrowRight}/>
          </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
        src={images.shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain"
        >
        </img>
      </div>
    </section>
  )
}

export default SuperQuality