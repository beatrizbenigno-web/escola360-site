/* ============================================================
   VALIDAÇÃO DO FORMULÁRIO DE SUPORTE
   ============================================================ */
const formulario = document.getElementById('form-suporte');

if (formulario) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // impede o envio até validar tudo

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');
    let valido = true;

    // limpa erros anteriores
    document.querySelectorAll('.erro-campo').forEach((e) => {
      e.textContent = '';
      e.classList.remove('visivel');
    });
    document.querySelectorAll('.campo-invalido').forEach((c) => c.classList.remove('campo-invalido'));

    // campo obrigatório: nome
    if (nome.value.trim() === '') {
      document.getElementById('erro-nome').textContent = 'Informe seu nome.';
      document.getElementById('erro-nome').classList.add('visivel');
      nome.classList.add('campo-invalido');
      valido = false;
    }

    // formato mínimo de e-mail: texto@texto.texto
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      document.getElementById('erro-email').textContent = 'Informe um e-mail válido.';
      document.getElementById('erro-email').classList.add('visivel');
      email.classList.add('campo-invalido');
      valido = false;
    }

    // campo obrigatório: assunto
    if (assunto.value === '') {
      document.getElementById('erro-assunto').textContent = 'Selecione um assunto.';
      document.getElementById('erro-assunto').classList.add('visivel');
      assunto.classList.add('campo-invalido');
      valido = false;
    }

    // campo obrigatório: mensagem com no mínimo 10 caracteres
    if (mensagem.value.trim().length < 10) {
      document.getElementById('erro-mensagem').textContent = 'Mensagem muito curta (mínimo 10 caracteres).';
      document.getElementById('erro-mensagem').classList.add('visivel');
      mensagem.classList.add('campo-invalido');
      valido = false;
    }

    // confirmação quando tudo está válido
    if (valido) {
      const sucesso = document.getElementById('sucesso-mensagem');
      sucesso.hidden = false;
      formulario.reset();
      setTimeout(() => (sucesso.hidden = true), 5000);
    }
  });
}

/* ============================================================
   VALIDAÇÃO DO FORMULÁRIO DE LOGIN
   ============================================================ */
const formularioLogin = document.getElementById('form-login');

if (formularioLogin) {
  formularioLogin.addEventListener('submit', function (evento) {
    evento.preventDefault(); // impede o envio até validar tudo

    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    let valido = true;

    // limpa erros anteriores
    document.querySelectorAll('.erro-campo').forEach((e) => {
      e.textContent = '';
      e.classList.remove('visivel');
    });
    document.querySelectorAll('.campo-invalido').forEach((c) => c.classList.remove('campo-invalido'));

    // formato mínimo de e-mail
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      document.getElementById('erro-email').textContent = 'Informe um e-mail válido.';
      document.getElementById('erro-email').classList.add('visivel');
      email.classList.add('campo-invalido');
      valido = false;
    }

    // senha obrigatória + tamanho mínimo
    if (senha.value.trim() === '') {
      document.getElementById('erro-senha').textContent = 'Informe sua senha.';
      document.getElementById('erro-senha').classList.add('visivel');
      senha.classList.add('campo-invalido');
      valido = false;
    } else if (senha.value.length < 6) {
      document.getElementById('erro-senha').textContent = 'A senha deve ter pelo menos 6 caracteres.';
      document.getElementById('erro-senha').classList.add('visivel');
      senha.classList.add('campo-invalido');
      valido = false;
    }

    // válido → envia de verdade para o dashboard
    if (valido) {
      formularioLogin.submit();
    }
  });
}

/* ============================================================
   FAQ EXPANSÍVEL (acordeão)
   ============================================================ */
const perguntas = document.querySelectorAll('.faq-pergunta');

perguntas.forEach((pergunta) => {
  pergunta.addEventListener('click', () => {
    const itemAtual = pergunta.closest('.faq-item');
    const jaEstavaAberto = itemAtual.classList.contains('aberta');

    // Fecha todos os itens
    perguntas.forEach((outra) => {
      outra.closest('.faq-item').classList.remove('aberta');
      outra.setAttribute('aria-expanded', 'false');
    });

    // Abre o clicado somente se estava fechado
    if (!jaEstavaAberto) {
      itemAtual.classList.add('aberta');
      pergunta.setAttribute('aria-expanded', 'true');
    }
  });
});
