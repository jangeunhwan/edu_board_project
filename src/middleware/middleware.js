import mysql from "mysql2";

export const dbConnectionHandler = (req, res, next) => {
    console.log(req);

    const connection = mysql.createConnection({
        host: "127.0.0.1",
        user:"root",
        password:"fourleaf0309",
        database:"edu"
    });

    console.log(connection);

    connection.on("error", (error) => {
        console.log(error);
        console.log("DB connection failed! re try connect!")

        setTimeout(() => {
            dbConnectionHandler();
        }, 3000);
    });

    req.body.connection= connection;

    next();
};