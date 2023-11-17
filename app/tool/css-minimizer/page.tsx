import { FaFileCode } from 'react-icons/fa6'
import MinifyCSSTool from '@/app/components/MinifyCSSTool'

export const metadata = {
  title: 'CSS minimizer | Tools',
}

export default function CSSMinimizer() {
  return (
    <>
      <h1 className="text-4xl leading-10 flex gap-2 items-center justify-center">
        <span>CSS minimizer tool</span>
        <FaFileCode />
      </h1>
      <MinifyCSSTool />
    </>
  )
}
