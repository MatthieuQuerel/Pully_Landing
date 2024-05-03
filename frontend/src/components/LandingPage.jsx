import React from 'react'

function FeatureCard ({ img, title, description }) {
  return (
    <div className='bg-puly-yellow shadow-md rounded-md p-4 text-center flex flex-col items-center justify-center'>
      <img className='w-3/12 mx-auto my-5' src={img} />
      <h3 className='font-bold text-lg px-6'>{title}</h3>
      <p className='text-gray-600 px-6'>{description}</p>
    </div>
  )
}

function Testimonial ({ name, date, comment }) {
  return (
    <div className='bg-white shadow rounded p-4'>
      <p className='text-gray-800'>{comment}</p>
      <p className='text-sm text-gray-400'>- {name}, {date}</p>
    </div>
  )
}

function LandingPage () {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header Section */}
      <div className='drop-shadow-md bg-puly-white flex justify-between items-center p-5 px-20'>
        <div>
          <img src='/images/logo.svg' alt='Nipto Logo' className='h-16 mr-4' />
        </div>
        <a href='#' className='inline-block drop-shadow bg-white hover:bg-puly-red text-black hover:text-puly-white text-sm font-bold py-3 px-4 rounded-md'>TÉLÉCHARGER L'APP</a>
      </div>

      {/* Hero Section */}
      <div className='bg-puly-red p-20 flex items-center justify-between space-x-8'>
        <div className='flex-1'>
          <h1 className='text-6xl font-bold text-puly-white'>JOUEZ, APPRENEZ & GAGNEZ</h1>
          <p className='text-puly-white my-4'>Donnez à vos enfants le goût de l'accomplissement — <div className='font-bold'>Créez des tâches personnalisées et des récompenses</div> qui les encouragent chaque jour.</p>
          <a href='#' className='inline-block drop-shadow hover:bg-white hover:text-black bg-puly-yellow text-puly-white text-sm font-bold py-3 px-4 rounded-md'>Obtenez notre application sur le Play Store</a>
        </div>
        <div className='flex-1'>
          <img src='/images/header-iphone-mockups-2.webp' alt='Puly - Mockup' className='w-11/12' />
        </div>
      </div>

      {/* Features Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        <FeatureCard
          img='/images/puly-icon-02.svg'
          title='Customize your chores list & value'
          description='Build your own chores list & organize them into multiple customizable categories.'
        />
        <FeatureCard
          img='/images/puly-icon-03.svg'
          title='Track achievements & earn points'
          description='Track the chores done by every team members and monitor their participation throughout the week.'
        />
        <FeatureCard
          img='/images/puly-icon-04.svg'
          title='Monitor your team members scores'
          description='View the participation of all team members with the weekly leaderboard.'
        />
      </div>

      {/* Testimonials Section */}
      <div className='bg-blue-100 p-4'>
        <h2 className='text-center text-2xl font-bold'>What People Are Saying</h2>
        <div className='space-y-4 mt-4'>
          <Testimonial
            name='David'
            date='July 5, 2021'
            comment="This is a very cool solution, basically it's a bank of time or points that you accumulate by accomplishing personalized tasks."
          />
          <Testimonial
            name='Jessica'
            date='April 29, 2021'
            comment='This app is a GAME CHANGER if you struggle to get chores done and you share a home with someone else.'
          />
        </div>
      </div>

      {/* Download Section */}
      <div className='text-center p-10'>
        <h2 className='text-2xl font-bold text-blue-800'>Get Your Nipto App</h2>
        <p className='text-gray-600 mb-4'>Available and free on both Android & iOS, download it and start playing now.</p>
        <a href='https://play.google.com/store/apps/details?id=com.nipto.niptoapp' className='bg-green-600 text-white font-bold py-2 px-4 rounded mr-2'>Google Play</a>
        <a href='https://apps.apple.com/en/app/nipto/id1504877473' className='bg-blue-600 text-white font-bold py-2 px-4 rounded'>App Store</a>
      </div>
    </div>
  )
}

export default LandingPage
