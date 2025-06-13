//A viagem de chihiro, LIVRE, aventura e fantasia
//A casa monstro,10, terro e comedia
//Os incriveis, 12, ação
//A fantastica fabrica de chocolate, LIVRE, fantaisa
//A Bússola de Ouro, 10, aventura
//Zootopia, LIVRE, comedia
//O Rei Leão, 10 ,infantil e musical
//A era do gelo, LIVRE, comedia
//O Estranho Mundo de Jack, 12 ,infantil e musical
//O Diário de uma Princesa, LIVRE,comedia
let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "A casa monstro";
    } else {
      return "Zootopia"
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Os incriveis";          
        } else{
         return "A bússola de ouro";
        }
      } else {
        if (gostaDeFantasia) {
          return "O estranho mundo de jack";
        } else {
          return "A era do gelo";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "A fantastica fabrica de chocolate";
    }
  }
}
