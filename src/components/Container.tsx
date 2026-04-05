import type { ReactNode } from 'react'

type ContainerProps = {
  id?: string
  className?: string
  children: ReactNode
}

function Container({ id, className = '', children }: ContainerProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  )
}

export default Container
