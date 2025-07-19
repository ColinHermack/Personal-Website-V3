import Image from 'next/image';
import Headshot from './/assets/headshot.jpg';
import { RecentProjects } from 'app/components/projects';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


export default function Page() {
  return (
    <section>
      <h1 className="mb-5 text-2xl font-semibold tracking-tight">
        Colin Hermack
      </h1>
      <Image 
        className='mb-5 rounded-full'
        src={Headshot}
        width={80}
        height={80}
        alt='Picture of Colin Hermack'
      />
      <p className="mb-4">
        I'm a third year computer science and math student at Purdue University. I'm interested in computer security and experienced in full-stack
        software engineering. I'm currently working as a software engineering intern at W.R. Berkley Corporation and as a web developer for Purdue's
        College of Science. I'll also be a teaching assistant for the Data Mine at Purdue in the fall.
      </p>
      <h2 className='text-xl font-semibold tracking-tight mb-4 mt-4'>Recent Projects</h2>
      <RecentProjects numProjects={3} />
      <h2 className='text-xl font-semibold tracking-tight mb-4 mt-4'>Contact</h2>
      <p>Check out my GitHub page, LinkedIn profile, or send me an email here.</p>
      <div className='flex flex-row content-left items-center mt-5 mb-5 text-slate-800'>
        <a
              className="flex items-center transition-all hover:text-neutral-600 dark:text-white dark:hover:text-blue-200"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.github.com/colinhermack"
        >
              <p className="text-3xl"><FaGithub /></p>
        </a>
        <a
              className="flex items-center transition-all hover:text-neutral-600 dark:text-white dark:hover:text-blue-200"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/colinhermack/"
            >
              <p className="ml-10 text-3xl"><FaLinkedin /></p>
        </a>
        <a
              className="flex items-center transition-all hover:text-neutral-600 dark:text-white dark:hover:text-blue-200"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:colinhermack@gmail.com"
            >
              <p className="ml-10 text-3xl"><FaEnvelope /></p>
        </a>
      </div>
    </section>
  )
}
