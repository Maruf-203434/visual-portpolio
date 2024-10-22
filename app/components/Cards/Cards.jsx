'use client'

import Card from './Card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { motion, AnimatePresence } from 'framer-motion'

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma
} from 'react-icons/fa'

const journey = [
  {
    type: 'experience',
    company: '0deao Labs',
    logoUrl: '/assets/journey/experience/logo-1.svg',
    position: 'Web Developer',
    duration: 'Jul 2021 -Jan 2022',
    description:
      'Built websites and web apps using Next.js , Tailwind CSS, and Javascript.worked on scalable,user-friendly solution.'
  },

  {
    type: 'experience',
    company: 'Stack3d Lab',
    logoUrl: '/assets/journey/experience/logo-2.svg',
    position: 'Frontend Developer',
    duration: 'Jan 2021 - July 2023',
    description:
      'Developed responsive websites with HTML , CSS , and Javascript. Ensured seamless user experience'
  },

  {
    type: 'experience',
    company: 'Magnolia',
    logoUrl: '/assets/journey/experience/logo-3.svg',
    position: 'UI/UX Developer',
    duration: 'Jul 2022 -Jan 2023',
    description:
      'Designed web iterfaces with cross-brower compatibility and responsiveness Delivered pixel-perfect design'
  },

  {
    type: 'experience',
    company: 'Warpspeed Inc',
    logoUrl: '/assets/journey/experience/logo-4.svg',
    position: 'Full Stack Developer',
    duration: 'Jul 2022 -Jan 2024',
    description:
      'Developed full-stack solutions using React and Node.js . Intergrated fronted and backend technologies'
  },
  // education
  {
    type: 'education',
    institution: 'Udemy',
    logoUrl: '/assets/journey/education/logo-1.svg',
    qualification: 'Web Development',
    duration: 'Feb 2019 -Jan 2021',
    description:
      'Learned full-stack development concepts ,focusing on React,Node js,and APIs.Completed hands-on projects to solidify skills'
  },
  {
    type: 'education',
    institution: 'CodeAcademy Bootcamp',
    logoUrl: '/assets/journey/education/logo-2.svg',
    qualification: 'Full Stack Dev Cart',
    duration: 'March 2021 -July2023',
    description:
      'Gained experience in frontend and backend technologies ,including React ,Node Js,and database.'
  },
  {
    type: 'education',
    institution: 'Design Institute',
    logoUrl: '/assets/journey/education/institution.svg',
    qualification: 'UI/UX Diploma',
    duration: 'Jul 2022 - Nov 2022',
    description:
      'Studied advanced principles of user interface and user experience design. Developed skills in prototyping ,wireframing ,and usability testing.',
  },
  {
    type: 'education',
    institution: 'Business School',
    logoUrl: '/assets/journey/education/institution.svg',
    qualification: 'Project Management Cert',
    duration: 'April 2020 - Nov 2021',
    description:
      'Completed certification in project management,focusing on Agile methodologies and effective team collaboration.',
  },
  // skills
  {
    type: 'skills',
    name: 'HTML',
    icon: <FaHtml5 />,
    duration: 'Learned in 2023',
    description:
      'Crafted starutured web content using HTML effectively for moddern websites,ensureing semanting mackup and accessiblity.'
  },

  {
    type: 'skills',
    name: 'CSS',
    icon: <FaCss3Alt />,
    duration: 'Learned in 2021',
    description:
      'Styled responsive web pages using CSS,ensuring an appealing user experience with modern design principle and layouts'
  },
  {
    type: 'skills',
    name: 'Javascript',
    icon: <FaJs />,
    duration: 'Learned in 2020',
    description:
      'Implemented  Javascript for interactively , enhancing user engagement on websites through dynamic content and features.'
  },
  {
    type: 'skills',
    name: 'React.js',
    icon: <FaReact />,
    duration: 'Learned in 2022',
    description:
      'Built dynamic user interfaces using React.js,optimizing component-driven design for seamless user experiences and effeciency.'
  },
  {
    type: 'skills',
    name: 'Wordpress',
    icon: <FaWordpress />,
    duration: 'Learned in 2020',
    description:
      'Creafted structured web content using HTML effectively for modern websites ensuring semanting marckup and accessibility'
  },
  {
    type: 'skills',
    name: 'Figma',
    icon: <FaFigma />,
    duration: 'Learned in 2022',
    description:
      'Designed user interfaces in Figma, facilitating collaboration and rapid prototying to meet user needs and project goals.'
  }
]

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue='experience'
        className='w-full flex flex-col items-center'
      >
        <TabsList className='max-w-max mb-[30px]'>
          <TabsTrigger value='experience'>Experience</TabsTrigger>
          <TabsTrigger value='education'>Education</TabsTrigger>
          <TabsTrigger value='skills'>My Skills</TabsTrigger>
        </TabsList>
        <TabsContent value='experience' className='w-full'>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter(item => item.type === 'experience')
                .map((card, index) => {
                  return <Card key={index} {...card} />
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        <TabsContent value='education' className='w-full'>
          <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {journey
              .filter(item => item.type === 'education')
              .map((card, index) => {
                return <Card key={index} {...card} />
              })}
          </motion.div>
          </AnimatePresence>
        </TabsContent>

        <TabsContent value='skills' className='w-full'>
          <AnimatePresence>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          >
            {journey
              .filter(item => item.type === 'skills')
              .map((card, index) => {
                return <Card key={index} {...card} />
              })}
          </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  )
}

export default Cards
