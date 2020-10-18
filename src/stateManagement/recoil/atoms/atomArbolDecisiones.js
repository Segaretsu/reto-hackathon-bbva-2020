import { atom } from "recoil";
import { desiciones } from '../../../constants/arbolDesiciones';

export const arbolDecisiones = atom({
    key: 'arbolDecisiones',
    default: desiciones // Arbol de decisiones
});

export const nodosDecisionTomada = atom({
    key: 'nodosDecisionTomada',
    default: {
        nodoPadre: 'decisionInicial', // De donde venimos
        nodoDestiono: 'decisionPadre', // Hacia donde vamos
        nodoOpcion: 'opcion1' // Opcion que tomamos
    }
});


export const arbolActual = atom({
    key: 'arbolActual',
    default: desiciones['decisionInicial']
});