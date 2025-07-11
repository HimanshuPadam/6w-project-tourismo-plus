const businessModel = require("./businessModel")

const registerbusiness = (req,res) => {
    let errMsgs = []
    if(!req.body.name)
        errMsgs.push("name is request")
    if(!req.body.name)
        errMsgs.push("name is request")
    if(!req.body.name)
        errMsgs.push("name is request")
    if(!req.body.name)
        errMsgs.push("name is request")
    if(!req.body.name)
        errMsgs.push("name is request")

}

const getAll = (req,res) => {}

const update = (req,res) => {}

const hardDelete = (req,res) => {}

const softDelete = (req,res) => {}

module.exports = {add,getAll,update,hardDelete,softDelete}