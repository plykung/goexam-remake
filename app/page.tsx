import { PlusCircleIcon, StarIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (

    <>
      <div className="hero min-h-screen bg-base-200 px-12">
        <div className="hero-content justify-between flex-col md:flex-row-reverse w-[100%]">

          <div className="z=[0]">
            <Image src="https://placehold.co/400/png" width={400} height={400} alt="hero" />
          </div>

          <div>
            <h1 className="text-5xl font-bold">GoExam</h1>
            <p className="pt-6">Practice exams generator. For Better Score, Better Future.</p>
            <p className="pb-6">Coming Soon!</p>
            <div className="flex">
              {/* <Link href="/create">
                <button className="btn btn-primary mx-2 px-14">New Exam</button>
              </Link>
              <Link href="/exercise">
                <button className="btn btn-outline btn-secondary mx-2 px-14">Your Exam</button>
              </Link> */}

              <Link href="https://github.com/plykung/goexam-remake" target="_blank">
                <button className="btn btn-outline btn-secondary mx-2 px-14"><StarIcon className="w-4 h-4 pe-1" /> Follow us on Github</button>
              </Link>


            </div>


          </div>

        </div>
      </div>
      <div className="px-5">

      </div>

    </>

  )
}