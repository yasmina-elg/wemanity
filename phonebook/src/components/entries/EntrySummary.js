import React from 'react'
 
const EntrySummary = ({entry}) => {
    return (
        <div className="card z-depth-0 entry-summary" >
            <div className="card-content grey-text text-darken-3" >
                <span className="card-title" > {entry.firstname}, {entry.lastname}</span>
                <span>{entry.phoneNumber}</span>
            </div>
        </div>
    )
}

export default EntrySummary