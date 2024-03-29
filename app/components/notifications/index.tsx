'use client'
import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Notification from './NotificationItem'

type Notification = {
  id: string
  text: string
  options?: {
    type?: string // default (undefined), error, info, success
  }
}

const messagesTest = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur',
    options: { type: 'regular' },
  },
  {
    text: '⛔️ Voluptas repellat totam rem obcaecati placeat vel ab maxime perferendis.',
    options: { type: 'error' },
  },
  {
    text: '🔔 Lorem ipsum dolor sit amet',
    options: { type: 'info' },
  },
  {
    text: '✅ Hic quod, aliquam dolorem assumenda delectus..! Vitae!',
    options: { type: 'success' },
  },
  {
    text: '⚠️ Nam magni accusantium quam asperiores ipsam soluta fuga earum. A.',
    options: { type: 'warn' },
  },
]

export default function NotificationsContainer() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    if (notifications.length > 0) {
      const lastNotificationId = notifications[0].id
      const timer = setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== lastNotificationId))
      }, 3000)

      return () => window.clearTimeout(timer)
    }
  }, [notifications])

  const closeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const showNotification = (id: number) => {
    const newNotification: Notification = {
      ...messagesTest[id],
      id: uuid(),
    }

    setNotifications(prev => [...prev, newNotification])
  }

  return (
    <div className="w-full h-full flex justify-between sm:justify-center relative">
      <div className="basis-full sm:basis-1/2">
        {/* For test purpose only */}
        <div className="flex flex-col gap-4 my-8 px-4">
          <button
            onClick={() => showNotification(0)}
            className="py-2 px-4 rounded border border-sky-600 shadow-md bg-sky-900"
          >
            Add regular alert
          </button>
          <button
            onClick={() => showNotification(1)}
            className="py-2 px-4 rounded border border-sky-600 shadow-md bg-sky-900"
          >
            Add error alert ⛔️
          </button>
          <button
            onClick={() => showNotification(2)}
            className="py-2 px-4 rounded border border-sky-600 shadow-md bg-sky-900"
          >
            Add info alert 🔔
          </button>
          <button
            onClick={() => showNotification(3)}
            className="py-2 px-4 rounded border border-sky-600 shadow-md bg-sky-900"
          >
            Add success alert 👍
          </button>
          <button
            onClick={() => showNotification(4)}
            className="py-2 px-4 rounded border border-sky-600 shadow-md bg-sky-900"
          >
            Add warning alert ⚠️
          </button>
        </div>
      </div>
      <div className="fixed max-h-screen overflow-y-auto bottom-0 right-0 max-w-sm">
        <div className="flex flex-col-reverse gap-8 p-8 items-end">
          {/* Notification item */}
          {notifications.length > 0 &&
            notifications.map(({ id, text, options }) => (
              <Notification
                key={id}
                id={id}
                options={options}
                handleClick={closeNotification}
              >
                {text}
              </Notification>
            ))}
        </div>
      </div>
    </div>
  )
}
