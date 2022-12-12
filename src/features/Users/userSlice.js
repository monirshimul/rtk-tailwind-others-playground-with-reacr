import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    users:[],
    error:""
}

// create async thunk for api requests

const fetchUsers = createAsyncThunk("fetchingUsers",async (state)=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    const users = response.data
    return users;
})

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending, (state, action)=>{
            state.loading = true;
            state.error = ""
        })
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading = false;
            state.error = "";
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
            state.users = []
        })
    }
})
export const allUsers = (state) => state.user.users;
// export const {} = usersSlice.actions
export default usersSlice.reducer
export const fetchJsonUser = fetchUsers;