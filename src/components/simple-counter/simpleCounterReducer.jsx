const initialState = {
  count: 0
}

const simpleCounterReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1
      }
    case 'SUBTRACT':
      return {
        ...state,
        count: state.count - 1
    }
    case 'UPDATE':
      return {
        ...state,
        count: action.payload
    }
    default:
      return initialState
  }
}

export default simpleCounterReducer