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
exports.ContactoController = void 0;
const common_1 = require("@nestjs/common");
const contacto_service_1 = require("./contacto.service");
const contacto_dto_1 = require("./dto/contacto-dto/contacto-dto");
let ContactoController = class ContactoController {
    constructor(contactoService) {
        this.contactoService = contactoService;
    }
    async listar() {
        return this.contactoService.listar();
    }
    async buscarPorId(id) {
        try {
            let resultado = await this.contactoService.buscarPorId(id);
            if (resultado)
                return { resultado: resultado };
            throw new Error();
        }
        catch (Error) {
            return { error: 'Error buscando al contacto' };
        }
    }
    async crear(crearContactoDto) {
        return this.contactoService.insertar(crearContactoDto);
    }
    actualizar(id, actualizarContactoDto) {
        return this.contactoService.actualizar(id, actualizarContactoDto);
    }
    borrar(id) {
        return this.contactoService.borrar(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactoController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)('buscar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactoController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contacto_dto_1.ContactoDto]),
    __metadata("design:returntype", Promise)
], ContactoController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, contacto_dto_1.ContactoDto]),
    __metadata("design:returntype", void 0)
], ContactoController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactoController.prototype, "borrar", null);
ContactoController = __decorate([
    (0, common_1.Controller)('contacto'),
    __metadata("design:paramtypes", [contacto_service_1.ContactoService])
], ContactoController);
exports.ContactoController = ContactoController;
//# sourceMappingURL=contacto.controller.js.map