function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
}

const cat1 = new Cat('Tom', 'Jerry');
const cat2 = new Cat('Claire', 'Shengzhi');

console.log(cat2.cuteStatement());

Cat.prototype.cuteStatement1 = function() {
  return `Everyone loves ${this.name}`;
}

console.log(cat2.cuteStatement1());

Cat.prototype.meow = function() {
  return 'meeeeeeooooowwwwwwww';
};

console.log(cat2.meow())