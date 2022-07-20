
var dbConn = require("../../config/db.config");

var Mahasiswa = function (mhs) {
  this.id_mhs = mhs.id_mhs;
  this.name_mhs = mhs.name_mhs;
  this.stb_mhs = mhs.stb_mhs;
  this.major_mhs = mhs.major_mhs;
  this.gender = mhs.gender;
  this.address = mhs.address;
};

Mahasiswa.create = function (newMhs, result) {
  dbConn.query("INSERT INTO table_mahasiswa set ?", newMhs, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Mahasiswa.findById = function (id, result) {
  dbConn.query(
    "Select * from table_mahasiswa where id_mhs = ? ",
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
  dbConn.query("SELECT * FROM table_mahasiswa", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("mhs : ", res);
      result(null, res);
    }
  });
};

Mahasiswa.update = function (id, mhs, result) {
  dbConn.query(
    // "UPDATE table_mahasiswa SET golongan=?,stock=?,pmi_id=? WHERE id = ?",
    "UPDATE table_mahasiswa SET name_mhs = ?, stb_mhs = ?, major_mhs = ?, gender = ?, address = ? WHERE id_mhs =?",
      [
      mhs.name_mhs,
      mhs.stb_mhs,
      mhs.major_mhs,
      mhs.gender,
      mhs.address,
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
  dbConn.query("DELETE FROM table_mahasiswa WHERE id_mhs = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Mahasiswa;