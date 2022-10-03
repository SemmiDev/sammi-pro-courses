import {useLoaderData} from '@remix-run/react'
import type {LoaderFunction} from '@remix-run/node'

import Hero from '~/components/Hero'
import {Footer} from '~/components/Footer'

export default function Index() {
  return (
    <div className="relative min-h-screen px-5 py-3 text-white bg-my-dark-main">
      <Hero />
      <Footer />
    </div>
  )
}
