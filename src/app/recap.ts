
const username: string ="Carlos";

const sum = (a: number, b:number) => {
  return a +b;

}

sum(1, 3);

class Persona {

  constructor( public age:number,public lastname: string){

  }
}

const nico = new Persona(37, 'Carlos');

nico.lastname
