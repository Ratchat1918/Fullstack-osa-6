import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
const AnecdoteList=()=>{
    let anecdotes = useSelector(state => {
      if(state.filter===''){
        return state.anecdotes
      }
      return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    })
    anecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
    const dispatch = useDispatch()
    const vote = (id) => {
        dispatch(voteFor(id))
        console.log('vote', id)
        console.log(anecdotes)
    }
    return(
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                    </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
        </div>
    )
}
export default AnecdoteList