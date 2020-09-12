
// const products = [
//   { name: 'Shampoo', price: 4.99 },
//   { name: 'Donuts', price: 7.99 },
//   { name: 'Cookies', price: 6.49 },
//   { name: 'Bath Gel', price: 13.99 }
// ]

// const getTotal = (obj) => {
//   let totalPrice = 0

//   obj.forEach(product => totalPrice += product.price)

//   return totalPrice
// }

// const couponLocations = [
//   {room: 'Living Room', amount: 5},
//   {room: 'Kitchen', amount: 2},
//   {room: 'Bathroom', amount: 1},
//   {room: 'Master Bedroom', amount: 7}
// ]

// const ourReduce = (array, reducer, initial) => {
//   let accum = initial
//   array.forEach(element => accum = reducer(accum, element))
//   return accum
// }

// const couponCounter = (total, location) => {
//   return total + location.amount
// }

// console.log(ourReduce(couponLocations, couponCounter, 0))

// console.log(couponLocations.reduce(couponCounter, 0))
          
          
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total, batches) => batches + total)