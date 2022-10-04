const cors = require('cors');
const express = require('express');

class Server{
    
    constructor(){
        this.app = express();
        this.port= process.env.PORT;
        this.userPath ='/api/user';
        this.middlewares();
        this.routes();

    }

    middlewares(){
        this.app.use(cors());
        this.app.use( express.json() );
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.userPath,require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => console.log(`Example app listening on port ${this.port}!`))
    }
}


module.exports = Server;