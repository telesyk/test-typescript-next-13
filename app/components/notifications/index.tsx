'use client'
import { useState } from 'react'
// import { FaXmark } from 'react-icons/fa6'
import NotificationItem from './NotificationItem'

const messagesTest = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur',
    options: { type: 'regular' },
  },
  {
    text: 'Voluptas repellat totam rem obcaecati placeat vel ab maxime perferendis.',
    options: { type: 'error' },
  },
  {
    text: 'Lorem ipsum dolor sit amet',
    options: { type: 'info' },
  },
  {
    text: 'Hic quod, aliquam dolorem assumenda delectus..! Vitae!',
    options: { type: 'success' },
  },
  {
    text: 'Nam magni accusantium quam asperiores ipsam soluta fuga earum. A.',
    options: { type: 'warn' },
  },
]

const NotificationsContainer = () => {
  // const [notifications, setNotifications] = useState({})
  const [notification, setNotification] = useState({
    isVisible: false,
    text: '',
    options: {},
  })

  const closeNotification = () => {
    // setNotifications(prev => prev - 1)
    setNotification(prev => ({
      ...prev,
      isVisible: false,
      text: '',
    }))
  }

  const showNotification = (message: any) => {
    setNotification(prev => ({
      ...prev,
      isVisible: message.text.length > 0,
      ...message,
    }))
  }

  return (
    <div className="w-full h-full flex flex-nowrap lg:flex-wrap justify-between relative">
      <div className="basis-full sm:basis-1/2">
        {/* For test purpose only */}
        <div className="flex flex-col gap-4 my-8 px-4">
          <button
            onClick={() => showNotification(messagesTest[0])}
            className="py-2 px-4 rounded border border-sky-600 shadow-md bg-sky-900"
          >
            Add regular alert
          </button>
          <button
            onClick={() => showNotification(messagesTest[1])}
            className="py-2 px-4 rounded border border-sky-600 shadow-md bg-sky-900"
          >
            Add error alert ⛔️
          </button>
          <button
            onClick={() => showNotification(messagesTest[2])}
            className="py-2 px-4 rounded border border-sky-600 shadow-md bg-sky-900"
          >
            Add info alert 🔔
          </button>
          <button
            onClick={() => showNotification(messagesTest[3])}
            className="py-2 px-4 rounded border border-sky-600 shadow-md bg-sky-900"
          >
            Add success alert 👍
          </button>
          <button
            onClick={() => showNotification(messagesTest[4])}
            className="py-2 px-4 rounded border border-sky-600 shadow-md bg-sky-900"
          >
            Add warning alert ⚠️
          </button>
        </div>
      </div>
      <div className="fixed max-h-screen scroll-auto bottom-0 right-0 max-w-sm">
        <div className="flex flex-col gap-8 p-8 items-end">
          {/* Notification item */}
          {/* {messagesTest.map(({ text, options }) => (
            <NotificationItem
              key={text}
              options={options}
              handleClick={closeNotification}
              children={text}
            />
          ))} */}
          {notification.isVisible && (
            <NotificationItem
              key={notification.text}
              options={notification.options}
              handleClick={closeNotification}
              children={notification.text}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default NotificationsContainer
