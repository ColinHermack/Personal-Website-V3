import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-600 dark:text-white dark:hover:text-blue-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ColinHermack"
          >
            <p className="h-10 text-xl"><FaGithub /></p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-600 dark:text-white dark:hover:text-blue-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/colinhermack/"
          >
            <p className="h-7 text-xl"><FaLinkedin /></p>
          </a>
        </li>
      </ul>
      <p className="mt-8">
        © 2024 MIT Licensed
      </p>
    </footer>
  )
}
