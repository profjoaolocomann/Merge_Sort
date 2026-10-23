function mergeSort(arr) {
  if (arr.length <= 1) return arr; //tratando se a lista tiver so um numero ou nada

  const meio = Math.floor(arr.length / 2); //separando a lista em dois
  const esquerda = mergeSort(arr.slice(0, meio));
  const direita = mergeSort(arr.slice(meio));

  return merge(esquerda, direita);
}

function merge(esquerda, direita) {
  const resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j)); //juntando os dois
}

// Exemplo de uso:
const numeros = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(numeros));
// Resultado: [3, 9, 10, 27, 38, 43, 82]
