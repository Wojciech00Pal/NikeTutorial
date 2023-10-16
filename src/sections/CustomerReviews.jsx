import React from 'react'
import {reviews} from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section>
      <div className='max-container'>
        <h3 className='font-palanquin text-center text-4xl font-bold'>What Our
        <span className='text-coral-red'> Customers </span>
         Say?
        </h3>
        <p className='info-text m-auto mt-4 max-w-lg'>
        Nike has always been at the forefront of innovation when it comes to athletic footwear. They invest heavily in research and development, which has led to groundbreaking technologies like Nike Air cushioning, Flyknit, and React foam. These innovations enhance comfort, support, and performance.
        </p>
        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews.map((review)=>
          (
            <ReviewCard key={review.customerName}
              imgURL = {review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews