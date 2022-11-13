const getClient = require("./get.controller");
const putClient = require("./put.controller");
const getAllClients = require("./getall.controller");
const createClient = require("./create.controller");
const deleteClient = require("./delete.controller");

module.exports = {
    getClient,
    putClient,
    getAllClients,
    createClient,
    deleteClient,
};