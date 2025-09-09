/*import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, createAnecdote, addVote } from './requests'

const App = () => {
  const queryClient = useQueryClient();
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote, 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
  });
  const newVoteMutation = useMutation({
    mutationFn: addVote, 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
  });
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    newAnecdoteMutation.mutate({ content, votes:0 })
  }
  const newVote =(anecdote)=>{
    console.log("Anecdote:",anecdote)
    const newVotes=anecdote.votes++
    newVoteMutation.mutate({...anecdote, votes:newVotes})
  }
  const result = useQuery(
  {
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false
  }
)
  console.log(JSON.parse(JSON.stringify(result)))

  if ( result.isPending ) {
    return <div>anecdote service was not available </div>
  }

  const anecdotes = result.data
  return(
    <div>
      <h2>Notes app</h2>
      {anecdotes.map(anecdote =>
        <li key={anecdote.id}>
          {anecdote.content} Votes: {anecdote.votes}
          <button onClick={()=>{newVote(anecdote)}}>vote</button>
        </li>
      )}
      <form onSubmit={addAnecdote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}
export default App*/
import Display from './components/Display'
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <Display />
      <div>
        <Button type='INC' label='+' />
        <Button type='DEC' label='-' />
        <Button type='ZERO' label='0' />
      </div>
    </div>
  )
}

export default App