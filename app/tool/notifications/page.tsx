import NotificationsContainer from '@/app/components/notifications'

export const metadata = {
  title: 'Notifications | Tools',
}

export default function Notifications() {
  return (
    <>
      <h1 className="text-4xl text-center leading-10">Notifications tool!</h1>
      <div>
        <NotificationsContainer />
      </div>
    </>
  )
}
