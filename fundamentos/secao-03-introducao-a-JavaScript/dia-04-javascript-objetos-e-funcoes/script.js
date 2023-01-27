let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// console.log('Bem-vinda,' , info.personagem);

info.recorrente = 'Sim';
// console.log(info.recorrente);

// for (let index in info) {
//     console.log(index);
// }

// for (let index in info) {
//     console.log(info[index]);
// }

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
// }

// for (let index in info) {
//     if (index === 'recorrente' && info[index] === 'Sim' && info2[index] === 'Sim') {
//         console.log('Amboms são recorrentes')
//     } else {
//         console.log(info[index], ' e ', info2[index]);
//     }
// } 

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log('"', 'O livro favorito de ', leitor.nome, leitor.sobrenome, 'se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');

leitor.livrosFavoritos.push ({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})

console.log('"' + leitor.nome, 'tem',leitor.livrosFavoritos.length , 'livros favoritos"' );


