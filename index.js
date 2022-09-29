// @google-cloud/functions-framework
// El cual esta basado en express.js

exports.helloWorld = (req, res) => {
    let message = req.query.message || req.body.message || 'Hello World!';
    res.status(200).send(message);
};

exports.validateTemperature = async (req, res) => {
    try {
        if (req.body.temp < 100) {
            res.status(200).send("Temperature OK");
        } else {
            res.status(200).send("Too hot");
        }
    } catch (error) {
        //return an error
        console.log("got error: ", error);
        res.status(500).send(error);
    }
};

exports.httpServer = function httpServer(req, res) {
    const path = req.path;
    switch (path) {
        case '/users':
            handleUsers(req, res);
            break;
        default:
            res.status(200).send('Server is working');
    }
};

const handleUsers = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).send('Listing users...');
    } else if (req.method === 'POST') {
        res.status(201).send('Creating User...')
    } else {
        res.status(404);
    }
}