import React from 'react'
import Header from './Header'

const Viewbook = () => {
    var booklist={"title":"wings of fire","price":"200","author":"APJ"}
  return (
    <div>
        <Header/>
        <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">{booklist.title}</label>
                <label for="" className="form-label">{booklist.price}</label>
                
            </div>

            </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Viewbook