const { Router } = require("express");
//
const { putClient,
    createClient,
    deleteClient,
    getAllClients,
    getClient
} = require("../controllers/clients/index");

const route = Router();

const endpoint = {
    default: "/cliente",
    defaultId: "/cliente/:id",
}

// TODO: add middlewares
route.get(endpoint.default, getAllClients);

route.get(endpoint.defaultId, getClient);

route.post(endpoint.default, createClient);

route.put(endpoint.defaultId, putClient);

route.delete(endpoint.defaultId, deleteClient);

module.exports = route;