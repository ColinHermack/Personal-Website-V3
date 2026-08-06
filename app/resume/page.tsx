import data from './data.json';

export const metadata = {
  title: 'Resume',
  description: 'Colin Hermack\'s resume.',
}

function Entry({ title, dates, subtitle, location, notes }: {
  title: string, dates?: string, subtitle?: string, location?: string, notes: string[]
}) {
  return (
    <li className='mb-4'>
      <div className='flex flex-row justify-between items-center'>
        <div className='font-semibold'>{title}</div>
        <div>{dates}</div>
      </div>
      <div className='flex flex-row justify-between items-center mb-2 italic'>
        <div>{subtitle}</div>
        <div>{location}</div>
      </div>
      <ul>
        {notes.map((item) => <li key={item} className='ml-4'>- {item}</li>)}
      </ul>
    </li>
  )
}

export default async function Page() {
  return (
    <>
      <h1 className="font-semibold text-2xl mb-8 tracking-tight">Resume</h1>

      <p>{data.Description}</p>

      <h2 className='font-semibold text-2xl mt-4 mb-4 tracking-tight'>Education</h2>
      <ul>
        {data.Education.map((curr) => (
          <Entry
            key={curr.Degree}
            title={curr.Institution}
            dates={`${curr.Start} - ${curr.End}`}
            subtitle={curr.Degree}
            location={curr.Location}
            notes={curr.Notes}
          />
        ))}
      </ul>

      <h2 className='font-semibold text-2xl mt-4 mb-4 tracking-tight'>Experience</h2>
      <ul>
        {data.Experience.map((curr) => (
          <Entry
            key={`${curr.Title}${curr.Start}`}
            title={curr.Title}
            dates={`${curr.Start} - ${curr.End}`}
            subtitle={curr.Company}
            location={curr.Location}
            notes={curr.Notes}
          />
        ))}
      </ul>

      <h2 className='font-semibold text-2xl mt-4 mb-4 tracking-tight'>Volunteering</h2>
      <ul>
        {data.Volunteering.map((curr) => (
          <Entry
            key={`${curr.Title}${curr.Start}`}
            title={curr.Title}
            dates={`${curr.Start} - ${curr.End}`}
            subtitle={curr.Company}
            location={curr.Location}
            notes={curr.Notes}
          />
        ))}
      </ul>

      <h2 className='font-semibold text-2xl mt-4 mb-4 tracking-tight'>Projects</h2>
      <ul>
        {data.Projects.map((curr) => (
          <Entry
            key={curr.Name}
            title={curr.Name}
            subtitle={curr.Technologies}
            notes={curr.Notes}
          />
        ))}
      </ul>

      <h2 className='font-semibold text-2xl mt-4 mb-4 tracking-tight'>Skills</h2>
      {Object.entries(data.Skills).map(([category, list]) => (
        <p key={category}><span className='font-semibold'>{category}:</span> {list}</p>
      ))}
    </>
  )
}
