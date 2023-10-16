import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((serv)=>(
        <ServiceCard key={serv.label} {...serv}/>
      ))}
    </section>
  )
}

export default Services