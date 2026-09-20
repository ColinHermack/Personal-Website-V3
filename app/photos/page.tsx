import { Photos } from 'app/components/photos'

export const metadata = {
  title: 'Photos',
  description: 'Photos from my travels.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Photos
      </h1>
      <Photos />
    </section>
  )
}
