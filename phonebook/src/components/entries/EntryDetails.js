import React from 'react'
import { connect } from 'react-redux'

const EntryDetails = (props) => {
    const id = props.match.params.id
    return (
       <div className="container section entry-details" >
           <div className="card z-depth-0" >
               <div className="card-content" >
                   <span className="card-title">firstname, lastname - {id}</span>
                   <span>phoneNumber</span>
               </div>
           </div>
       </div>
    )
}

export default connect()(EntryDetails)