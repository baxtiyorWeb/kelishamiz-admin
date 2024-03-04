import axios from "axios"
import {IPayment} from "@@/services/interface/payment.interface";

const BASE_URL = "https://0ca741c141a39eb7.mokky.dev"
const axiosInstanse = axios.create({baseURL:BASE_URL})

export const getPayments = async () => {
    return (await axiosInstanse.get<IPayment[]>("payment")).data.map(payment => payment)
}

