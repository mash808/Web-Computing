array = [10, 20, 3, 5, 2, 1000]

m = array.map(num => num * 2)
f = array.filter(num => num >= 20)
r = array.reduce((acc, num) => acc + num, 0)

console.log(m)
console.log(f)
console.log(r)
