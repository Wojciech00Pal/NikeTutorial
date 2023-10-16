import images from "../assets/images"
import icons from "../assets/icons"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={images.footerLogo}
            width={150}
            height={46}
            ></img>
            </a>
            <p className="text-white-400 text-base mt-6 leading-6 font-montserrat 
            sm:max-w-sm">
            Nike is taking steps to become more sustainable by incorporating eco-friendly materials and production processes.
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon)=>(
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full ">
                  <img
                    src={icon.src}
                    alt={icon.alt}    
                    width={24}
                    height={24}              
                  >
                  </img>
                </div>
              ))}
            </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section)=>(
              <div key={section}>
                <h4 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {section.links.map((link)=>(
                    <li className="mt-2 text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:text-orange-400"
                    key={link.name}>
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className=" flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={icons.copyrightSign} alt="copy sign" 
            width={20} height={20} className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer