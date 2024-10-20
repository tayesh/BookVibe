import { descendingSortByProperty } from "./sort.js";

const objects = [
    { id: 1, name: 'Book A', rating: 3 },
    { id: 2, name: 'Book B', rating: 8 },
    { id: 3, name: 'Book C', rating: 1 },
    // Add more objects here with additional properties
];
objects.sort(descendingSortByProperty("id"));
console.log(objects);