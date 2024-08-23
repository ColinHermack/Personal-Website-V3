import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Colin Hermack
      </h1>
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
