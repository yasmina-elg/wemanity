import React from 'react'
import { connect } from 'react-redux'

const EntryDetails = (props) => {
    const id = props.match.params.id
    const { entry } = props

    return (
        (entry &&
        <div className="container section entry-details" >
            <div className="card z-depth-0" >
                <div className="card-content" >
                    <span className="card-title">{entry.firstname}, {entry.lastname}</span>
                    <span>{entry.phoneNumber}</span>
                </div>
            </div>
        </div>) || 
        <div className="container center" ><p>Loading...</p></div>
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