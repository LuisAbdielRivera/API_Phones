import { compile } from 'ejs'
import phoneDAO from '../dao/phones.dao.js'

export const getAll = (req, res) => {
    phoneDAO.getAll()
    .then(products=>{
        if(products != null){
            res.render('../src/views/index', {products})
        }else{
            res.json({ status: "Servidor no disponible" })
        }})
    .catch(err=>console.log(err))
}

export const getOne = (req, res) => {
    phoneDAO.getOne(req.params.bc)
    .then(product => {
        if(product != null)
            res.render('../src/views/edit', {product})
        else
            res.json({status:"Product not found"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const insertPhone = (req, res) => {
    phoneDAO.insertPhone (req.body)
    .then(result => {
        if(result)
            res.redirect('/')
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const updatePhone = (req, res) => {
    phoneDAO.updatePhone (req.params.bc, req.body)
    .then(result => {
        if(result)
            res.redirect('/')
        else
            res.json({status: "Server unaviable"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const deletePhone = (req, res) => {
    phoneDAO.deletePhone (req.params.bc)
    .then(result => {
        if(result)
            res.redirect('/')
        else
            res.json({status: "Server unaviable"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}
