function applyThemeState(isLight) {
  //trocar a imagem do avatar conforme o tema
  const img = document.querySelector("#profile img")
  img.setAttribute("src", isLight ? "./assets/avatar-light.png" : "./assets/avatar.png")

  //manter o estado do switch acessível sincronizado com o tema atual
  document.querySelector("#switch").setAttribute("aria-checked", isLight)
}

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const isLight = html.classList.contains("light")
  localStorage.setItem("theme", isLight ? "light" : "dark")

  applyThemeState(isLight)
}

//sincronizar avatar/aria-checked com o tema já aplicado no <head> (evita flash)
document.addEventListener("DOMContentLoaded", () => {
  applyThemeState(document.documentElement.classList.contains("light"))
})