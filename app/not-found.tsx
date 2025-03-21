'use client'

import NextError from 'next/error'

const NotFoundPage = () => {
  return (
    <html lang="en">
      <body>
        <NextError statusCode={404} />
      </body>
    </html>
  )
}

export default NotFoundPage
