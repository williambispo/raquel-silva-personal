# Raquel Silva — Personal Trainer

Site institucional multipágina para Raquel Silva, personal trainer. O projeto apresenta treinos personalizados, aulas coletivas, Pilates e consultoria online, com foco em conversão para WhatsApp e Instagram.

## Tecnologias

- HTML5 semântico
- CSS3 puro, com abordagem mobile-first
- JavaScript puro
- Google Fonts (DM Sans e Playfair Display)
- Nenhum framework, build tool ou backend obrigatório

## Estrutura

```text
raquel-silva-personal/
├── index.html
├── sobre.html
├── servicos.html
├── contato.html
├── .gitignore
├── README.md
└── assets/
    ├── css/style.css
    ├── css/responsive.css
    ├── js/main.js
    ├── js/form-validation.js
    ├── js/carousel.js
    └── images/
        ├── hero/
        ├── about/
        ├── services/
        ├── testimonials/
        └── icons/
```

## Como executar no VS Code

Abra a pasta do projeto no VS Code, instale a extensão **Live Server**, abra `index.html`, clique com o botão direito no arquivo e escolha **Open with Live Server**. O site também pode ser aberto diretamente no navegador, mas o Live Server é recomendado para uma experiência mais próxima da publicação.

## Dados de contato

Os dados estão centralizados no início de `assets/js/main.js`, no objeto `siteConfig`:

```js
const siteConfig = {
  whatsapp: '5561991218668',
  instagram: 'https://instagram.com/raquelsliva',
  email: 'contato@raquelsilva.com',
  location: 'Novo Gama, Santa Maria, Gama e proximidades',
  hours: 'De 8:00 às 17:00'
};
```

O número do WhatsApp deve permanecer no formato internacional, sem espaços, parênteses ou hífens. O site gera automaticamente o link `wa.me` e uma mensagem inicial.

## Personalização

Substitua as imagens remotas de demonstração nos arquivos HTML por fotografias reais e autorizadas da profissional. Os diretórios em `assets/images/` já estão organizados para receber os arquivos. Ao trocar uma imagem, mantenha um texto `alt` descritivo.

Os depoimentos da Home são placeholders. Substitua-os somente por avaliações reais e autorizadas. O texto institucional da página Sobre também contém um comentário indicando onde inserir a trajetória real da Raquel.

## Formulário

O formulário de `contato.html` realiza validação no navegador e simula o envio. Nenhum dado é transmitido para um servidor atualmente. Para receber mensagens de verdade, conecte o formulário a um serviço como [Formspree](https://formspree.io/), EmailJS ou a um backend próprio. Antes da publicação, revise a política de privacidade e o consentimento para tratamento de dados.

## Checklist de publicação

- [ ] Substituir as imagens de demonstração por imagens reais e autorizadas.
- [ ] Confirmar telefone, Instagram, e-mail, região e horário.
- [ ] Substituir os depoimentos de exemplo por depoimentos reais autorizados.
- [ ] Integrar o formulário a um serviço de recebimento.
- [ ] Criar e publicar uma política de privacidade adequada.
- [ ] Testar o WhatsApp em celular e desktop.
- [ ] Testar todos os links internos e externos.
- [ ] Testar o menu mobile, carrossel e formulário.
- [ ] Verificar o console do navegador e a ausência de rolagem horizontal.
- [ ] Otimizar imagens para WebP/JPEG antes do envio ao servidor.
- [ ] Configurar domínio, hospedagem e HTTPS.

## Acessibilidade e boas práticas

O projeto utiliza HTML semântico, foco visível, labels associados, navegação por teclado, `aria-expanded` no menu mobile, `aria-live` no retorno do formulário e suporte a `prefers-reduced-motion`. Ainda assim, faça uma revisão manual com teclado e ferramentas como Lighthouse antes da publicação.

## Observação sobre imagens

As imagens atuais usam URLs de demonstração do Unsplash para que o layout seja visualizado imediatamente. Para uso comercial, prefira fotos próprias, autorizadas e otimizadas da Raquel.
