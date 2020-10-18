export function getDesicion(nodo) {
    return desiciones[nodo];
}

export function tomarDesicion(nodoActual) {

}

export const desiciones = {
    decisionInicial: {
        opcion1: {
            newDesicion: "desicionPadre",
            rutaImagen: 'x',
            descripcion: 'Una de las metas de José es conseguir una casa propia, para esto acepta una oportunidad de trabajo que le dobla su salario actual',
            seleccionada: true
        },
        sinHijos: true,
    },

    decisionPadre: {
        desicionTomada: {
            rutaImagen: '',
            descripcion: 'Para celebrar, sus amigos le dicen que debería salir el proximo fin de semana, ya que es su primer sueldo y debería celebrarlo a lo grande'
        },
        opcion1: {
            newDesicion: '',
            rutaImagen: 'a',
            descripcion: 'José decide no ir',
            seleccionada: false
        },
        opcion2: {
            newDesicion: '',
            rutaImagen: 'b',
            descripcion: 'José decide que por ahora no puede ir, pero comenta que puede ir en otro momento que todos tengan dinero',
            retroAlimentacion: {
                descripcion: 'José sale sin problema con sus amigos el proximo pago',
            },
            seleccionada: false
        },
        opcion3: {
            newDesicion: '',
            rutaImagen: 'c',
            descripcion: 'José decide no ir',
            seleccionada: false
        },
        sinHijos: false,
    }
};