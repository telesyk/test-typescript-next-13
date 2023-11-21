import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import { routes } from './routes'

export default function Home() {
  const toolsRoutes = routes.filter(route => {
    if (!Object.hasOwn(route, 'tags')) return
    return route.tags?.includes('tool')
  })
  return (
    <div className="max-w-lg mx-auto p-2 sm:p-8 lg:px-12 lg:py-14 rounded-xl bg-zinc-800/40 shadow-xl shadow-sky-200">
      <h1 className="text-4xl text-center leading-10">
        Testing TypeScript and NextJS!
      </h1>
      <div className="flex flex-col gap-4 max-w-lg mx-auto my-8">
        <h3 className="text-xl">All tools:</h3>

        {toolsRoutes.map(route => (
          <Link
            key={route.name}
            href={route.url}
            className="flex items-center justify-between gap-2 py-2 px-4 rounded-sm bg-slate-100/25 hover:bg-slate-100/50 hover:shadow-md hover:shadow-yellow-200"
          >
            <span>{route.name}</span>
            <FaAngleRight />
          </Link>
        ))}
      </div>
    </div>
  )
}
