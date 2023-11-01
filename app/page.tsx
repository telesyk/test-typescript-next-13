import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'
import { routes } from './routes'

export default function Home() {
  const toolsRoutes = routes.filter(route => {
    if (!Object.hasOwn(route, 'tags')) return
    return route.tags?.includes('tool')
  })
  return (
    <>
      <h1 className="text-3xl">hello there!</h1>
      <h2 className="text-2xl">home page!</h2>
      <div className="flex flex-col gap-4 max-w-lg mx-auto my-8">
        <h3 className="text-xl">All tools:</h3>

        {toolsRoutes.map(route => (
          <Link
            key={route.name}
            href={route.url}
            className="flex items-center justify-between gap-2 py-2 px-4 rounded-sm bg-slate-100/25 hover:bg-slate-100/50"
          >
            <span>{route.name}</span>
            <FaAngleRight />
          </Link>
        ))}
      </div>
    </>
  )
}
