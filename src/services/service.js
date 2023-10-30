import axios from "axios";
import { env_data } from "../env_data/env_data";


//auth
export async function signUp(data) {
    try {
        const response = await axios.post(`${env_data.base_url}api/auth/signup`, data);
        if (response) {
            return response.data;
        }

    } catch (error) {

        return error
    }

}

export async function signIn(data) {
    try {
        const response = await axios.post(`${env_data.base_url}api/auth/signin`, data);
        if (response) {
            return response.data;
        }

    } catch (error) {

        return error
    }

}

//assessment
export async function assessmentCreate(data) {
    try {
        const response = await axios.post(`${env_data.base_url}api/assessment`, data);
        if (response) {
            return response.data;
        }

    } catch (error) {

        return error
    }

}

export async function assessmentFindAll() {
    try {

        const response = await axios.get(`${env_data.base_url}api/assessment/findAll`);
        return response.data;
    } catch (error) {
        return error
    }

}

//chat 

export async function sendMessage(data) {
    try {
        const formData = new FormData();
        formData.append("user", data); 

        const response = await axios.post(`${env_data.ml_base_url}programming_assistant`, formData);
        if (response) {
            return response;
        }

    } catch (error) {

        return error
    }

}

// leaderBoard

// export async function createReport(data) {
//     try {
//         const response = await axios.post(`api/quiz`, data);
//         if (response) {
//             return response.data;
//         }

//     } catch (error) {
//         return error
//     }

// }

// export async function assessmentFindAll() {
//     try {

//         const response = await axios.get(`${env_data.base_url}api/assessment/findAll`);
//         return response.data;
//     } catch (error) {
//         return error
//     }

// }