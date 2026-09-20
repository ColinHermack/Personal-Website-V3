import Image from 'next/image';
import Headshot from './/assets/headshot.jpg';
import { RecentProjects } from 'app/components/projects';
import { RecentPhotos } from 'app/components/photos';
import { getAllTechStack } from 'app/projects/utils';
import { Tag } from 'app/components/tag';
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
      <p className='mb-4'>
        I am a software engineering intern at W.R. Berkley Corporation, where I currently work on modernization of
        legacy underwriting systems. I am graduating from Purdue University in December 2026 with degrees in computer science and mathematics.
      </p>
      <p className='mb-4'>
        I also like building apps on my own. I maintain the website and member management system of the Purdue Outing Club,
        and I recently started building iOS apps.
      </p>
      <p className='my-4'>
        Outside of programming, I like to travel, work out, and go on outdoor adventures.
      </p>
      <h2 className='text-xl font-semibold tracking-tight mb-4 mt-4'>Recent Projects</h2>
      <RecentProjects numProjects={3} />
      
      <h2 className='text-xl font-semibold tracking-tight mb-4 mt-4'>Technologies I've Used</h2>
      <div className='flex flex-row flex-wrap gap-1.5 mb-4'>
        {getAllTechStack().map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <h2 className='text-xl font-semibold tracking-tight mb-4 mt-4'>Photos From My Travels</h2>
      <RecentPhotos numPhotos={3} />
      
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
