import { act, cleanup, render } from '@testing-library/react'
import React from 'react'
import { afterEach, describe, expect, test, vi } from 'vitest'

import '@testing-library/jest-dom'
import { Button } from '../src/button'

const typeButton = [
  'submit',
  'button',
  'reset',
  'text',
  'image',
  'checkbox',
  'radio',
  'file',
  'hidden',
  'color',
  'date'
]

// Renders a button element
describe('Button', () => {
  afterEach(cleanup)

  test('should render correctly', () => {
    const wrapper = render(<Button>Click me</Button>)

    expect(() => {
      wrapper.unmount()
    }).not.toThrow()
  })

  test('ref should be forwarded', () => {
    const ref = React.createRef<HTMLButtonElement>()

    render(<Button ref={ref}>Click me</Button>)
    expect(ref.current).not.toBeNull()
  })

  test('should trigger onPress function', () => {
    const onPress = vi.fn()
    const { getByRole } = render(<Button onClick={onPress}>Click me</Button>)

    act(() => {
      getByRole('button').click()
    })

    expect(onPress).toHaveBeenCalled()
  })

  test('should ignore events when disaled', () => {
    const onPress = vi.fn()
    const { getByRole } = render(
      <Button disabled onClick={onPress}>
        Click me
      </Button>
    )

    act(() => {
      getByRole('button').click()
    })

    expect(onPress).not.toHaveBeenCalled()
  })

  // test("should renders with start icon", () => {
  //   const wrapper = render(
  //     <Button startContent={<span data-testid="start-content">start icon</span>}>
  //       Click me
  //     </Button>,
  //   );

  //   expect(wrapper.getByTestId("start-content")).toBeInTheDocument();
  // });

  // test("should renders with end icon", () => {
  //   const wrapper = render(
  //     <Button endContent={<span data-testid="end-content">start icon</span>}>
  //       Click me
  //     </Button>,
  //   );

  //   expect(wrapper.getByTestId("end-content")).toBeInTheDocument();
  // });

  // test('should renders with end icon', () => {
  //   const wrapper = render(
  //     <Button>
  //       <span data-testid="end-content">start icon</span>
  //       Click me
  //     </Button>
  //   )

  //   expect(wrapper.getByTestId('end-content')).toBeInTheDocument()
  // })

  test('should renders the proper type attribute', () => {
    const wrapper = render(<Button type="submit">Click me</Button>)

    typeButton.forEach((type) => {
      type === 'submit'
        ? expect(wrapper.getByRole('button')).toHaveAttribute('type', type)
        : expect(wrapper.getByRole('button')).not.toHaveAttribute('type', type)
    })
  })
})
