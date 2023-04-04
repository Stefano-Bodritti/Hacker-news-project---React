import React from 'react'

import { useGlobalContext } from './context'
import SearchForm from './SearchForm'
import Buttons from './Buttons'

const Stories = () => {
  const {isLoading} = useGlobalContext();

  if (isLoading) {
    return <div className='loading'></div>
  }

  return <h2>
    stories
  </h2>
}

export default Stories
