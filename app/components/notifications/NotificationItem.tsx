import { FaXmark } from 'react-icons/fa6'

type NotificationProps = {
  children: any
  id: string
  options?: {
    type?: string // default (undefined), error, info, success
  }
  handleClick: (id: string) => void
}

const CIRCLE_RADIUS = 15.5
const CIRCLE_LENGTH = 2 * CIRCLE_RADIUS * 3.14
const CIRCLE_STYLES = {
  fill: 'transparent',
  strokeDasharray: CIRCLE_LENGTH,
  strokeDashoffset: CIRCLE_LENGTH,
  transformOrigin: 'center',
  transform: 'rotate(-180deg)',
  animation: 'circle-animation 3s ease-in-out infinite',
}
const CIRCLE_ANIMATION_CSS = `
@keyframes circle-animation {
  0% {
    stroke-dashoffset: ${CIRCLE_LENGTH};
  }
  100% {
    stroke-dashoffset: 0;
  }
}`

export default function Notification({
  children,
  id,
  options,
  handleClick,
}: NotificationProps) {
  const notificationClasses =
    options?.type === 'error'
      ? 'border-rose-700 text-rose-900 bg-rose-100/30'
      : options?.type === 'info'
      ? 'border-sky-700 text-sky-900 bg-sky-100/30'
      : options?.type === 'success'
      ? 'border-emerald-700 text-emerald-900 bg-emerald-100/30'
      : options?.type === 'warn'
      ? 'border-amber-700 text-amber-900 bg-amber-100/30'
      : 'border-slate-200 text-slate-800 bg-slate-100/30'

  const circleClasses =
    options?.type === 'error'
      ? 'stroke-rose-700'
      : options?.type === 'info'
      ? 'stroke-sky-700'
      : options?.type === 'success'
      ? 'stroke-emerald-700'
      : options?.type === 'warn'
      ? 'stroke-amber-700'
      : 'stroke-slate-200'

  return (
    <div
      id={id}
      className={`max-w-sm py-3 px-5 relative rounded-md border shadow-md backdrop-blur ${notificationClasses}`}
    >
      {children}
      <button
        className="w-8 h-8 absolute -top-4 -right-4 rounded-full bg-zinc-200 flex items-center justify-center"
        type="button"
        onClick={() => handleClick(id)}
      >
        <FaXmark />
        <svg className="w-full h-full absolute top-0 left-0 fill-transparent">
          <circle
            cx="50%"
            cy="50%"
            r={CIRCLE_RADIUS}
            style={CIRCLE_STYLES}
            className={`${circleClasses}`}
          />
        </svg>
        <style>{CIRCLE_ANIMATION_CSS}</style>
      </button>
    </div>
  )
}
