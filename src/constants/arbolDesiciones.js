export function getDesicion(nodo) {
    return desiciones[nodo];
}

export function tomarDesicion(nodoActual) {

}

export const desiciones = {
    decisionInicial: {
        decisionTomada: {
            newDesicion: "decisionPadre",
            rutaImagen: '../../img/imagen.png',
            descripcion: 'Una de las metas de José es conseguir una casa propia, para esto acepta una oportunidad de trabajo que le dobla su salario actual',
            seleccionada: true
        },
        opcion1: {
            newDesicion: "decisionPadre",
            rutaImagen: '../../img/imagen.png',
            descripcion: 'Una de las metas de José es conseguir una casa propia, para esto acepta una oportunidad de trabajo que le dobla su salario actual',
            seleccionada: true
        },
        sinHijos: true,
    },

    decisionPadre: {
        decisionTomada: {
            rutaImagen: '../../img/imagen.png',
            descripcion: 'Para celebrar, sus amigos le dicen que debería salir el proximo fin de semana, ya que es su primer sueldo y debería celebrarlo a lo grande'
        },
        opcion1: {
            newDesicion: 'decisionNoIrACelebrar',
            rutaImagen: '../../img/imagen.png',
            descripcion: 'José decide no ir con sus amigos de fiesta',
            seleccionada: false
        },
        opcion2: {
            newDesicion: 'decisionNoIrACelebrar',
            rutaImagen: '../../img/imagen.png',
            descripcion: 'José decide que por ahora no puede ir, pero comenta que puede ir en otro momento que todos tengan dinero',
            retroAlimentacion: {
                descripcion: 'José sale sin problema con sus amigos el proximo pago',
            },
            seleccionada: false
        },
        opcion3: {
            newDesicion: '',
            rutaImagen: '../../img/imagen.png',
            descripcion: 'José decide ir con sus amigos de fiesta',
            seleccionada: false
        },
        sinHijos: false,
    },


    decisionNoIrACelebrar: {
        decisionTomada: {
            rutaImagen: '../../img/imagen.png',
            descripcion: 'José debe realizar las compras del mes, realiza una lista primeramente pero no esta muy seguro de lo que necesita'
        },
        opcion1: {
            newDesicion: 'decisionNoIrACelebrar',
            rutaImagen: '../../img/imagen.png',
            descripcion: 'Jose decide comprar lo esencial',
            seleccionada: false
        },
    }
};