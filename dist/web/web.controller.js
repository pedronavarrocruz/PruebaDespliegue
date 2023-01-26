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
exports.WebController = void 0;
const common_1 = require("@nestjs/common");
const contacto_service_1 = require("../contacto/contacto.service");
const aUsuarios = [
    { usuario: 'rosa', password: 'rosa', rol: 'admin' },
    { usuario: 'may', password: 'may', rol: 'normal' }
];
let WebController = class WebController {
    constructor(contactoService) {
        this.contactoService = contactoService;
    }
    async listar(res) {
        const resultado = await this.contactoService.listar();
        return res.render('contactos_listado', { contactos: resultado });
    }
    async crearContacto(res, session) {
        if (!session.usuario)
            return res.render('login', { error: "El usuario debe estar logueado" });
        return res.render('contactos_nuevo');
    }
    async formularioIniciarSesion(res) {
        return res.render('iniciarSesion');
    }
    async editarContacto(res, id, session) {
        if (!session.usuario)
            return res.render('login', { error: "El usuario debe estar logueado" });
        const resultado = await this.contactoService.buscarPorId(id);
        return res.render('contactos_editar', { contacto: resultado });
    }
    async login(res, req, body) {
        let usu = body.usuario;
        let pass = body.password;
        let existe = aUsuarios.filter(usuario => usuario.usuario == usu && usuario.password == pass);
        if (existe.length > 0) {
            console.log("logued");
            req.session.usuario = existe[0].usuario;
            this.listar(res);
        }
        else {
            res.render('iniciarSesion', { error: "Error usuario o contraseña incorrecta" });
        }
    }
    async buscarContacto(res, body) {
        try {
            const resultado = await (await this.contactoService.listar()).filter(c => c.nombre.includes(body.textoBusqueda));
            return res.render('contactos_listado', { contactos: resultado });
        }
        catch (error) {
            res.render('error', { error: "Se ha producido un error en la búsqueda" });
        }
    }
    async insertarContacto(res, body, session) {
        try {
            if (!session.usuario)
                return res.render('login', { error: "El usuario debe estar logueado" });
            const resultado = await this.contactoService.insertar(body);
            return res.render('contactos_ficha', { contacto: resultado });
        }
        catch (error) {
            res.render('error', { error: "Error al insertar el contacto" });
        }
    }
    async modificarContacto(res, id, body, session) {
        try {
            if (!session.usuario)
                return res.render('login', { error: "El usuario debe estar logueado" });
            const resultado = await this.contactoService.actualizar(id, body);
            return res.render('contactos_ficha', { contacto: resultado });
        }
        catch (error) {
            res.render('error', { error: "Error al modificar el contacto" });
        }
    }
    async buscarPorId(res, id) {
        const resultado = await this.contactoService.buscarPorId(id);
        return res.render('contactos_ficha', { contacto: resultado });
    }
    async borrarContacto(res, id, session) {
        if (!session.usuario)
            return res.render('login', { error: "El usuario debe estar logueado" });
        const resultado = await this.contactoService.borrar(id);
        this.listar(res);
    }
    async cerrarSession(res, req) {
        req.session.destroy();
        this.listar(res);
    }
};
__decorate([
    (0, common_1.Get)('contactos'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)('contactos/nuevo'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "crearContacto", null);
__decorate([
    (0, common_1.Get)('contactos/iniciarSesion'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "formularioIniciarSesion", null);
__decorate([
    (0, common_1.Get)('contactos/editar/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "editarContacto", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('contactos/buscar'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "buscarContacto", null);
__decorate([
    (0, common_1.Post)('contactos'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "insertarContacto", null);
__decorate([
    (0, common_1.Post)('contactos/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object, Object]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "modificarContacto", null);
__decorate([
    (0, common_1.Get)('contactos/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Post)('contactos/borrar/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "borrarContacto", null);
__decorate([
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WebController.prototype, "cerrarSession", null);
WebController = __decorate([
    (0, common_1.Controller)('web'),
    __metadata("design:paramtypes", [contacto_service_1.ContactoService])
], WebController);
exports.WebController = WebController;
//# sourceMappingURL=web.controller.js.map