import Image from 'next/image'
import { motion } from 'framer-motion'
// components
import AnimationText from './AnimationText'

const About = () => {
  return (
    <section className='relative pt-12 pb-24' id='about'>
      <div className='container mx-auto h-full'>
        <div className='h-full flex items-center justify-center'>
          {/* Image */}
          <div className='hidden xl:flex flex-1 pl-8'>
            <div className='relative w-full max-w-[380px]'>
              {/* shape  */}
              <div className='w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10'></div>
              {/* Image */}
              <div className='rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[488px] flex items-end justify-center'>
                <Image
                  src='/assets/about/45.png'
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt=''
                />
              </div>

              {/* rotatting shape */}

              <div className='absolute top-2/4 -right-[65px] flex items-center justify-center'>
                <motion.div
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 10,
                    ease: 'linear',
                    repeat: Infinity
                  }}
                >
                  <Image
                    src='/assets/about/shape-1.svg'
                    width={160}
                    height={160}
                    alt=''
                  />
                </motion.div>
                <div className='absolute text-center text-white'>
                  <div className='text-5xl font-bold leading-none'>4+</div>
                  <div className='leading-none text-center'>
                    Years of <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* text */}

          <div className='text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6'>
            <div>
              <AnimationText text='My Name is Maruf' textStyles='h2 mb-2' />
              <p className='text-lg'>Frontend Developer & Designer</p>
            </div>
            <p className='max-w-[680px] mx-auto xl:mx-0 mb-2'>
              I create visually stunning and functional websites using modern
              frontend tecnologies and design principles. Explore my work to see
              how I combine creativity with technical skill to deliver
              exceptional degital experience
            </p>

            {/* info items */}
            <div className='flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center'>
              {/* item 1 */}
              <div className='max-w-max'>
                <div className='uppercase font-bold text-primary'>Age</div>
                <p>24 Years</p>
              </div>

              {/* item 2 */}
              <div className='max-w-max'>
                <div className='uppercase font-bold text-primary'>Born in</div>
                <p>Feni,Bangladesh</p>
              </div>

              {/* item 3 */}
              <div className='max-w-max'>
                <div className='uppercase font-bold text-primary'>Phone</div>
                <p>+01590161859</p>
              </div>

              {/* item 4 */}
              <div className='max-w-max'>
                <div className='uppercase font-bold text-primary'>Email</div>
                <p>mdmaruf201900@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
