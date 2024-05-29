import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../slider/customSlider.css'
import HeaderSection from '../components/HeaderSection'
function Blog () {
  return (
    <div className='bg-puly-white p-3'>
      <HeaderSection />
      <main className='mt-7'>
        <div className='flex justify-center'>
          <img src='/images/father-cleaning-along-son.jpg' alt='Puly-Mockup' className='w-3/4 md:w-1/2 lg:w-1/4' />
        </div>
        <h1 className='text-4xl font-bold mb-4'>Faire le ménage avec ses enfants : Le guide de Puly</h1>
        <p className='mb-4'>
          Ordonner à votre enfant de ranger ses jouets, à votre ado de mettre de l’ordre dans sa chambre ou de faire la vaisselle s’avère souvent infructueux. Pour encourager votre enfant à participer aux tâches ménagères, il faut adopter une méthode adaptée. Voici comment Puly, notre application de gestion des tâches, peut vous aider.
        </p>

        <Section
          title='Demander aux enfants de contribuer aux tâches ménagères'
          content={`
            Énumérer les tâches sur un tableau est une méthode qui ne marche pas toujours. Il est préférable de répartir les tâches tout au long de la semaine entre chaque membre de la famille, en tenant compte des préférences et des emplois du temps de chacun.
            Encore mieux : inculquer les valeurs du rangement aux enfants dès leur plus jeune âge. Avec Puly, vous pouvez créer un emploi du temps personnalisé pour chaque enfant, leur attribuant des tâches adaptées à leur âge.
          `}
        />
        <Section
          title='Des tâches simples et courtes'
          content={`
            Dès 6 ans, les enfants veulent faire comme les grands. Vous pouvez leur demander de déposer leur vaisselle sale dans l’évier et de ranger leurs jouets. Avec Puly, ces tâches peuvent être ajoutées comme des quêtes simples et amusantes à accomplir.
            Il vaut mieux ne pas forcer les enfants. Confiez-leur des tâches simples et rapides qu’ils peuvent intégrer progressivement dans leur routine. Si un enfant de 6 ans peut débarrasser la table, il n’est pas encore assez mature pour rincer et placer la vaisselle dans la machine.
          `}
        />
        <Section
          title='Le récompense comme outil'
          content={`
            Les récompenses jouent un rôle crucial dans la motivation des enfants et des ados à accomplir des que ce soit les tâches ménagères où même les devoirs. Avec Puly, le système de récompenses est conçu pour être à la fois stimulant et éducatif. Chaque tâche accomplie permet aux enfants de gagner des points qu'ils peuvent échanger contre des récompenses que vous choisissez où sélectionner parmi une liste prédéfinie.
            En offrant des récompenses, vous valorisez les efforts de vos enfants et leur montrez que leur contribution est appréciée. Cela renforce également leur sentiment d'accomplissement et les motive à maintenir leurs bonnes habitudes.
            Les récompenses doivent être adaptées en fonction de l’âge, par exemple, un adolescent pourrait être motivé par une sortie avec des amis, tandis qu'un enfant plus jeune pourrait être content de passer un moment avec vous ou de débloquer un avatar pour son compte Puly.
          `}
        />
        <Section
          title='Pourquoi utiliser Puly ?'
          content={`
            En utilisant la gamification, Puly aide vos enfants à prendre en responsabilité, en autonomie, tout en vous facilitant la gestion des tâches.
            Rendre les tâches amusantes : transformer les tâches ménagères en missions. Les enfants peuvent gagner des points et débloquer des récompenses, ce qui les motive à accomplir leurs tâches.
            Encourager et récompenser : Utilisez le système de récompenses de Puly pour encourager les enfants à faire leurs tâches.
            Impliquer vos adolescents : Même les adolescents peuvent utiliser Puly. Les adolescents passent de plus en plus de temps sur les écrans, tirez en avantage pour que ce temps vous serve aussi. Éviter les conflits et facilitez-vous la vie avec Puly.
          `}
        />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

function Section ({ title, content }) {
  return (
    <section className='mb-6'>
      <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
      <p className='text-lg leading-relaxed'>{content}</p>
    </section>
  )
}

function CallToAction () {
  const handleRedirect = (url) => {
    window.location.href = url
  }

  return (
    <section className='my-8 p-4 bg-gray-100 rounded-md text-center'>
      <h2 className='text-xl font-bold mb-4'>Téléchargez Puly dès maintenant et profitez de notre version premium gratuitement pendant 14 jours !</h2>
      <div className='flex justify-center space-x-4'>
        <button onClick={() => handleRedirect('https://www.apple.com/app-store/')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Télécharger Puly sur l'App Store
        </button>
        <button onClick={() => handleRedirect('https://play.google.com/store')} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
          Télécharger Puly sur Google Play
        </button>
      </div>
    </section>
  )
}

function Footer () {
  return (
    <footer className='mt-8 p-4 text-center bg-puly-white'>
      <p>&copy; 2024 Puly. Tous droits réservés.</p>
    </footer>
  )
}

export default Blog
