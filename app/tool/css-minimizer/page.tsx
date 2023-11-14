import MinifyCSSTool from '@/app/components/MinifyCSSTool'

export const metadata = {
  title: 'CSS minimizer | Tools',
}

export default function CSSMinimizer() {
  return (
    <>
      <h1 className="text-4xl text-center leading-10">CSS minimizer tool!</h1>
      <MinifyCSSTool />
    </>
  )
}
