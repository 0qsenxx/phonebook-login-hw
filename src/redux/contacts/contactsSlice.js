import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./contactsOperations";

// const contactsInitialState = {
//   contacts: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
// };

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      });
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       return {
  //         ...state,
  //         contacts: [...state.contacts, action.payload],
  //       };
  //     },
  //     prepare({ name, number }) {
  //       return {
  //         payload: {
  //           name,
  //           number,
  //           id: nanoid(),
  //         },
  //       };
  //     },
  //   },
  //   deleteContact: {
  //     reducer(state, action) {
  //       return {
  //         ...state,
  //         contacts: state.contacts.filter(
  //           (contact) => contact.id !== action.payload
  //         ),
  //       };
  //     },
  //     prepare(idContactToDelete) {
  //       return {
  //         payload: idContactToDelete,
  //       };
  //     },
  //   },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
