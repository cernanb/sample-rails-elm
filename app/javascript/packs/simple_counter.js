import Elm from '../SimpleCounter'

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('simple_counter')

  Elm.SimpleCounter.embed(target)
})
