````function calculaNota(ex, p1, p2) {
  let exercicio = ex
  let prova1 = p1 * 2
  let prova2 = p2 * 3
  let mediaPonderada = (ex + p1 + p2)/6

  if (mediaPonderada >= 9) {
    return 'A';
  } else if (mediaPonderada < 9 && mediaPonderada >= 7.5) {
    return 'B';
  } else if (mediaPonderada < 7.5 && mediaPonderada >= 6) {
    return 'C';
  } else {
    return 'D';
  }
}```
````
