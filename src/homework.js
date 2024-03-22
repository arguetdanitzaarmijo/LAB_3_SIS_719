(() => {

  /* Excercises */

  /* First excercise */
  
    let numbers = [1, 2, 3, 4, 5];

  let multipliedNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    multipliedNumbers.push(numbers[i] * 5);
  }

  console.log("Números multiplicados por 5:", multipliedNumbers);
  
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */

  /* Second excercise */

    let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];
    const namesSorted = names.sort((a, b) => a.localeCompare(b));
    console.log(namesSorted);
  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */

 const uniqueLetters = [...new Set(data)];

 console.log(uniqueLetters);

  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
// Creamos un objeto para almacenar las repeticiones
const repeticiones = {};

// Ciclamos el texto del input y verificamos si existe y sumamos 1, de no existir siempre valdrá 1
largeWord.split('').forEach((letra) => {
    repeticiones[letra] = (repeticiones[letra] || 0) + 1;
});

// Imprimimos el resultado
console.log(repeticiones);

  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */

})();
