import { selector } from 'recoil';
import { arbolActual } from '../atoms/atomArbolDecisiones';


export const opcionesDeDecision = selector({
    key: 'tomarDecision',
    get: ({ get }) => {
        const arbol = get(arbolActual);
        let lista = new Map();
        lista.set('decisiones', []);
        for (var key in arbol) {
            if (key.includes('opcion')) {
                const data = [
                    arbol[key].descripcion,
                    arbol[key].rutaImagen,
                    arbol[key].seleccionada
                ]
                lista.get('decisiones').push(data);
            }
        }
        return lista;
    }
});