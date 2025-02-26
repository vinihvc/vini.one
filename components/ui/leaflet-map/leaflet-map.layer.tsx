import { env } from '@/lib/env'
import { TileLayer } from 'react-leaflet'

const USER_ID = env.NEXT_PUBLIC_MAPBOX_USER_ID
const STYLE_ID = env.NEXT_PUBLIC_MAPBOX_STYLE_ID
const ACCESS_TOKEN = env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

interface LeafletMapLayerProps
  extends Omit<React.ComponentProps<typeof TileLayer>, 'url'> {}

export const LeafletMapLayer = (props: LeafletMapLayerProps) => {
  const { ...rest } = props

  if (ACCESS_TOKEN) {
    return (
      <TileLayer
        attribution='<a href="https://apps.mapbox.com/feedback/">Mapbox</a>'
        {...rest}
        url={`https://api.mapbox.com/styles/v1/${USER_ID}/${STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${ACCESS_TOKEN}`}
      />
    )
  }

  return (
    <TileLayer
      attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      {...rest}
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}
