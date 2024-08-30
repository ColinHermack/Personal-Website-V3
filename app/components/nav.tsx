import Link from 'next/link'

const navItems = {
  '/resume': {
    name: 'Resume'
  },
  '/projects': {
    name: 'Projects'
  },
  '/education': {
    name: 'Education'
  }
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between items-center md:overflow-auto"
          id="nav"
        >
          <Link className="px-2 font-semibold" href='/'>Colin Hermack</Link>
          <div className="flex flex-row">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100 flex align-middle relative px-2 "
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
