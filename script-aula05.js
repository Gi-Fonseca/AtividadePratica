/**
 * Atividade: Praticando DOM Estático
 */

// 1. Identidade: Selecione o #nome-usuario e mude o texto para o seu nome completo.
// O HTML fornecido usa <h1 id="nome-usuario">Nome do Aluno</h1>
const nomeUsuario = document.querySelector("#nome-usuario");
if (nomeUsuario) {
    nomeUsuario.textContent = "Seu Nome Completo Aqui"; // Substitua pelo seu nome!
}

// 2. Avatar: Troque o src da foto de perfil por uma URL de imagem real.
// O HTML fornecido usa <img src="https://via.placeholder.com/150" id="foto-perfil" alt="Foto do Usuário" />
const fotoPerfil = document.querySelector("#foto-perfil");
if (fotoPerfil) {
    fotoPerfil.src = "https://avatars.githubusercontent.com/u/9919?s=200&v=4"; // Exemplo: Logo do GitHub
    fotoPerfil.alt = "Minha Foto de Perfil"; // Atualiza o alt também para ser mais descritivo
}

// 3. Personalização: Altere a cor de fundo do #container-perfil através do JavaScript.
// O HTML fornecido usa <div id="container-perfil">...</div>
const containerPerfil = document.querySelector("#container-perfil");
if (containerPerfil) {
    containerPerfil.style.backgroundColor = "#e0f7fa"; // Um tom de azul claro (AliceBlue)
}

// 4. Status Real: Adicione a classe .online ao #badge-status e mude o texto para "Status: Ativo".
// O HTML fornecido usa <div id="badge-status">Status: Offline</div>
// O CSS fornecido já tem a classe .online definida.
const badgeStatus = document.querySelector("#badge-status");
if (badgeStatus) {
    badgeStatus.classList.add("online");
    badgeStatus.textContent = "Status: Ativo";
}

// 5. Auditoria: Use querySelectorAll para contar quantas skills o usuário possui e exiba o total no console.
// O HTML fornecido usa <li class="skill">...</li> dentro de <ul id="lista-skills">.
const skills = document.querySelectorAll(".skill");
console.log(`Auditoria: O usuário possui um total de ${skills.length} skills.`);
