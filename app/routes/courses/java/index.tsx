import {Footer} from '~/components/Footer'
import {Link} from '@remix-run/react'
import {FunctionComponent} from 'react'

interface CourseItemProps {
  linkDetails: string
}

const CourseItem: FunctionComponent<CourseItemProps> = ({linkDetails}) => {
  return (
    <>
      <Link
        className="relative block p-8 border border-teal-700 shadow-xl border-1 just rounded-xl"
        to={linkDetails}
      >
        <span className="absolute right-4 top-4 rounded-full bg-teal-200 px-3 py-1.5 text-xs font-medium text-black font-sans">
          4.3
        </span>

        <div className="mt-4 text-white sm:pr-8">
          <img
            src="/java.png"
            alt="java logo"
            className="object-contain w-20 h-20"
          />
          <h5 className="mt-4 text-xl font-bold text-white">
            Dasar Pemrograman <span className="text-pink-400">Java</span>
          </h5>

          <p className="mt-2 text-sm leading-2 sm:block">
            Pada course ini kamu akan belajar dasar-dasar pemrograman Java. Kamu
            akan belajar tentang tipe data, operator, <i>conditional</i>,
            perulangan, fungsi, dan masih banyak lagi. Kamu akan diberi juga
            latihan untuk mempraktekkan apa yang kamu pelajari.
          </p>
        </div>
      </Link>
    </>
  )
}

function ListCoursesItems() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        <CourseItem linkDetails="dasar" />
        {/* <CourseItem /> */}
        {/* <CourseItem /> */}
      </div>
    </>
  )
}

export default function Index() {
  return (
    <>
      <div className="relative min-h-screen px-5 py-3 text-white bg-my-dark-main">
        <ListCoursesItems />
        <Footer />
      </div>
    </>
  )
}
