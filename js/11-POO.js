class Mascota {
    constructor(nombre,edad,especie,raza,cantPatas) {
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.raza = raza;
        this.cantPatas = cantPatas;
    }

    describirme (){
        console.log(`Hola soy ${this.nombre} tengo ${this.edad} años soy un@ ${this.especie} y pertenezco a la raza ${this.raza}`)
    }
}

let mascota1  = new Mascota(`Garfield`, 8, `felino`, `mestizo`, 4);

console.log(mascota1);
console.log(typeof(mascota1));

mascota1.describirme();

console.log(mascota1.cantPatas);