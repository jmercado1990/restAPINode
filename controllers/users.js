const { response,request } = require("express");


const getUsers=(req=request,res=response)=>{
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const putUsers=(req=request, res=response) => {

    const id=req.params.id;
    res.json({
        "msg":'put API controller',
        id
    });
}

const postUsers=(req, res=response) => {
    const {edad} =req.body;

    res.json({
        "msg":'post API controller',
        edad
    });
}

const deleteUsers= (req, res=response) => {
    res.json({
        "msg":'delete API controller'
    });
}

const patchUsers= (req, res=response) => {
    res.json({
        "msg":'patch API controller'
    });
}


module.exports={
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
    patchUsers
}