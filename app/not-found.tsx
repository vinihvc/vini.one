'use client'

import NextError from 'next/error'

const NotFound = () => {
  return (
    <html lang="en">
      <body>
        <NextError statusCode={404} />
      </body>
    </html>
  )
}

export default NotFound
