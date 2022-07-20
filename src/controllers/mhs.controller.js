'use strict';

const Mahasiswa = require('../models/stok.model');

exports.findAll = function(req, res) {
    Mahasiswa.findAll(function(err, user) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', user);
    res.send(user);
  });
};


exports.create = function(req, res) {
    const newMhs = new Mahasiswa(req.body);

   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Mahasiswa.create(newMhs, function(err, mhs) {
            if (err)
            res.send(err);
            res.json({error:false,message:"stok added successfully!",data:mhs});
        });
    }
};


exports.findById = function(req, res) {
    Mahasiswa.findById(req.params.id, function(err, mhs) {
        if (err)
        res.send(err);
        res.json(mhs);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Mahasiswa.update(req.params.id, new Mahasiswa(req.body), function(err, mahasiswa) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'stok successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Mahasiswa.delete( req.params.id, function(err, mahasiswa) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'stok successfully deleted' });
  });
};