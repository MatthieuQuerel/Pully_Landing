function FeatureCard ({ img, title, description }) {
  return (
    <div className='bg-puly-yellow shadow-md rounded-md p-4 text-center flex flex-col items-center justify-center'>
      <img className='w-3/12 mx-auto my-5' src={img} alt={title} />
      <h3 className='font-bold text-lg px-6'>{title}</h3>
      <p className='text-gray-600 px-6'>{description}</p>
    </div>
  )
}

function FeatureSection () {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      <FeatureCard
        img='/images/puly-icon-02.svg'
        title="Personnalisez vos tâches et prédéfinissez les points qu'elles rapportent"
        description="Vous pouvez personnalisez les tâches que votre enfant doit réaliser tout au long de la semaine pour lui permettre d'obtenir des récompenses."
      />
      <FeatureCard
        img='/images/puly-icon-03.svg'
        title="Suivez l'implication de votre enfant aux tâches quotidiennes"
        description="Grâce au compte parent, suivez l'avancement de votre enfant sur ses tâches à réaliser et attribuez lui ses récompenses !"
      />
      <FeatureCard
        img='/images/puly-icon-04.svg'
        title='Rendez votre enfant autonome'
        description=' Grâce à Puly, votre enfant deviendra de plus en plus autonome et aura le sens des priorités.'
      />
    </div>
  )
}

export default FeatureSection
