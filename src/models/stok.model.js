"user strict";
var dbConn = require("../../config/db.config");

var Mahasiswa = function (mhs) {
  this.id = mhs.id;
  this.name = mhs.name;
  this.stb = mhs.stb;
  this.major = mhs.major;
  this.gender = mhs.gender;
  this.address = mhs.address;
};

Mahasiswa.create = function (newMhs, result) {
  dbConn.query("INSERT INTO mahasiswa set ?", newMhs, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Mahasiswa.findById = function (id, result) {
  dbConn.query(
    "Select * from mahasiswa where id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Mahasiswa.findAll = function (result) {
  dbConn.query("SELECT * FROM mahasiswa", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("users : ", res);
      result(null, res);
    }
  });
};

Mahasiswa.update = function (id, user, result) {
  dbConn.query(
    "UPDATE mahasiswa SET golongan=?,stock=?,pmi_id=? WHERE id = ?",
    [
      user.golongan,
      user.stock,
      user.pmi_id,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Mahasiswa.delete = function (id, result) {
  dbConn.query("DELETE FROM mahasiswa WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Mahasiswa;