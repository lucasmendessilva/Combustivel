import axios from 'axios';
const url = "https://combustivel-ricardo.herokuapp.com";

export const registerFuelStation = async(entity) => {
    try {
        const response = await axios.post(`${url}/fuelstation`, entity);
        const { data} = response;
        return data;
    } catch (error) {
        return error;
    }
}

export const updateFuelStation = async(id, entity)=> {
    try {
        const response = await axios.put(`${url}/fuelstation/${id}`);
        const {data} = response;
        return data;
    } catch (error) {
        return error;
    }
}

export const deleteFuelStation = async(id) => {
    try {
        const response = await axios.delete(`${url}/fuelstation/${id}`);
        const {data} = response;
        return data;
    } catch (error) {
        return error;
    }
}

export const zipCode = async(cep) => {
    const urlCep = `https://viacep.com.br/ws/${cep}/json/`
    try {
        const response = await axios.get(urlCep);
        const {data} = response;
        return data;
    } catch (error) {
        return error;
    }
}

export const getAllFuelStation = async() => {
    try {
        const response = await axios.get(`${url}/fuelstation`);
        const { data} = response;
        return data;
    } catch (error) {
        return error;
    }
}