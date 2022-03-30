import React from 'react'
import Head from './Head'
import Filter from './Filter'
import Content from './Content'

function Search() {
  return (
    <div className='bg-light'>

      <Head/>
      <div className='container d-flex'>
          <div className='col-3 p-0'>
            <Filter/>
          </div>
          <div className='col-9 p-0'>
            <Content/>
          </div>
      </div>

    </div>
  )
}

export default Search