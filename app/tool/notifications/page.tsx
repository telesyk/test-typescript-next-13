import { FaRegMessage } from 'react-icons/fa6'
import NotificationsContainer from '@/app/components/notifications'

export const metadata = {
  title: 'Notifications | Tools',
}

export default function Notifications() {
  return (
    <>
      <h1 className="text-4xl leading-10 flex gap-2 items-center justify-center">
        <span>Notifications tool</span>
        <FaRegMessage />
      </h1>
      <div>
        <NotificationsContainer />
      </div>
    </>
  )
}
