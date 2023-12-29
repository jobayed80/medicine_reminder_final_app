import React from 'react'

const Maps = () => {
  return (
    <div className="mt-10 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">

      <div className="col-span-1 h-fit w-full xl:col-span-3 2xl:col-span-3">

      <iframe className='lg:w-[1270px] lg:h-[650px]  sm:w-[600px] sm:h-[600px] rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d466593.1205510897!2d90.33432974358736!3d23.98663820560884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spharmacy%20near%20Bangladesh!5e0!3m2!1sen!2sbd!4v1703855910044!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>

  )
}

export default Maps