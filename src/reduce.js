const { useReducer } = require("react");

/**
 * Suma todos los números de un array
 * @param [1, 2, 3, 4] numbers
 * @returns [2, 4]
 */
function sum(numbers) { 
   return numbers
      .reduce((acc, number) => acc + number,
      0
) 
}


/**
 * Dado un array de estudiantes, devuelve el mejor
 * @param [
    { name: 'Futanito', grade: 6 },
    { name: 'Menganito', grade: 5 },
    { name: 'Juanito', grade: 9 }
 * ] students
 * @returns [{ name: 'Juanito', grade: 9 }]
 */
function bestStudent(students) {
   if (students.length === 0) return undefined;
   return students.reduce((acc, student) => {
    if (student.grade > acc.grade) {
      acc = student;
    }
    return acc;
  });
}

/**
 * Dado un array de palabras, devuelve un diccionario con el número de apariciones.
 * @param [
    "dog", "cat", "dog", "cat", "fish", "man", "woman", "woman"
 * ] users
 * @param "JS" skill
 * @returns {
    dog: 2,
    cat: 2,
    fish: 1,
    man: 1,
    woman: 2,
  }
 */
function countWords(words) {
  return words.reduce((acc, word) => {
    if (acc[word]) {
      acc[word] += 1;
    } else {
      acc[word] = 1;
    }
    return acc;
  }, {});
}

/**
 * Suma los precios de todos los productos en el array.
 * @param {Array<{name: string, price: number}>} products - Lista de productos con su precio.
 * @returns {number} Total de precios sumados.
 * @example
 * // Input:
 * // [{name: "Apple", price: 2}, {name: "Bread", price: 1}, {name: "Milk", price: 3}]
 * // Output:
 * // 6
 */
function getTotalPrice(products) {
   return products.reduce((acc, n) => { 
   acc += n.price
   return acc}
   , 0)
}

/**
 * Cuenta cuántos productos hay por categoría.
 * @param {Array<{name: string, category: string}>} products - Lista de productos con categoría.
 * @returns {Object} Objeto con el conteo por categoría.
 * @example
 * // Input:
 * // [{name: "Apple", category: "Fruit"}, {name: "Banana", category: "Fruit"}, {name: "Lettuce", category: "Vegetable"}]
 * // Output:
 * // { Fruit: 2, Vegetable: 1 }
 */
function countByCategory(products) {
  return products.reduce((acc, n) => {
   const category = n.category;

   if (acc[category]) {
   acc[category] = acc[category] + 1;
   } else {
   acc[category] = 1;
   }
    return acc;
   }, {});
}


/**
 * Concatena los nombres en una sola cadena separada por comas.
 * @param {Array<{name: string}>} users - Lista de usuarios.
 * @returns {string} Cadena con todos los nombres.
 * @example
 * // Input:
 * // [{name: "Anna"}, {name: "Carlos"}, {name: "Bea"}]
 * // Output:
 * // "Anna, Carlos, Bea"
 */
function joinNames(users) {
  return users.reduce((acc, n, i) => {
    if (i === 0) {
      acc = n.name;
    } else {
      acc += ", " + n.name;
    }
    return acc;
  }, "");
}


module.exports = {
  sum,
  bestStudent,
  countWords,
  getTotalPrice,
  countByCategory,
  joinNames,
}