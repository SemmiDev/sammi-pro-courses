import {Link} from '@remix-run/react'

export default function Hero() {
  return (
    <>
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl px-4 mx-auto py-14 md:py-36 lg:items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text sm:text-5xl">
              Sammi PRO Courses.
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:text-2xl sm:leading-relaxed">
              The ultimate training to prepare for coding skills
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                className="block w-full px-12 py-3 text-sm font-medium text-white transition-all bg-blue-600 border border-blue-600 rounded duration-400 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="http://sammi.netlify.app"
                target={'_blank'}
              >
                🐱 &nbsp; Mentor
              </a>

              <Link
                to="/courses"
                className="block w-full px-12 py-3 text-sm font-medium text-white transition-all border border-blue-600 rounded duration-400 hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              >
                Lihat Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
