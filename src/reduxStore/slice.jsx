import {createSlice} from "@reduxjs/toolkit"

const contactSlice = createSlice({
    name: "Contacts",
    initialState:[],
    reducers:{
        addContact(state,action){
            const new_id = state.length
            const {firstName, lastName, status} = action.payload 
            state.push ({id: new_id, firstName, lastName, status}) 
        },
        editContact(state,action){
            const editedContact = action.payload
            const indexToEdit = state.findIndex((contact) => contact.id === editedContact.id)
            if (indexToEdit !==-1){
                state[indexToEdit] = editedContact;
            }
        },
        deleteContact(state,action){
            const {id} = action.payload;
            return state.filter((contact, index) => index !== id)
        }
    }
});

export const {addContact, editContact, deleteContact} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;


