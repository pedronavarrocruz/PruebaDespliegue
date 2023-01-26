"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebModule = void 0;
const common_1 = require("@nestjs/common");
const contacto_module_1 = require("../contacto/contacto.module");
const web_controller_1 = require("./web.controller");
let WebModule = class WebModule {
};
WebModule = __decorate([
    (0, common_1.Module)({
        imports: [contacto_module_1.ContactoModule],
        controllers: [web_controller_1.WebController]
    })
], WebModule);
exports.WebModule = WebModule;
//# sourceMappingURL=web.module.js.map