export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
        <div className="w-[45vw] h-[45vw] rounded-full animate-spin shadow-inner shadow-lime-500 bg-transparent"></div>
      </div>
    </div>
  )
}
