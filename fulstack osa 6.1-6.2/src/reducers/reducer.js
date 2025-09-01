const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  var newState=state
  switch (action.type) {
    case 'GOOD':
      let newGood=state.good+1
      newState={
        good:newGood,
        ok:state.ok,
        bad:state.bad
      }
      return newState
    case 'OK':
      let newOk=state.good+1
      newState={
        good:state.good,
        ok:newOk,
        bad:state.bad
      }
      return newState
    case 'BAD':
      let newBad=state.bad+1
      newState={
        good:state.good,
        ok:state.ok,
        bad:newBad
      }
      return newState
    case 'ZERO':
      newState={
        good:0,
        ok:0,
        bad:0
      }
      return newState
    default: return newState
  }
  
}
export default counterReducer