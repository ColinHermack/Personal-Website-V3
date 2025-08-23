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
        I'm Colin Hermack, a third year computer science and mathematics student at Purdue University. I'm currently
        working as a part time software engineer at W.R. Berkley Corporation, where I've built internal tools for
        tracking and monitoring performance of remote computing jobs and worked on custom AI tooling for our insurance
        partners.
      </p>
      <p className='my-4'>
        I'm interested in computer security and data science, and I'm currently a teaching assistant for 
        Purdue's <a href='https://datamine.purdue.edu' className='text-slate-600 underline' >Data Mine</a> learning community. 
        I'm also the webmaster of the <a href='https://www.purdueoutingclub.com' className='text-slate-600 underline' >Purdue Outing Club</a>, 
        and I've designed pages for Purdue's <a href='https://www.purdue.edu/science/' className='text-slate-600 underline' >College of Science</a> website.
      </p>
      <p className='my-4'>
        My other interests include exercising, fishing, backpacking, and working on my bicycle.
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
