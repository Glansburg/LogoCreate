
class Shape {
    constructor() {
      this.color = '';

    }
    //set color method passing the parameter color
setColor(color) {
    this.color= color;
}
  }
  
  class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="green" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      
      </svg>`
    }
  }
  
  class Square extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="10" width="60" height="60" stroke="black" fill="transparent" stroke-width="5"/>
       </svg>`
    }
  }
  
  class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18, 244, 182 56, 182, fill="
              stroke="green" fill="transparent" stroke-width="5"/>
              </svg>`
    }
  }
  
  module.exports = {Circle,Triangle,Square};