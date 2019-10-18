import validate from 'validate.js';

const constraints = {
    nameFuelStation: {
        presence: true,
        length: {
            minimum: 5,
            message: "'%{value}' precisar ter no minimo 6 palavras!",
        }
    }
}

const  validationInput = (value, name) => {
    return validate.single(value,constraints[name]);
}

export default validationInput;