//1.Console log each name using forEach
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

names.forEach(name => console.log(name));
//forEach iterates over each element in the names array and logs it to the console.


//2.console log each name with matching province using forEach
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));
//forEach iterates over the names array, using the index to access the corresponding province in the provinces array.


//3.Convert all province names to uppercase using map
const upperProvinces = provinces.map(province => province.toUpperCase());
console.log(upperProvinces);
//map creates a new array by transforming each province name to uppercase.


//4.Create an array with the length of each name using map
const nameLengths = names.map(name => name.length);
console.log(nameLengths);
//map creates a new array containing the length of each name.


//5.Sort all provinces alphabetically using toSorted
const sortedProvinces = [...provinces].sort(); // or provinces.toSorted()
console.log(sortedProvinces);
//sort arranges the provinces array alphabetically.


//6.Filter out provinces with "Cape" in the name and count the remaining
const filteredProvinces = provinces.filter(province => !province.includes('Cape')).length;
console.log(filteredProvinces); // Output: 3
//filter creates a new array excluding provinces with "Cape" and length gives the count.

//7.Create a boolean array to check if names contain the letter 'S'
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);
//map checks each name for the letter 's' and returns a boolean array.


//8.Turn the arrays into an object mapping names to provinces using reduce
const nameProvinceMap = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
}, {});
console.log(nameProvinceMap);
//reduce constructs an object where each name maps to its corresponding province.

/////////////////////////////////////// Additional Exercises ////////////////////////////////////////                           

//1.Console log each product name using forEach
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  products.forEach(product => console.log(product.product));
//forEach iterates over each product and logs its name.


//2.Filter products with names longer than 5 characters
const longNameProducts = products.filter(product => product.product.length > 5);
console.log(longNameProducts);
// filter creates a new array of products with names longer than 5 characters.


//3.Convert prices to numbers, remove products without prices, and calculate the total price
const totalPrice = products
  .filter(product => product.price.trim() !== '')
  .map(product => ({ ...product, price: Number(product.price) }))
  .reduce((acc, product) => acc + product.price, 0);

console.log(totalPrice);
//filter removes products without prices, map converts prices to numbers, and reduce calculates the total price.

//4.Concatenate all product names using reduce
const productNames = products.reduce((acc, product, index) => {
    return acc + (index === 0 ? '' : ', ') + product.product;
  }, '');
  
  console.log(productNames);
//reduce concatenates product names into a single string.


//5.Calculate highest and lowest priced items using reduce
const priceInfo = products.reduce((acc, product) => {
    const price = Number(product.price);
    if (!acc.highest || price > acc.highest.price) acc.highest = product;
    if (!acc.lowest || price < acc.lowest.price) acc.lowest = product;
    return acc;
  }, {});
  
  console.log(`Highest: ${priceInfo.highest.product}. Lowest: ${priceInfo.lowest.product}`);
  //reduce identifies the highest and lowest priced items.


  //6.Recreate object with changed keys using reduce and Object.entries
  const updatedProducts = Object.entries(products).reduce((acc, [key, value]) => {
    acc[key] = { name: value.product, cost: value.price };
    return acc;
  }, {});
  
  console.log(updatedProducts);
//Object.entries and reduce are used to change the keys of each product object.

