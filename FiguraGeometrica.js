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


class Rectangulo extends FiguraGeometrica {
    #longitud;
    #ancho;

    constructor(nombre, color, longitud, ancho) {
        super(nombre, color);
        this.#longitud = longitud;
        this.#ancho = ancho;
    }

    establecerLongitud(longitud) {
        if (typeof longitud === 'number' && longitud > 0) {
            this.#longitud = longitud;
        } else {
            throw new Error('La longitud debe ser un número positivo.');
        }
    }

    obtenerLongitud() {
        return this.#longitud;
    }

    establecerAncho(ancho) {
        if (typeof ancho === 'number' && ancho > 0) {
            this.#ancho = ancho;
        } else {
            throw new Error('El ancho debe ser un número positivo.');
        }
    }

    obtenerAncho() {
        return this.#ancho;
    }

    calcularArea() {
        return this.#longitud * this.#ancho;
    }

    calcularPerimetro() {
        return 2 * (this.#longitud + this.#ancho);
    }
}