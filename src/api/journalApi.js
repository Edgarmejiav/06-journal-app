


import axios from 'axios'


const journalApi = axios.create({
    baseURL: "https://vue-demos-4a465-default-rtdb.firebaseio.com"
})


export default journalApi