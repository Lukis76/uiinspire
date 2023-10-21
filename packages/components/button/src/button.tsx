import { forwardRef, type ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, ...otherProps } = props

  const Comp = 'button'

  return (
    <Comp ref={ref} className={className} {...otherProps}>
      {children}
    </Comp>
  )
})

Button.displayName = 'prettyUI.Button'

export { Button }
