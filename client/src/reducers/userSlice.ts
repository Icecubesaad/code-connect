import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import auth from "@/api/auth";
interface notification{
    action:string,
    user:string
}
interface favourite{
    username:string,
    text:string,
    images:string[],
    id:string
}
interface posts{
    username:string,
    text:string,
    images:string[],
    id:string
}
interface userState {
    email:string,
    username:string,
    followers:number,
    following:number,
    newNotifications:number,
    notifications:notification[],
    favourite:favourite[],
    userId:string,
    posts:posts[]
}
const intitalState:userState = {
    email:"",
    username:"",
    followers:0,
    following:0,
    newNotifications:0,
    notifications:[],
    favourite:[],
    userId:"",
    posts:[]
}
const userSlice = createSlice({
    name:"user",
    initialState:intitalState,
    reducers:{
        authorize:()=>{
            auth.authorize();
        },
        saveUser:(state,action : PayloadAction<userState>)=>{
            state.email = action.payload.email,
            state.favourite = action.payload.favourite,
            state.followers = action.payload.followers,
            state.following = action.payload.following,
            state.newNotifications = action.payload.newNotifications,
            state.notifications = action.payload.notifications,
            state.userId = action.payload.userId,
            state.username = action.payload.username,
            state.posts = action.payload.posts
        },
        addInFavourite : (state,action:PayloadAction<favourite>)=>{
            const object:favourite = {
                username:action.payload.username,
                text:action.payload.text,
                images:action.payload.images,
                id:action.payload.id
            }
            state.favourite.push(object);
        },
        incrementNotification:(state,action)=>{
            // implement with socket.io
        },
        pushNotification:(state,action)=>{
            // imlpement with socket.io
        },
        incrementFollowers:(state,action)=>{
            // implement with socket.io
        },
        incrementFollowings:(state)=>{
            state.following+=1;
        },
        removeFromFavourite:(state,action)=>{
            const newFavorite:favourite[] = state.favourite.filter(e=>e.id!==action.payload.favourite);
            state.favourite = newFavorite;
        },
        resetNotifications:(state)=>{
            state.newNotifications = 0;
        },
    }
})
export const{
    authorize,
    saveUser,
    incrementFollowers,
    pushNotification,
    incrementFollowings,
    resetNotifications,
    removeFromFavourite,
    addInFavourite,
    incrementNotification
} = userSlice.actions
export default userSlice.reducer    