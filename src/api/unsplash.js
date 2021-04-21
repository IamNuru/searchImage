import axios from 'axios'

 export default axios.create({
    baseUrl:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 79IzEnOZ7J9U6Fw6psMxcBUWHxUguIjlv3E-kuP2LEY'
    }
    
})