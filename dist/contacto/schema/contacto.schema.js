"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactoSchema = void 0;
const mongoose = require("mongoose");
exports.ContactoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 3
    },
    edad: {
        type: Number,
        required: true,
        min: 0,
        max: 120
    },
    telefono: {
        type: String,
        required: true,
        minlength: 9
    }
});
//# sourceMappingURL=contacto.schema.js.map