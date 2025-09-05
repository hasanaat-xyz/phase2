const items = [
 { name: 'Bike', price: 100},
 { name: 'TV', price: 200},
 { name: 'Album', price: 10},
 { name: 'book', price: 5},
 {name: 'Phone', price: 500},
 {name: 'Computer', price: 1000},
 {name: 'Keyboard', price: 25}
];
const filteredNames = items.map((item)=>{
    return item.name
})
console.log(filteredNames);