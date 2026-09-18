'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { FaX, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

export function PhotoGrid({ filenames }: { filenames: string[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState<number | null>(null)

  function open(i: number) {
    setIndex(i)
    dialogRef.current?.showModal()
  }

  function step(delta: number) {
    setIndex((i) => (i === null ? i : (i + delta + filenames.length) % filenames.length))
  }

  const iconButton =
    'text-white/80 hover:text-white transition-colors p-3 text-2xl'

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {filenames.map((filename, i) => (
          <button
            key={filename}
            onClick={() => open(i)}
            className="relative aspect-square"
          >
            <Image
              src={`/photos/${filename}`}
              alt=""
              fill
              sizes="(max-width: 768px) 33vw, 200px"
              className="object-cover rounded"
            />
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close()
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') step(-1)
          if (e.key === 'ArrowRight') step(1)
        }}
        className="m-0 h-screen w-screen max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85 open:flex items-center justify-center"
      >
        <button
          onClick={() => dialogRef.current?.close()}
          className={`${iconButton} absolute top-2 left-2 flex items-center gap-2 text-base`}
        >
          <FaX />
        </button>
        {filenames.length > 1 && (
          <>
            <button
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className={`${iconButton} absolute left-1 top-1/2 -translate-y-1/2`}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => step(1)}
              aria-label="Next photo"
              className={`${iconButton} absolute right-1 top-1/2 -translate-y-1/2`}
            >
              <FaChevronRight />
            </button>
          </>
        )}
        {index !== null && (
          <img
            src={`/photos/${filenames[index]}`}
            alt=""
            className="block h-auto w-auto max-h-[80vh] max-w-[80vw] border-[10px] sm:border-[20px] border-white shadow-2xl"
          />
        )}
      </dialog>
    </>
  )
}
