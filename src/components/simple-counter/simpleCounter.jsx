import React from 'react'
import simpleCounterReducer from './simpleCounterReducer'
import { Wrapper, InnerContainer, Button, Input, Title } from './styled'

const initialState = {
  count: 0
}

const SimpleCount = () => {
  const [state, dispatch] = React.useReducer(simpleCounterReducer, initialState)

  const handleSubtract = () => { dispatch({ type: 'SUBTRACT' }) }
  const handleAdd = () => { dispatch({ type: 'ADD' }) }
  const handleChange = (event) => { dispatch({ type: 'UPDATE', payload: Number(event.target.value) }) }

  return (
    <Wrapper>
      <Title>Contador Simple - Reducer</Title>
      <InnerContainer>
        <Button onClick={handleSubtract}>Disminuir</Button>
        <Input type="number" onChange={(e) => handleChange(e)} value={state.count} />
        <Button onClick={handleAdd}>Aumentar</Button>
      </InnerContainer>
    </Wrapper>
  )
}

export default SimpleCount