
import AnecdotesForm from './components/AnecdotesForm'
import AnecdoteList from './components/AnecdoteList'
const App = () => {
  let anecdotes = useSelector(state => state)
  anecdotes = anecdotes.sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteFor(id))
    console.log('vote', id)
    console.log(anecdotes)
  }

  return (
    <div>
      <AnecdotesForm />
      <AnecdoteList/>
    </div>
  )
}

export default App