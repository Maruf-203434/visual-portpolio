import AnimationText from './AnimationText'
import Cards from './Cards/Cards'

const Journey = () => {
  return (
    <section id='journey'>
      <div className='container mx-auto'>
        <AnimationText
          text='My Professional Journey'
          textStyles='h2 mb-[30px] text-center'
        />
        <Cards/>
      </div>
    </section>
  )
}

export default Journey
