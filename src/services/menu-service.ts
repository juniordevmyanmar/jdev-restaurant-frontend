import axios from "axios";
const baseUrl = `http://localhost:5000/api/menus`;

const getMenus = (limit:number,offset:number) => {
    return axios.get(`${baseUrl}?limit=${limit}&offset=${offset}`)
}

export default { getMenus }