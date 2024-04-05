// const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user';

// async function cadastroUsuario(){   
//     var name = document.getElementById('name');     
//     let resposta = await fetch(url,{
//         method:"POST",
//         body:JSON.stringify(
//             {
//                 "name":name.value,
//                 "email":"carlos@gmail.com",
//                 "user_type_id":1,
//                 "password": "123456",
//                 "cpf_cnpj": "62418247406",
//                 "terms": 1,
//                 "birthday":"2000-10-12"    
//             }
//         ),
//         headers:{
//             'Content-Type': 'application/json'
//         }        
//     });

const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user';

async function cadastroUsuario() {
    var name = document.getElementById('nome_completo');
    var email = document.getElementById('email');
    var cpf_cnpj = document.getElementById("cpf_cnpj");
    var password = document.getElementById("password");
    var password2 = document.getElementById("confirmPassword");
    var birthday = document.getElementById("data_nascimento");

    if (!name.value || !email.value || !cpf_cnpj.value || !password.value || !birthday.value) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    var hoje = new Date();
    var aniversario = new Date(birthday.value);
    var idade = hoje.getFullYear() - aniversario.getFullYear();

    if (password.value !== confirmPassword.value) {
        alert("As senhas não coincidem");
        return;
    }
    if (
        hoje.getMonth() < aniversario.getMonth() ||
        (hoje.getMonth() === aniversario.getMonth() &&
            hoje.getDate() < aniversario.getDate())
    ) {
        idade--;
    }

    let data = await resposta.json();


    if (data.data.statusCode != 200) {
        alert(data.data.errors ? .cpf_cnpj[0]);
        return;
    }
    alert("Cadastro feito com sucesso");
    window.location.href = "login.html";
}