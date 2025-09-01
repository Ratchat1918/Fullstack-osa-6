/*import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = (type) => {
    store.dispatch({
      type: type
    })
  }

  return (
    <div>
      <button onClick={()=>good("GOOD")}>good</button> 
      <button onClick={()=>good("OK")}>ok</button> 
      <button onClick={()=>good("BAD")}>bad</button>
      <button onClick={()=>good("ZERO")}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)*/

import Notes from "./components/Notes"
import NewNote from "./components/NewNote"

const App = () => {
  return(
    <div>
      <NewNote />
      <Notes />
    </div>
  )
}

export default App