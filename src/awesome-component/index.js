import {Element} from '@polymer/polymer/polymer-element.js';
import template from './template.html';

export class AwesomeComponent extends Element {
  static get properties() {
    return {
      myName: {
        type: String,
        value: 'Init name',
        observer: 'myNameChanged'
      }
    };
  }

  static get template() {
    return template;
  }

  constructor() {
    super()
    this.myName = 'Luke'
  }

  myNameChanged(myName) {
    this.textContent = 'Hi! My name is ' + myName;
  }

}
customElements.define('awesome-component', AwesomeComponent);