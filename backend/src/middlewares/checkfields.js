const {request, response} = require("express");
const { validationResult } = require("express-validator");

const checkFields = (req=request, resp=response, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return resp.status(400).json(errors);
    }

    next();
}

module.exports = checkFields;