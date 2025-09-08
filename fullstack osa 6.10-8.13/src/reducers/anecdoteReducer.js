import { createSlice, current } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'
const anecdoteSlice=createSlice({
  name :'anecdotes',
  initialState:[],  
  reducers:{
    appendAnecdote(state,action){
      state.push(action.payload)
    },
    setAnecdotes(state,action){
      return action.payload
    },
    setVote(state, action) {
      return state.map(anecdote =>
        anecdote.id !== action.payload.id ? anecdote : action.payload
      )
    }
  },
})

export const { appendAnecdote ,setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
export const voteFor = (id) => {
  return async (dispatch, getState) => {
    const anecdoteToVote = getState().anecdotes.find(a => a.id === id)
    const updatedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
    const returnedAnecdote = await anecdoteService.update(updatedAnecdote)
    dispatch(setVote(returnedAnecdote))
  }
}
export default anecdoteSlice.reducer