import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// axios.defaults.baseURL = "https://67c1fbec61d8935867e4f88a.mockapi.io";
const contactsAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
  headers: {
    Authorization: `Bearer ${Cookies.get("phoneBookToken")}`,
  },
});

const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkApi) => {
    try {
      const response = await contactsAPI.get("/contacts");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkApi) => {
    try {
      const response = await contactsAPI.post("/contacts", {
        id: nanoid(),
        name,
        number,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const deleteContact = createAsyncThunk(
  "/contacts/deleteContact",
  async (idContactToDelete, thunkApi) => {
    try {
      const response = await contactsAPI.delete(
        `/contacts/${idContactToDelete}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export { getContacts, addContact, deleteContact };
