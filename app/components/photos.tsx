import { getPhotos } from 'app/photos/utils'
import { PhotoGrid } from 'app/components/photo-grid'

export async function Photos() {
  const photos = await getPhotos()
  return <PhotoGrid filenames={photos.map((p) => p.filename)} />
}

interface IRecentPhotosProps {
  numPhotos: number
}

export async function RecentPhotos(props: IRecentPhotosProps) {
  const photos = await getPhotos()
  return (
    <PhotoGrid
      filenames={photos.slice(0, props.numPhotos).map((p) => p.filename)}
    />
  )
}
