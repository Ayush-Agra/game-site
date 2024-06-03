import axios from 'axios';

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: 'dd98320e0752444e9fa4c516254744fa'
    }
})