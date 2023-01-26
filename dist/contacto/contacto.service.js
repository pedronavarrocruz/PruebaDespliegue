"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ContactoService = class ContactoService {
    constructor(contactoModel) {
        this.contactoModel = contactoModel;
    }
    async listar() {
        return await this.contactoModel.find().exec();
    }
    async buscarPorId(id) {
        return await this.contactoModel.findById(id).exec();
    }
    async insertar(crearContactoDto) {
        const nuevoContacto = new this.contactoModel(crearContactoDto);
        return await nuevoContacto.save();
    }
    async borrar(id) {
        return await this.contactoModel.findByIdAndRemove(id).exec();
    }
    async actualizar(id, actualizarTareaDto) {
        return await this.contactoModel.findByIdAndUpdate(id, { $set: {
                nombre: actualizarTareaDto.nombre,
                edad: actualizarTareaDto.edad,
                telefono: actualizarTareaDto.telefono
            } }, { new: true, runValidators: true }).exec();
    }
};
ContactoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Contacto')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ContactoService);
exports.ContactoService = ContactoService;
//# sourceMappingURL=contacto.service.js.map