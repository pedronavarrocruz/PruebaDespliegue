import { Contacto } from './interfaces/contacto/contacto.interface';
import { Model } from 'mongoose';
import { ContactoDto } from './dto/contacto-dto/contacto-dto';
export declare class ContactoService {
    private readonly contactoModel;
    constructor(contactoModel: Model<Contacto>);
    listar(): Promise<Contacto[]>;
    buscarPorId(id: string): Promise<Contacto>;
    insertar(crearContactoDto: ContactoDto): Promise<Contacto>;
    borrar(id: string): Promise<Contacto>;
    actualizar(id: string, actualizarTareaDto: ContactoDto): Promise<Contacto>;
}
