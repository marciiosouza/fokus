const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')


// setAttribute -> recebe dois parametros, o 1º o que você quer alterar, 2º o que inserir
focoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'foco')
})

curtoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-curto')
})

longoBt.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-longo')
})