import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  describe('when the user submits some value to draw money', () => {
    it('renders the least amount of banknotes for the entered value', () => {
      render(<App />)

      const input = screen.getByRole('spinbutton')
      const button = screen.getByRole('button')

      fireEvent.change(input, { target: { value: 163 } })
      fireEvent.click(button)


      expect(screen.getByText('$100, $50, $10, $1, $1, $1')).toBeInTheDocument()
    })
  })
})