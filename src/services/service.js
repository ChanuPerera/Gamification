import axios from "axios";
import { env_data } from "../env_data/env_data";
import { toast } from "react-toastify";
// import videoFile from './Assets/video.mp4';


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

//ml api 

export async function sendMessage(data) {
    try {
        const formData = new FormData();
        formData.append("user", data); 

        const response = await axios.post(`${env_data.ml_base_url}programming_assistant`, formData);
        if (response) {
            return response;
        }

    } catch (error) {
        
        return toast.error(error.message)
    }

}

export async function answerValidation(data) {
    try {
        

        const response = await axios.post(`${env_data.ml_base_url}introduction_score`, data);
        if (response) {
            return response;
        }

    } catch (error) {
        
        return toast.error(error.message)
    }

}

// export async function videoValidation() {
//     try {
//         const formData = new FormData();
//         formData.append('video', videoFile);
//         const response = await axios.post(`${env_data.ml_base_url}programming_assistant`, formData);
//         if (response) {
//             return response;
//         }

//     } catch (error) {
        
//         return toast.error(error.message)
//     }

// }

//leaderBoard
export async function saveMarks(data) {
    try {
        

        const response = await axios.post(`${env_data.base_url}leaderBoard`, data);
        if (response) {
            return response;
        }

    } catch (error) {
        
        return toast.error(error.message)
    }

}

//quiz

export async function getAllQuizs() {
    try {

        const response = await axios.get(`${env_data.base_url}api/quiz/findAll`);
        return response.data;
    } catch (error) {
        return error
    }

}


// Courses

export async function getAllCourses() {
    try {

        const response = await axios.get(`${env_data.base_url}api/courses/`);
        return response.data;
    } catch (error) {
        return error
    }

}

export async function updateCourses(id, update) {
    try {
      const response = await axios.put(`${env_data.base_url}api/courses/${id}`, update);
      return response.data;
    } catch (error) {
      return error;
    }
  }



//  Assignment 
export async function getAllAssignmentQuizs() {
    try {
        const response = await axios.get(`${env_data.base_url}api/assignementQuizes`);
        return response.data;
    } catch (error) {
        return error
    }
}


// Point Level Rewards
export async function getLPR(id) {
    try {
        const response = await axios.get(`${env_data.base_url}api/userLPR/${id}`);
        return response.data;
    } catch (error) {
        return error
    }
}


export async function updateLPR(id,points) {
    try {
        const response = await axios.put(`${env_data.base_url}api/userLPR/${id}`,{points});
        return response.data;
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