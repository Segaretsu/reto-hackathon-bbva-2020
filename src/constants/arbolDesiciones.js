export function getDesicion() {

}

export function tomarDesicion() {

}

export const desiciones = {
    desicionInicial: {
        opcion1: {
            newDesicion: "desicionPadre",
            descripcion: 'Una de las metas de Joselo es conseguir una casa propia, para esto acepta una oportunidad de trabajo que le dobla su salario actual.'
        }
    },

    desicionPadre: {
        desicionTomada: {
            descripcion: ""
        },
        opcion1: {
            newDesicion: "",
            seleccionada: false
        },
        opcion2: {},
        opcion3: {},
    }
};