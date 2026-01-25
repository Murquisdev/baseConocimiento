/*
5. Contador de elementos específicos
Dado un array de emojis de frutas: let cesta = ['🍎', '🍌', '🍎', '🍓', '🍎'] 
Usa cualquier método de iteración que prefieras para contar cuántas manzanas ('🍎') hay en total. 
Imprime el conteo final.
*/

let cesta = ["🍎", "🍌", "🍎", "🍓", "🍎"],
  totalApples = 0;

for (fruta of cesta) {
  if (fruta === "🍎") totalApples++;
}
console.log(`Total manzanas: ${totalApples}`);
