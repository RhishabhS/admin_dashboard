import axios from 'axios';

const URL="http://localhost:5000/api";
const user=localStorage.getItem("persist:root")?JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser: null;
const TOKEN=user?user.accessToken:"";
// const TOKEN="";
export const publicRequest=axios.create({
    baseURL: URL,

});

export const userRequest=axios.create({
    baseURL:URL,
    header: {token: `BEARER ${TOKEN}`}
})
