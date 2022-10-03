import {Footer} from '~/components/Footer'

function DetailsJavaDasar() {
  return (
    <>
      <div className="relative min-h-screen px-5 py-3 font-sans text-white bg-my-dark-main">
        <h1 className="py-5 text-2xl">
          Course Dasar Pemrograman Java Super Complete auto jago kayak bang Sam
          :p
        </h1>
        <div className="text-slate-200">
          <h2 className="text-lg">Outline</h2>
          <ul className="pl-5 list-disc">
            <li>Pengenalan Java</li>
            <li>Teknologi Java</li>
            <li>Versi Java</li>
            <li>Kenapa Belajar Java</li>
            <li>Dimana Java Banyak Digunakan</li>
            <li>JRE vs JDK</li>
            <li>Java Virtual Machine</li>
            <li>Proses Development Program Java</li>
            <li>Menginstal Java</li>
            <li>Open JDK</li>
            <li>OpenJDK vs yang lain</li>
            <li>Integrated Development Environment</li>
            <li>Tipe data</li>
            <li>Variable</li>
            <li>Array</li>
            <li>Operator</li>
            <li>Expression, Statement, & Block</li>
            <li>Percabangan</li>
            <li>Perulangan</li>
            <li>Method</li>
            <li>Dan lain-lain</li>
          </ul>
          <h2 className="text-lg">Bonus</h2>
          <h2 className="text-lg">Mekanisme Belajar</h2>
          <h2 className="text-lg">Lama Pembelajaran</h2>
          <h2 className="text-lg">Tugas</h2>
          <h2 className="text-lg">Pricing</h2>
        </div>
      </div>
    </>
  )
}

export default function Dasar() {
  return (
    <>
      <div className="relative min-h-screen px-5 py-3 text-white bg-my-dark-main">
        <DetailsJavaDasar />
        <Footer />
      </div>
    </>
  )
}
