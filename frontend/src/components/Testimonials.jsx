import Slider from 'react-slick'

function TestimonialCard ({ name, text }) {
  return (
    <div className='bg-puly-red shadow-md rounded-md p-4 flex flex-col justify-center h-full mx-4'>
      <div className='text-center'>
        <h3 className='font-bold text-lg px-6'>{name}</h3>
        <p className='text-puly-black px-6'>{text}</p>
      </div>
    </div>
  )
}

function FAQTestimonial () {
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
    <div className='px-10 py-10 pb-20'>
      <h2 className='text-2xl text-puly-black font-bold text-center mb-8'>Témoignages</h2>
      <Slider {...settings}>
        <div className='flex items-stretch'>
          <TestimonialCard
            name='Joselyn Starr'
            text='Oui, nous avons conçu notre application pour être intuitive et facile à naviguer pour tous les utilisateurs, quel que soit leur niveau de confort avec la technologie.'
          />
        </div>
        <div className='flex items-stretch'>
          <TestimonialCard
            name='Louis Chen'
            text='Oui, nous avons conçu notre application pour être intuitive et facile à naviguer pour tous les utilisateurs, quel que soit leur niveau de confort avec la technologie.'
          />
        </div>
      </Slider>
    </div>
  )
}

export default FAQTestimonial
