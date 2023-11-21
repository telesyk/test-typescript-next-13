export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
        <div className="w-[200vw] h-[200vw] bg-gradient-to-t from-lime-500 via-indigo-500 to-pink-600 animate-spin"></div>
      </div>
    </div>
  )
}
