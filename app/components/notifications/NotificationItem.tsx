import { FaXmark, FaCircle } from 'react-icons/fa6'

type NotificationProps = {
  children: any
  id: string
  options?: {
    type?: string // default (undefined), error, info, success
  }
  handleClick: (id: string) => void
}

export default function Notification({
  children,
  id,
  options,
  handleClick,
}: NotificationProps) {
  const colorType =
    options?.type === 'error'
      ? 'rose-700'
      : options?.type === 'info'
      ? 'sky-700'
      : options?.type === 'success'
      ? 'emerald-700'
      : options?.type === 'warn'
      ? 'amber-700'
      : 'slate-200'

  const classes =
    options?.type === 'error'
      ? `border-${colorType} text-rose-900 bg-rose-100/40`
      : options?.type === 'info'
      ? `border-${colorType} text-sky-800 bg-sky-100/40`
      : options?.type === 'success'
      ? `border-${colorType} text-emerald-800 bg-emerald-100/40`
      : options?.type === 'warn'
      ? `border-${colorType} text-amber-800 bg-amber-100/40`
      : `border-${colorType} text-slate-800`

  const circleR = 15.5

  const circleLength = 2 * circleR * 3.14

  const circleStyles = {
    fill: 'transparent',
    stroke: 'currentColor',
    'stroke-dasharray': circleLength /* (2 * r * PI) */,
    'stroke-dashoffset': circleLength /* (2 * r * PI) */,
    'transform-origin': 'center',
    transform: 'rotate(-90deg)',
    animation: 'circle-animation 3s ease-in-out infinite',
  }

  const circleAnimationCSS = `
  @keyframes circle-animation {
    0% {
      stroke-dashoffset: ${circleLength};
    }
    100% {
      stroke-dashoffset: 0;
    }
  }`

  const circleClasses = `stroke-${colorType}`

  return (
    <div
      id={id}
      className={`max-w-sm py-3 px-5 relative rounded-md border shadow-md backdrop-blur bg-slate-100/40 ${classes}`}
    >
      {children}
      <button
        className="w-8 h-8 absolute -top-4 -right-4 rounded-full bg-slate-200 flex items-center justify-center"
        type="button"
        onClick={() => handleClick(id)}
      >
        <FaXmark />
        <svg
          className={`w-full h-full absolute top-0 left-0 bg-transparent ${circleClasses}`}
        >
          <circle cx="50%" cy="50%" r={circleR} style={circleStyles} />
        </svg>
        <style>{circleAnimationCSS}</style>
      </button>
    </div>
  )
}
