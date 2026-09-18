import fs from 'fs'
import path from 'path'
import exifr from 'exifr'

const PHOTOS_DIR = path.join(process.cwd(), 'public', 'photos')

export type PhotoMetadata = { filename: string; takenAt: Date }

async function getTakenAt(filePath: string): Promise<Date> {
  try {
    const exif = await exifr.parse(filePath, ['DateTimeOriginal'])
    if (exif?.DateTimeOriginal) return new Date(exif.DateTimeOriginal)
  } catch {}
  // ponytail: mtime resets to checkout time on every fresh Vercel build, so
  // this fallback is only meaningful in local dev. Upgrade path: store a
  // real "date added" if photos without EXIF become common.
  return fs.statSync(filePath).mtime
}

export async function getPhotos(): Promise<PhotoMetadata[]> {
  if (!fs.existsSync(PHOTOS_DIR)) return []
  const files = fs
    .readdirSync(PHOTOS_DIR)
    .filter((f) => path.extname(f).toLowerCase() === '.jpg')
  const photos = await Promise.all(
    files.map(async (filename) => ({
      filename,
      takenAt: await getTakenAt(path.join(PHOTOS_DIR, filename)),
    }))
  )
  return photos.sort((a, b) => b.takenAt.getTime() - a.takenAt.getTime())
}
