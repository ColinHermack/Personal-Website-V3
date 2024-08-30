import Image from 'next/image';
import ObiWan from './/assets/archives.jpg';

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <Image 
        className='mb-5'
        src={ObiWan}
        width={400}
        height={200}
        alt='Picture of Colin Hermack'
      />
      <p className="mb-4">It looks like the system you are searching for doesn't exist.</p>
    </section>
  )
}
