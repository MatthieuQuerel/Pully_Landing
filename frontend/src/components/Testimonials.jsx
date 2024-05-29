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
            text=" Depuis que nous utilisons Puly, nos enfants sont bien plus motivés à faire leurs devoirs et à aider à la maison. Ils savent qu'ils méritent leurs récompenses. Cela a vraiment simplifié notre routine par apport aux tâches quotidiennes !"
          />
        </div>
        <div className='flex items-stretch'>
          <TestimonialCard
            name='Louis Chen'
            text="Puly a transformé la façon dont nous gérons les tâches ménagères. Lucas est maintenant impatient de terminer ses tâches pour gagner des points. L'application a rendu notre vie de famille plus harmonieuse et organisée."
          />
        </div>
      </Slider>
    </div>
  )
}

export default FAQTestimonial
