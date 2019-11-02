import React from 'react'
import EntrySummary from './EntrySummary'
import { Link } from 'react-router-dom'

const EntryList = ({ entries }) => {
  return (
    <div className="entry-list section center">
      {entries && entries.map(entry => {
        return (
          <Link to={'/entries/'+ entry.id}>
            <EntrySummary entry={entry} key={entry.id} />
          </Link>
        )
      })}

    </div>
  )
}

export default EntryList