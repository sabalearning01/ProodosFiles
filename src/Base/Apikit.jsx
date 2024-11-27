import axios from "axios";

let Apikit = axios.create({
    baseURL:'https://proodoosfiles.onrender.com/',
    
    headers:{
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    },

});

export default Apikit;