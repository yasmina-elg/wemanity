import React from 'react'
import { connect } from 'react-redux'

const EntryDetails = (props) => {
    const id = props.match.params.id
    const {entry} = props

    return (
       <div className="container section entry-details" >
           <div className="card z-depth-0" >
               <div className="card-content" >
                   <span className="card-title">{entry.firstname}, {entry.lastname} - {id}</span>
                   <span>{entry.phoneNumber}</span>
               </div>
           </div>
       </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const entries = state.entry.entries
    const entry = entries ? entries.find(entry => entry.id === id) : null
    return {
        entry: entry
    }
}

export default connect(mapStateToProps)(EntryDetails)