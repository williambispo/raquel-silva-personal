document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const feedback = form.querySelector('.form-feedback');
  const fields = ['nome', 'email', 'telefone', 'servico', 'mensagem', 'privacidade'];
  const setError = (name, message) => { const field = form.elements[name]?.closest('.field') || form.elements[name]?.closest('.checkbox-field'); field?.classList.toggle('invalid', Boolean(message)); const output = form.querySelector(`[data-error-for="${name}"]`); if (output) output.textContent = message; };
  const validate = () => {
    let valid = true; fields.forEach(name => setError(name, ''));
    const nome = form.elements.nome.value.trim(); const email = form.elements.email.value.trim(); const telefone = form.elements.telefone.value.trim(); const servico = form.elements.servico.value; const mensagem = form.elements.mensagem.value.trim(); const privacidade = form.elements.privacidade.checked;
    if (nome.length < 2) { setError('nome', 'Por favor, informe seu nome.'); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('email', 'Digite um e-mail válido.'); valid = false; }
    if (telefone.replace(/\D/g, '').length < 10) { setError('telefone', 'Informe um telefone válido.'); valid = false; }
    if (!servico) { setError('servico', 'Selecione um serviço.'); valid = false; }
    if (mensagem.length < 10) { setError('mensagem', 'Escreva uma mensagem com pelo menos 10 caracteres.'); valid = false; }
    if (!privacidade) { setError('privacidade', 'Você precisa aceitar o uso dos dados.'); valid = false; }
    return valid;
  };
  form.addEventListener('submit', event => { event.preventDefault(); feedback.className = 'form-feedback'; if (!validate()) { feedback.textContent = 'Revise os campos destacados antes de enviar.'; feedback.classList.add('error'); form.querySelector('.invalid input, .invalid select, .invalid textarea')?.focus(); return; } feedback.textContent = 'Mensagem validada com sucesso! Em breve entraremos em contato. Se preferir, fale diretamente pelo WhatsApp.'; feedback.classList.add('success'); form.reset(); });
  form.querySelectorAll('input, select, textarea').forEach(input => input.addEventListener('input', () => { if (input.name) setError(input.name, ''); }));
});
