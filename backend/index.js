const cors = require("cors");
const http = require("http");
const express = require("express");
const cookieSession = require("cookie-session");
// const https = require("https");
//
const gEnv = require("./src/env/global-config");
const {
  clienteRouter,
  proveedorRouter,
  authRouter,
} = require("./src/routes/index");

const app = express();
const port = gEnv.port;
const initialPath = "/api";

// MIDDLEWARES
app.set("trust proxy", 1);
app.use(cors({ origin: ["http://localhost:8080"], credentials: true }));
app.use(express.json());
app.use(
  cookieSession({
    // name: "cahuinsession",
    // keys: [ gEnv.secretKey ],
    signed: false,
    secure: false,
  })
);

// ROUTES
app.use(initialPath, clienteRouter);
app.use(initialPath, proveedorRouter);
app.use(initialPath, authRouter);

// PAGE NOT FOUND
app.all("*", (req, resp) => {
  resp.json({ error: "Page Not Found" });
});

// DECLARE AND START SERVER
const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(port, (err) => {
  if (err) {
    console.log("Error al iniciar el servidor");
    throw new Error(err);
  }

  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// httpsServer.listen(443, (err) => {
//     if(err){
//         console.log("Error al iniciar el servidor");
//         throw new Error(err);
//     }

//     console.log(`Servidor corriendo`);
// });
