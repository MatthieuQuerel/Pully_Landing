import React from 'react'

function StepSection () {
  return (
    <div className='py-10'>
      <div className='text-2xl text-puly-black font-bold text-center mb-8'>
        <h1>Voici notre application</h1>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap md:flex-nowrap justify-between items-center gap-24'>
          <div className='md:w-1/2 p-4 relative'>
            <p className='text-[150px] text-puly-red absolute left-0 -top-20 z-0'>
              01
            </p>
            <div className='relative z-10 p-6'>
              <p className='text-lg text-gray-700 text-justify'>
                Découvrez les avantages uniques de notre application et comment elle peut
                transformer votre quotidien. Grâce à une interface simple et intuitive,
                vous pouvez gérer vos activités quotidiennes avec une efficacité sans précédent.
              </p>
            </div>
          </div>
          <div className='md:w-1/2 p-4'>
            <img src='/images/pully-landing-step-01.jpg' alt='Descriptive Alt Text' className='w-96 h-auto shadow-md rounded-3xl' />
          </div>
        </div>
        <div className='flex flex-wrap md:flex-nowrap justify-between items-center gap-24 mt-20'>
          <div className='md:w-1/2 p-4'>
            <img src='/images/pully-landing-step-02.jpg' alt='Descriptive Alt Text' className='w-96 h-auto shadow-md rounded-3xl' />
          </div>
          <div className='md:w-1/2 p-4 relative'>
            <p className='text-[150px] text-puly-red absolute left-0 -top-20 z-0'>
              02
            </p>
            <div className='relative z-10 p-6'>
              <p className='text-lg text-gray-700 text-justify'>
                Découvrez les avantages uniques de notre application et comment elle peut
                transformer votre quotidien. Grâce à une interface simple et intuitive,
                vous pouvez gérer vos activités quotidiennes avec une efficacité sans précédent.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap md:flex-nowrap justify-between items-center gap-24 mt-20'>
          <div className='md:w-1/2 p-4 relative'>
            <p className='text-[150px] text-puly-red absolute left-0 -top-20 z-0'>
              03
            </p>
            <div className='relative z-10 p-6'>
              <p className='text-lg text-gray-700 text-justify'>
                Découvrez les avantages uniques de notre application et comment elle peut
                transformer votre quotidien. Grâce à une interface simple et intuitive,
                vous pouvez gérer vos activités quotidiennes avec une efficacité sans précédent.
              </p>
            </div>
          </div>
          <div className='md:w-1/2 p-4'>
            <img src='/images/pully-landing-step-03.jpg' alt='Descriptive Alt Text' className='w-96 h-auto shadow-md rounded-3xl' />
          </div>
        </div>
        <div className='flex flex-wrap md:flex-nowrap justify-between items-center gap-24 mt-20'>
          <div className='md:w-1/2 p-4'>
            <img src='/images/pully-landing-step-04.jpg' alt='Descriptive Alt Text' className='w-96 h-auto shadow-md rounded-3xl' />
          </div>
          <div className='md:w-1/2 p-4 relative'>
            <p className='text-[150px] text-puly-red absolute left-0 -top-20 z-0'>
              04
            </p>
            <div className='relative z-10 p-6'>
              <p className='text-lg text-gray-700 text-justify'>
                Découvrez les avantages uniques de notre application et comment elle peut
                transformer votre quotidien. Grâce à une interface simple et intuitive,
                vous pouvez gérer vos activités quotidiennes avec une efficacité sans précédent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepSection
