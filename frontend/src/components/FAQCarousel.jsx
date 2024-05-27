import Slider from 'react-slick'

function FAQCard ({ question, answer }) {
  return (
    <div className='bg-puly-yellow shadow-md rounded-md p-4 flex flex-col justify-center h-full mx-4'>
      <div className='text-center'>
        <h3 className='font-bold text-lg px-6'>{question}</h3>
        <p className='text-gray-600 px-6'>{answer}</p>
      </div>
    </div>
  )
}

function FAQCarousel () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <div className='bg-puly-red px-10 py-10 pb-20'>
      <h2 className='text-2xl text-white font-bold text-center mb-8'>Foire aux questions</h2>
      <Slider {...settings}>
        <div className='flex items-stretch'>
          <FAQCard
            question="Comment l'application sélectionne-t-elle les agriculteurs et les produits ?"
            answer="Nous avons un processus rigoureux pour choisir des agriculteurs qui respectent des normes élevées de qualité et d'éthique. Nous évaluons leur engagement envers les pratiques agricoles durables et la qualité des produits."
          />
        </div>
        <div className='flex items-stretch'>
          <FAQCard
            question="L'application est-elle facile à utiliser pour les personnes moins technophiles ?"
            answer='Oui, nous avons conçu notre application pour être intuitive et facile à naviguer pour tous les utilisateurs, quel que soit leur niveau de confort avec la technologie.'
          />
        </div>
      </Slider>
    </div>
  )
}

export default FAQCarousel
