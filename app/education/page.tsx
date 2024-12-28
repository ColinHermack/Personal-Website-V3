import data from './data.json' assert { type: 'json' };
let classData = data.reverse();

export const metadata = {
    title: 'Education',
    description: 'Colin Hermack\'s Education at Purdue.',
  }

export default async function Page() {
    return (
    <>
      <h1 className="font-semibold text-2xl tracking-tight mb-2">Education</h1>
      <p className='mb-8'>
        An exhaustive list of the classes I have taken or am currently taking at Purdue University.
      </p>
      {classData.map((curr) => {
        return (
          <div key={`semester-${curr['Semester']}`} className='mb-8'>
            <div className='font-semibold text-xl mb-2'>Semester {curr['Semester']}</div>
            <div>{curr['Coursework'].map((course) => {
              return(
                <div key={course['Number']} className='mb-2'>
                  <div className='font-semibold'>{course['Number']}: {course['Name']}</div>
                  <p className='text-sm'>{course['Description']}</p>
                </div>)
            })}</div>
          </div>)
      })}
    </>
    )
}
