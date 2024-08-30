import data from './data.json' assert { type: 'json' };

export const metadata = {
  title: 'Resume',
  description: 'Colin Hermack\'s resume.',
}

export default async function Page() {
  let resumeData: Object = data;
  return (
    <>
      <h1 className="font-semibold text-2xl mb-8 tracking-tight">Resume</h1>
      <p>{resumeData['Description']}</p>
      <h2 className='font-semibold text-2xl mt-4 mb-4 tracking-tight'>Education</h2>
      <ul>{
        resumeData['Education'].map((curr) => {
          return(
            <li key={curr['Degree']} className='mb-4'>
              <div className='flex flex-row justify-between items-center'>
                <div className='font-semibold'>{curr['Institution']}</div>
                <div>{curr['Start']} - {curr['End']}</div>
              </div>
              <div className='mb-2'>{curr['Degree']}</div>
              <ul>
                {curr['Notes'].map((item) => {
                return (<li key='item' className='ml-4'>- {item}</li>)
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      <h2 className='font-semibold text-2xl mt-4 mb-4 tracking-tight'>Experience</h2>
      <ul>
        {resumeData['Experience'].map((curr) => {
          return (
            <li key={curr['Title']} className='mb-4'>
              <div className='flex flex-row justify-between items-center'>
                <div className='font-semibold'>{curr['Title']}</div>
                <div>{curr['Start']} - {curr['End']}</div>
              </div>
              <div className='mb-2'>{curr['Company']}</div>
              <ul>
                {curr['Notes'].map((item) => {
                return (<li key='item' className='ml-4'>- {item}</li>)
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      <h2 className='font-semibold text-2xl mt-4 mb-4 tracking-tight'>Skills</h2>
      <p>{resumeData['Skills'].join(", ")}</p>
     </>
  )
}
