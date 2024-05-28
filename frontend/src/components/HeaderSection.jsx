function HeaderSection () {
  return (
    <div className='drop-shadow-md bg-puly-white flex justify-between items-center p-1 px-20'>
      <div>
        <a href='/'>
          <img src='/images/logo.svg' alt='Nipto Logo' className='h-16 mr-4' />
        </a>
      </div>
      <div className='button-container'>
        <a href='/' className='inline-block drop-shadow bg-white hover:bg-puly-red text-black hover:text-puly-white text-sm font-bold py-3 px-4 rounded-md'>TÉLÉCHARGER L'APP</a>
        <a href='/blog' className='inline-block drop-shadow bg-white hover:bg-puly-red text-black hover:text-puly-white text-sm font-bold py-3 px-4 rounded-md'>Blog</a>
      </div>
    </div>
  )
}

export default HeaderSection
