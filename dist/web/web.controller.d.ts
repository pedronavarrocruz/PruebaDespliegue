import { ContactoService } from 'src/contacto/contacto.service';
export declare class WebController {
    private readonly contactoService;
    constructor(contactoService: ContactoService);
    listar(res: any): Promise<any>;
    crearContacto(res: any, session: any): Promise<any>;
    formularioIniciarSesion(res: any): Promise<any>;
    editarContacto(res: any, id: string, session: any): Promise<any>;
    login(res: any, req: any, body: any): Promise<void>;
    buscarContacto(res: any, body: any): Promise<any>;
    insertarContacto(res: any, body: any, session: any): Promise<any>;
    modificarContacto(res: any, id: string, body: any, session: any): Promise<any>;
    buscarPorId(res: any, id: string): Promise<any>;
    borrarContacto(res: any, id: string, session: any): Promise<any>;
    cerrarSession(res: any, req: any): Promise<void>;
}
