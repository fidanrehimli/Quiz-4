import React from 'react'
import { Helmet } from 'react-helmet'
import Madewel from './components/Madewel'
import DataSection from './components/DataSection'

const Collection = () => {
  return (
    <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Collection</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Madewel/>
            <DataSection/>
    </div>
  )
}

export default Collection