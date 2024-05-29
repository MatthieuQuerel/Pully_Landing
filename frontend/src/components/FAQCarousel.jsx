import Slider from 'react-slick'

function FAQCard ({ question, answer }) {
  return (
    <div className='bg-puly-white shadow-md rounded-md p-4 flex flex-col justify-center h-full mx-4'>
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
            question='Comment Puly motive les enfants à faire leurs tâches ?'
            answer='Puly utilise un système de récompense ludique où les enfants gagnent des points pour chaque tâche accomplie. Ces points peuvent ensuite être échangés contre des récompenses personnalisées, ce qui les motive à participer activement aux tâches quotidiennes.'
          />
        </div>
        <div className='flex items-stretch'>
          <FAQCard
            question='Est-ce que Puly est adapté à tous les âges ?'
            answer="Oui, Puly est conçu pour être flexible et s'adapter aux enfants de tous âges. Vous pouvez personnaliser les tâches et les récompenses en fonction de l'âge et des capacités de chaque enfant, rendant l'application efficace pour toute la famille."
          />
        </div>
      </Slider>
    </div>
  )
}

export default FAQCarousel
