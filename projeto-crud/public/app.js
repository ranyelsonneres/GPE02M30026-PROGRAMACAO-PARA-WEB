//responsável por fazer as requisições do front ao backend


//elementos HTML
const form = document.getElementById('user-form');
const userlist = document.getElementById("user-list");

carregarUsuarios(); //chama a função para listar todos os usuários cadastrados no banco

//funções

//tratar o formulário
form.addEventListener('submit', e=>{
    e.preventDefault(); //evitar do formulário recarregar
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    cadastrarUsuario(nome, email);
});

function cadastrarUsuario(nome, email){
    //fetch() - requisição ao backend
    fetch('/api/users/cadastrar', { //rota para o backend
        method: 'POST', //método da requisição
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({nome, email}) //converter o objeto
    })
    .then(() =>{
        form.reset(); //limpar os dados do formulário
    })
};

function carregarUsuarios(){
    fetch('api/users/listar', {
        method: 'GET'
    })
    .then(res => res.json()) //recebe os dados do banco em JSON
    .then(data =>{ //manipular os dados recebidos: objeto
        userlist.innerHTML = ''; //limpar o conteúdo
        data.foreach(user =>{
            const li = document.createElement('li');
            li.innerHTML = `${user.nome} - ${user.email}`
            userlist.appendChild(li);
        })
    })
}
