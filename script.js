function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const isLight = html.classList.contains("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (isLight) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  //manter o estado do switch acessível sincronizado com o tema atual
  document.querySelector("#switch").setAttribute("aria-checked", isLight)
}