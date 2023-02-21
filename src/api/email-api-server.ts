import axios from "axios";
import { URL_BASE } from "../config/config";
export const config = (token: string) => ({
    headers: { Authorization: `Bearer ${token}` },
});
export const emailApiServer = axios.create({
    baseURL: `${URL_BASE}/api`,
});