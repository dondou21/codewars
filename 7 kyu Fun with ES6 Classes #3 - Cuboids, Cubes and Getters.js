class Cuboid {
  /*


 **1. Cube**  
A cube has all sides equal (let's call the side length **s**).

- **Surface Area** = s^2
- **Volume** = s^3

**2. Cuboid**  

- **Surface Area** = \(2(lw + lh + wh)\)  
- **Volume** = \(l \times w \times h\)  

  */
  
  
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  
  get surfaceArea() {
     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
    
  get volume() {
   return this.length * this.width * this.height;
  }
  
  }
  
 
class Cube extends Cuboid {
  // Don't forget to make a call to super ;
  constructor (length) {
    super(length, length, length);
    
  }
}
