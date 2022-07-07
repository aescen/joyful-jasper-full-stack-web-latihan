/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react'
import Counter from '../Counter'

describe('Render Counter Component', () => {
  it('should have \'Counter:\' text', () => {
    /* Arrange */
    const view = render(<Counter />)
    const counterEl = view.getByText(/Counter:/i)

    /* Assert */
    expect(counterEl).toBeInTheDocument()

  })

  it('should have 1 for initial value when set to 1', () => {
    /* Arrange */
    const view = render(<Counter initialCount={1} />)
    const countEl = view.getByTestId('count')

    /* Assert */
    expect(countEl.textContent).toEqual('1')
  })

  it('should increased by one', () => {
    /* Arrange */
    // init views
    const view = render(<Counter />)
    const incBtn = view.getByRole('button', { name: 'Increase' })

    /* Action */
    // get initial value
    const valCountStart = view.getByTestId('count').textContent

    // simulate button click
    fireEvent.click(incBtn)
    // get effect value
    const valCountEnd = view.getByTestId('count').textContent

    /* Assert */
    expect(valCountStart).toEqual('0')
    expect(valCountEnd).toEqual('1')

  })

  it('should decreased by one', () => {
    /* Arrange */
    // init views
    const view = render(<Counter />)
    const decBtn = view.getByRole('button', { name: 'Decrease' })


    /* Action */
    // get initial value
    const valCountStart = view.getByTestId('count').textContent
    // simulate button click
    fireEvent.click(decBtn)
    // get effect value
    const valCountEnd = view.getByTestId('count').textContent

    /* Assert */
    expect(valCountStart).toEqual('0')
    expect(valCountEnd).toEqual('-1')

  })

  it('should reset value from 9 to 0', () => {
    /* Arrange */
    // init views
    const view = render(<Counter initialCount={9} />)
    const resetBtn = view.getByRole('button', { name: 'Reset' })

    /* Action */
    // get initial value
    const valCountStart = view.getByTestId('count').textContent
    // simulate button click
    fireEvent.click(resetBtn)
    // get effect value
    const valCountEnd = view.getByTestId('count').textContent

    /* Assert */
    expect(valCountStart).toEqual('9')
    expect(valCountEnd).toEqual('0')

  })
})
