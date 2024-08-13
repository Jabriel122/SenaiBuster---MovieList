const listaFilmes = [
  {
    nome: "Um Lugar Silencioso",
    genero: "Terror",
    ano: 2018,
    duracao: "1h30",
  },
  {
    nome: "Homem Aranha : Longe de Casa",
    genero: "Ação",
    ano: 2019,
    duracao: "2h10",
  },
  {
    nome: "Velozes e Furiosos 9",
    genero: "Aventura",
    ano: 2021,
    duracao: "2h23",
  },
  { nome: "Veículo 19", genero: "Ação", ano: 2013, duracao: "1h22" },
  { nome: "Corra", genero: "Terror", ano: 2017, duracao: "1h44" },
  { nome: "Nós", genero: "Terror", ano: 2019, duracao: "2h01" },
  {
    nome: "Mad Max: Estrada da Fúria",
    genero: "Ação",
    ano: 2015,
    duracao: "2h00",
  },
  { nome: "A Freira", genero: "Terror", ano: 2018, duracao: "1h36" },
  {
    nome: "Batman: O Cavaleiro das Trevas",
    genero: "Ação",
    ano: 2008,
    duracao: "2h32",
  },
  { nome: "Coringa", genero: "Thriller", ano: 2019, duracao: "2h02" },
  { nome: "Carros 3", genero: "Infantil", ano: 2017, duracao: "2h09" },
  { nome: "Toy Story 4", genero: "Infantil", ano: 2019, duracao: "1h40" },
  {
    nome: "John Wick 3: Parabellum",
    genero: "Ação",
    ano: 2019,
    duracao: "2h11",
  },
  {
    nome: "Truque de Mestre",
    genero: "Thriller",
    ano: 2013,
    duracao: "1h55",
  },
  { nome: "Os Vingadores", genero: "Aventura", ano: 2012, duracao: "2h23" },
  { nome: "Homem de Ferro", genero: "Ação", ano: 2006, duracao: "2h08" },
];

let listaAlugados = [];

let lista = document.getElementById("lista");
let divAlugados = document.getElementById("listaAlugados");

function FiltroAlfabetico() {
  lista.innerHTML = "";

  listaFilmes.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  });
  GerarTable();
}

function FiltroAno() {
  lista.innerHTML = "";

  listaFilmes.sort((a, b) => {
    return Number(a.ano) - Number(b.ano);
  });
  GerarTable();
}

function GerarTable() {
  let table = "";

  for (let i = 0; i < listaFilmes.length; i++) {
    table += `
        <tr class="content-table-row"> 
            <td class="content-table-start name-cell">${listaFilmes[i].nome} </td> 
            <td class="content-table genero-cell"> ${listaFilmes[i].genero} </td> 
            <td class="content-table time-cell"> ${listaFilmes[i].duracao} </td>  
            <td class="content-table year-cell"> ${listaFilmes[i].ano} </td> 
            <td class="content-table-end button-cell">
                <button class="button-alugar" onclick="Alugar(${i})">Alugar</button>
            </td> 
        </tr>`;
  }

  table += ``;
  lista.innerHTML = table;
}

function Alugar(index) {
  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth();
  let ano = data.getFullYear();

  mes++; //mes que alugou
  let mesDevolucao = mes + 1; //mes de devolucao
  let devolucao = `${dia}/${mesDevolucao}/${ano}`;
  let filme = listaFilmes[index];

  alert(`
      Filme: ${filme.nome}

      Data de aluguel: ${dia}/${mes}/${ano}
      Data de devolucao: ${devolucao}
      `);

  let filmealugado = {
    nome: filme.nome,
    genero: filme.genero,
    ano: filme.ano,
    duracao: filme.duracao,
    devolucao: devolucao,
  };

  listaAlugados.push(filmealugado);

  Alugados()
}

function Alugados() {
  divAlugados.innerHTML = "";
  let table = "";

  for (let i = 0; i < listaAlugados.length; i++) {
    table += `<tr class="content-table-row"> 
              <td  class="content-table-start name-cell">${listaAlugados[i].nome} </td> 
              <td class="content-table genero-cell"> ${listaAlugados[i].genero} </td> 
              <td class="content-table time-cell"> ${listaAlugados[i].duracao} </td>  
              <td class="content-table year-cell"> ${listaAlugados[i].ano} </td> 
              <td class="content-table-end button-cell"> ${listaAlugados[i].devolucao} </td> 
          </tr>`;
  }

  divAlugados.innerHTML += table;
}
