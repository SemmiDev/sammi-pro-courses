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
        className="relative block p-8 border border-gray-100 shadow-xl just rounded-xl"
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
            Bahasa Pemrograman <span className="text-orange-400">Java</span>
          </h5>

          <p className="mt-2 text-sm leading-2 sm:block">
            <b>Java</b> adalah bahasa pemrograman yang populer dan banyak
            digunakan untuk membuat aplikasi desktop, aplikasi web, aplikasi
            mobile, dan game. Java juga digunakan untuk membuat aplikasi server
            dan aplikasi-aplikasi lainnya. <b>Spring Framework</b> adalah salah
            satu framework Java yang paling populer dan banyak digunakan untuk
            membuat aplikasi web.
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
        <CourseItem linkDetails="java" />
        {/* <CourseItem /> */}
        {/* <CourseItem /> */}
      </div>
    </>
  )
}

export default function Courses() {
  return (
    <>
      <div className="relative min-h-screen px-5 py-3 text-white bg-my-dark-main">
        <ListCoursesItems />
        <Footer />
      </div>
    </>
  )
}
