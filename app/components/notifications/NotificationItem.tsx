import { FaXmark } from 'react-icons/fa6'

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
  const classes =
    options?.type === 'error'
      ? 'text-rose-900 border-rose-700 bg-rose-100/40'
      : options?.type === 'info'
      ? 'text-sky-800 border-sky-700 bg-sky-100/40'
      : options?.type === 'success'
      ? 'text-emerald-800 border-emerald-700 bg-emerald-100/40'
      : options?.type === 'warn'
      ? 'text-amber-800 border-amber-700 bg-amber-100/40'
      : 'text-slate-800 border-slate-200'

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
      </button>
    </div>
  )
}
