function HeroSection () {
  return (
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
  )
}

export default HeroSection
