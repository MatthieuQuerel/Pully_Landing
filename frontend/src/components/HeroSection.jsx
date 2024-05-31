function HeroSection () {
  return (
    <div className='bg-puly-red p-20 flex items-center justify-between space-x-9'>
      <div className='flex-1'>
        <h1 className='text-6xl font-bold text-puly-white'>JOUEZ, APPRENEZ & GAGNEZ AVEC PULY</h1>
        <p className='text-puly-white my-4 mx-1 max-w-xl'>
          Facilitez les tâches ménagères avec Puly ! Motivez vos enfants à participer aux corvées quotidiennes grâce à un système de récompense amusant et éducatif.
        </p>
        <a href='#' className='inline-block drop-shadow hover:bg-white hover:text-black bg-puly-yellow text-puly-white text-sm font-bold py-3 px-4 rounded-md'>Obtenez notre application sur le Play Store</a>
      </div>
      <div className='flex-1'>
        <img src='/images/Header.webp' alt='Puly - Mockup' className='w-11/12' />
      </div>
    </div>
  )
}

export default HeroSection
