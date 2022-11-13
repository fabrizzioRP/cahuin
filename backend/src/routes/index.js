const route1 = require("./cliente.routes");
const route2 = require("./proveedor.routes");
const route3 = require("./auth.routes");

module.exports = {
    clienteRouter : route1,
    proveedorRouter: route2,
    authRouter: route3,
}