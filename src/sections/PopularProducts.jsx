import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id="products"
    className='max-container max-sm:mt-12'
    >
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='font-palanquin lg:max-w-[500px] text-4xl font-bold break-words  bg-white'>Our 
        <span className='text-coral-red'> Popular </span> products:</h2><p className='text-[25px] lg:max-w-[900px] mt-2 font-montserrat text-slate-gray'> The best quality YOU have ever SEEN. Design, Comfort and value.</p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
      {products.map((product)=>(
        <PopularProductCard
          key={product.className}
          {...product}
        />
      ))}
      </div>
   
    </section>
  )
}

export default PopularProducts