import { ContactoService } from './contacto.service';
import { ContactoDto } from './dto/contacto-dto/contacto-dto';
export declare class ContactoController {
    private readonly contactoService;
    constructor(contactoService: ContactoService);
    listar(): Promise<import("./interfaces/contacto/contacto.interface").Contacto[]>;
    buscarPorId(id: string): Promise<{
        resultado: import("./interfaces/contacto/contacto.interface").Contacto;
        error?: undefined;
    } | {
        error: string;
        resultado?: undefined;
    }>;
    crear(crearContactoDto: ContactoDto): Promise<import("./interfaces/contacto/contacto.interface").Contacto>;
    actualizar(id: string, actualizarContactoDto: ContactoDto): Promise<import("./interfaces/contacto/contacto.interface").Contacto>;
    borrar(id: string): Promise<import("./interfaces/contacto/contacto.interface").Contacto>;
}
