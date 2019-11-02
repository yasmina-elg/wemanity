import axios from "axios"
import { BACKEND_URL } from "../../constant"

export const createEntry = (entry)=>{
    return async (dispatch, getState)=>{
        //async call db
        await axios({
            url: `${BACKEND_URL}entries`,
            data: {...entry},
            method: "post",
        }).catch(e => {
            dispatch({ type: 'CREATE_ENTRY_ERROR', e})
        })
        dispatch({type: 'CREATE_ENTRY', entry})
    }
};
 
export const getAllEntries = ()=>{
    return async (dispatch, getState)=>{
        //async call db
        const entries = await axios({
            url: `${BACKEND_URL}entries/`,
            method: "get",
        }).catch(e => {
            dispatch({type: 'GET_ALL_ENTRIES_ERROR', e})
        })
        console.log(entries)
        dispatch({type: 'GET_ALL_ENTRIES', entries})
    }
};


export const updateEntry = (id, params)=>{
    console.log(params)
    return async (dispatch, getState)=>{
        //async call db
        const entry = await axios({
            url: `${BACKEND_URL}entries/${id}`,
            data: {
                firstname:params.firstname,
                lastname: params.lastname,
                phoneNumber: params.phoneNumber
            },
            method: "patch",
        }).catch(e => {
            dispatch({type: 'UPDATE_ENTRY_ERROR', e})
        })
        console.log(entry)
        dispatch({type: 'UPDATE_ENTRY', entry})
    }
};

