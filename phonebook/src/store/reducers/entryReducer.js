const initState = {
    entries: []
}

const entryReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_ENTRY':
            console.log('entry created ', action.entry)
            return state
        case 'CREATE_ENTRY_ERROR':
            console.log('error while creating entry', action.e)
            return state
        case 'GET_ALL_ENTRIES':
            console.log('All entries ', action.entries)
            return {
                entries: action.entries.data
            }
        case 'GET_ALL_ENTRIES_ERROR':
            console.log('error while fetching entries', action.e)
            return state
        case 'UPDATE_ENTRY':
            console.log('entry updated ', action.entry)
            return state
        case 'UPDATE_ENTRY_ERROR':
            console.log('error while updating entry', action.e)
            return state
        default:
            return state
    }
}

export default entryReducer