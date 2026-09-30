import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#182642',
          color: '#c8a464',
          fontSize: 20,
        }}
      >
        R
        <div style={{ width: 1.5, height: 20, marginLeft: 3, background: '#c8a464' }} />
      </div>
    ),
    { ...size }
  )
}
