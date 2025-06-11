import express from "express";
import eventos from "./eventosRoutes.js"; // Caminho relativo corrigido
import locais from "./locaisRoutes.js"; // Caminho relativo corrigido
import categorias from "./categoriasRoutes.js"; // Caminho relativo corrigido

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: "Eventos API", version: "1.0.0" });
    })

    app.use(
        express.json(),
        eventos,
        locais,
        categorias
    );
}

export default routes;