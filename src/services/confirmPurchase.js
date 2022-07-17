import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL"

export const confirmPurchase = (body) => { 
    axios
    .post(`${BASE_URL}/purchases`, body)
    .then( () => {
        alert(`produto comprado com sucesso!`)
    })
    .catch( (err) => {
        alert(err.message)
    })
}