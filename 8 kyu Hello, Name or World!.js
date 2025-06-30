function hello(name) {
  if(name == "" || name == null){
    name = 'World'
  }
  name = name.toLowerCase().split('')
  name[0]= name[0].toUpperCase();
  name = name.join('')
 
  return `Hello, ${name}!`;
}
