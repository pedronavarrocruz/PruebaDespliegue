"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactoModule = void 0;
const common_1 = require("@nestjs/common");
const contacto_controller_1 = require("./contacto.controller");
const contacto_service_1 = require("./contacto.service");
const mongoose_1 = require("@nestjs/mongoose");
const contacto_schema_1 = require("./schema/contacto.schema");
let ContactoModule = class ContactoModule {
};
ContactoModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Contacto', schema: contacto_schema_1.ContactoSchema }])],
        controllers: [contacto_controller_1.ContactoController],
        providers: [contacto_service_1.ContactoService],
        exports: [contacto_service_1.ContactoService]
    })
], ContactoModule);
exports.ContactoModule = ContactoModule;
//# sourceMappingURL=contacto.module.js.map