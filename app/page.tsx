import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';
import Headshot from './/assets/headshot.jpg';

export default function Page() {
  return (
    <section>
      <h1 className="mb-5 text-2xl font-semibold tracking-tighter">
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
        {`I'm a second-year computer science and mathematics student at Purdue University. I'm interested
        in computer security and experienced in full-stack software development. I'm also a teaching assistant
        for the Data Mine learning community here at Purdue and enjoy teaching others about data science and math.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
