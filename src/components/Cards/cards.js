import React from 'react'
import { Col } from 'react-bootstrap'
import useCharacters from '../../hooks/useCharacters';

const Cards = () => {
  const { results } = useCharacters();

  console.log('testewwwwww', results);
  return (

        <Col lg={4}>
          <div>Cards</div>
        </Col>


  )
}

export default Cards