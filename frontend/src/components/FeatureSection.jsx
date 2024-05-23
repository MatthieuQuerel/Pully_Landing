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
  )
}

export default FeatureSection
