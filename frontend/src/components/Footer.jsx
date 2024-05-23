import React from 'react'

function Footer () {
  return (
    <div className='bg-puly-yellow text-white p-6'>
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center mb-4'>
          <div />
        </div>
        <div className='flex flex-col items-center'>
          <a href='#' className='inline-block drop-shadow bg-puly-white hover:bg-puly-red text-puly-black hover:text-puly-white text-sm font-bold py-3 px-4 rounded-md'>TÉLÉCHARGER L'APP</a>
        </div>
      </div>
      <div className='container mx-auto mt-6 flex flex-col items-center text-sm'>
        <p className='text-center text-puly-black'>&copy; Pully 2024 | Tous droits réservés.</p>
      </div>
    </div>
  )
}

export default Footer
