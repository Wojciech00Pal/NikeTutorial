import Button from "../components/Button"
import icons from "../assets/icons"
import images from "../assets/images"

const SpecialOffer = () => {
  console.log("offer: ",images.offer);
  return (
    <section className="flex jusify-wrap items-center max-xl:flex-col-reverse max-container gap-6">
      <div className="flex-1">
      <img src={images.offer} width={773} height={687}
      className="object-contain w-full"
      />
      </div>
       <div className='flex flex-1 flex-col '>
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold
          lg:max-w-lg">
          <span className="text-coral-red ">Special</span>  Offer
          </h2>
          
          <p className="mt-4 lg:max-w-lg info-text">
          Explore the latest and most stylish Nike arrivals, where quality meets comfort, and innovation fuels your active lifestyle. Whether you're hitting the gym, you'll find a diverse range of Nike products designed to elevate your performance and enhance your everyday style. 
          </p>
          <p className="mt-6 lg:max-w-[50%] info-text">Embrace the Nike experience and step confidently into a world of limitless possibilities.</p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button  label="Shop now" iconURL={icons.arrowRight}/>
            <Button  label="Learn more" backgroundColor="bg-white" borderColor="border-slate-grey"
            textColor="text-slate-grey" />
          </div>
      </div>
      </section>
  )
}

export default SpecialOffer