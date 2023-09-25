// const express = require("express");
// const moment = require('moment')
// const { Op } = require('sequelize')
const creating = require("../../sequelize/models");
const table = creating.projectallocation;

const create = async (req, res) => {
  try {
    res.send("from");
  } catch (error) {
    res.status(400).send({ message: "duplicate" });
  }
};

const getprojectdetails = async (req, res) => {
  try {
    const { email } = req.params;
    const displaydata = await table.findAll({
      where: { email: email },
    });
    res.send(displaydata);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create, getprojectdetails };
