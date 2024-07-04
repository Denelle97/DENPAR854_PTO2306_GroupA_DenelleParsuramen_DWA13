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








