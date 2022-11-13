const { Router } = require("express");
//
const {
    getAllProveedores, 
    getProveedor, 
    createProveedor,
    deleteProveedor,
    putProveedor
} = require("../controllers/proveedor/index");

const route = Router();

const endpoint = {
    default: "/proveedor",
    defaultId: "/proveedor/:id",
}

// TODO: add middlewares
route.get(endpoint.default, getAllProveedores);

route.get(endpoint.defaultId, getProveedor);

route.post(endpoint.default, createProveedor);

route.put(endpoint.defaultId, putProveedor);

route.delete(endpoint.defaultId, deleteProveedor)

module.exports = route;