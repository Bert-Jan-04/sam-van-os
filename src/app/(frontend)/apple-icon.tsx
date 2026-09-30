import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          fontSize: 96,
        }}
      >
        R
        <div style={{ width: 5, height: 100, marginLeft: 16, background: '#c8a464' }} />
      </div>
    ),
    { ...size }
  )
}
