import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
const App = () => {
  return (
    <div>
      <AnecdoteList></AnecdoteList><br></br>
      <Filter></Filter><br></br>
      <AnecdoteForm></AnecdoteForm><br></br>
      <Notification />
    </div>
  )
}

export default App