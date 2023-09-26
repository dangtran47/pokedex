import { useState } from 'react'
import './App.css'
import { Switch } from '@headlessui/react'

function App() {
  const [checked, setChecked] = useState(false)

  return (
    <Switch
      checked={checked}
      onChange={setChecked}
      className={`${
        checked ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
      data-testid="switch"
    >
      <span
        className={`${
          checked ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

export default App
