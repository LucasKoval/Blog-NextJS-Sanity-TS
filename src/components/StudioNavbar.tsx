import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

export default function StudioNavbar(props: any) {
  return (
    <section id="studio-navbar">
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="flex items-center text-[#00a9cd]">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-[#00a9cd]" />
          Go To Website
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#00a9cd]">
          <h2 className="font-bold text-white">Next.js official Blog 👉</h2>
          <Link href="https://nextjs.org/blog" className="font-bold ml-2 text-[#00a9cd]">
            nextjs.org/blog
          </Link>

          <p className="font-bold text-white mx-3">|</p>

          <h2 className="font-bold text-white">Sanity Studio 👉</h2>
          <Link href="https://www.sanity.io/studio" className="font-bold ml-2 text-[#00a9cd]">
            sanity.io/studio
          </Link>
        </div>
      </div>

      <>{props.renderDefault(props)}</>
    </section>
  )
}
