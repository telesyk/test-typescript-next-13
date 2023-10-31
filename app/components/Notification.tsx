'use client'

import { FaXmark } from 'react-icons/fa6'

type NotificationProps = {
  text: string
  handleClick: () => void
}

export default function Notification({ text, handleClick }: NotificationProps) {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full py-12 flex items-start justify-center">
      <div className="rounded p-4 bg-teal-900 text-teal-100 border border-teal-700 shadow-xl relative">
        <span>{text}</span>
        <button
          onClick={handleClick}
          className="rounded-full border border-teal-900 w-6 h-6 bg-slate-200/80 text-teal-900 flex items-center justify-center absolute -top-3 -right-3"
        >
          <FaXmark />
        </button>
      </div>
    </div>
  )
}
