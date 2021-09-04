import { useState } from 'react'
import { drawMoney } from './services/drawMoney'

function App() {
  const [value, setValue] = useState(0)
  const [bankNotes, setBankNotes] = useState([0])

  return (
    <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="flex">
          <form className="flex-auto p-6" onSubmit={(event) => {
            setBankNotes(drawMoney({ value }))

            event.preventDefault()
          }}>
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-xl py-2 mr-2 font-semibold">
                Valor do saque:
              </h1>
              <div className="flex-auto">
                <input type="number" value={value} onChange={({ target: { value } }) => setValue(value)} className="form-input px-4 py-3 rounded-full" />
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6">
              <div className="text-xl font-semibold text-gray-500" id="banknotes">
                {bankNotes.map((bankNote) => `$${bankNote}`).join(', ')}
              </div>
            </div>
            <div className="flex space-x-3 mb-4 text-sm font-medium">
              <div className="flex-auto flex space-x-3">
                <button
                  className="w-1/2 w-9 h-9 flex items-center justify-center rounded-md bg-black text-white"
                  type="submit"
                >
                  Sacar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
