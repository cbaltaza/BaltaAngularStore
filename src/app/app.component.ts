import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ThreescaleService } from './services/threescale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;

  products: Product =
    {
      productId: '#',
      name: '#',
      categoryId: '#',
      price: '#',
      stock: '#',
      active: '#'
    }

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  register = {
    name: '',
    email: '',
    password: '',
  }
  name = 'Baltazar';
  age = 37;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = false;

  Persona = {
    name: 'Baltazar',
    age: 37,
    avatar: 'https://multiva.com.mx/o/multiva-theme/images/logos/LogoGrupo.png'
  }

  names: string[] = ['Nico', 'Juli', 'Santi'];

  newName = '';

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.Persona.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  onKeyUp(event: Event) {
    const element = event.target as HTMLInputElement;
    this.Persona.name = element.value;
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.Persona.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}
