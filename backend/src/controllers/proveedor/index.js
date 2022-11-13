const getAllProveedores = require("./getall.controller");
const getProveedor = require("./get.controller");
const createProveedor = require("./create.controller");
const deleteProveedor = require("./delete.contoller");
const putProveedor = require("./put.controller");

module.exports = {
    getAllProveedores,
    getProveedor,
    createProveedor,
    deleteProveedor,
    putProveedor
}