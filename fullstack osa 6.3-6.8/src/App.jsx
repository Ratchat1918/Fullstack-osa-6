import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
const App = () => {
  return (
    <div>
      <AnecdoteList></AnecdoteList>
      <AnecdoteForm></AnecdoteForm><br></br>
      <Notification />
    </div>
  )
}

export default App