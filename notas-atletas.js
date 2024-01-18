let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8] 
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5] 
 }
];

function mostrarResultado(atleta){
  for (let i = 0; i < atleta.length; i++){ // 1. Remover a primeira e a última nota de cada atleta:
    let notasOrganizadas = atleta[i].notas.sort(organizarNotas); // Coloca os números da string em ordem crescente
    let notasFiltradas = notasOrganizadas.slice(1, -1); // Cria uma cópia da array e remove e primeiro e último elemento
  
    // 2. Somando as notas restantes e calculando a média 
    atleta.forEach(function(atleta){
      let soma = 0
      for (let i = 0; i < notasFiltradas.length; i++){
          soma += notasFiltradas[i];
        }
      atleta.media = soma / notasFiltradas.length;
      }); 

      console.log(`Atleta: ${atleta[i].nome}`);
      console.log(`Notas obtidas: ${atleta[i].notas.join(", ")}`);
      console.log(`Média válida: ${atleta[i].media}`); 
  }; 
}; 

// Função externa que coloca os elementos de uma string em ordem crescente
function organizarNotas(a, b){
  return a - b
} 

mostrarResultado(atletas);
