import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ColinHermack"
          >
            <p className="h-10 text-xl"><FaGithub /></p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/colinhermack/"
          >
            <p className="h-7 text-xl"><FaLinkedin /></p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © 2024 MIT Licensed
      </p>
    </footer>
  )
}
