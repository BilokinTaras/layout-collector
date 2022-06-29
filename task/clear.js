const del = require("del");

const clear = () => {
   return del("./dist");
};

module.exports = clear;