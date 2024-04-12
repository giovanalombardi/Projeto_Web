const url = 'https://go-wash-api.onrender.com/api/user';

async function cadastroUsuario() {
  var name = document.getElementById('nome_completo');
  var email = document.getElementById('email');
  var cpf_cnpj = document.getElementById("cpf_cnpj");
  var password = document.getElementById("password");
  var password2 = document.getElementById("confirmPassword");
  var birthday = document.getElementById("data_nascimento");

 /*if (!name.value || !email.value || !cpf_cnpj.value || !password.value || !birthday.value) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
 }*/

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

  if (idade < 18) {
    alert("Você deve ter 18 anos para continuar");
    return;
  }
  

  let respostaApi = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      "name": name.value,
      "email": email.value,
      "user_type_id": 1,
      "password": password.value,
      "cpf_cnpj": cpf_cnpj.value,
      "terms": 1,
      "birthday": birthday.value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  let nova_resposta = await respostaApi.json();
  if (nova_resposta.data.statusCode === 422) {
    if (nova_resposta.data.errors.cpf_cnpj) {
      alert("Cpf/cnpj invalido, insira um valido ou não se tornará um marromba");
    }
    if (nova_resposta.data.errors.email) {
      alert("email invalido, insira um valido ou não se tornará um marromba");
    }
    if (nova_resposta.data.errors.password) {
      alert("A senha inserida, não atende aos requisitos");
    }
    if (nova_resposta.data.errors.aniversario) {
      alert("data invalida, insira uma valida ou não se tornará um marromba");
    }
    if (nova_resposta.data.errors.name) {
      alert("Nome invalido, insira um valido ou não se tornará um marromba");
    }
    
  }
  else{
  alert("cadastro feito com sucesso")
  window.open("../view/login.html")
  }
}
