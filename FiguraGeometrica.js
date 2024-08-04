class FiguraGeometrica {
    #nombre;
    #color;

    constructor(nombre, color) {
        this.#nombre = nombre;
        this.#color = color;
    }

    establecerNombre(nombre) {
        if (typeof nombre === 'string' && nombre.trim() !== '') {
            this.#nombre = nombre;
        } else {
            throw new Error('El nombre debe ser una cadena no vacía.');
        }
    }

    obtenerNombre() {
        return this.#nombre;
    }

    establecerColor(color) {
        if (typeof color === 'string' && color.trim() !== '') {
            this.#color = color;
        } else {
            throw new Error('El color debe ser una cadena no vacía.');
        }
    }

    obtenerColor() {
        return this.#color;
    }
}
