function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    const img = document.querySelector("#profile img")
    if (html.classeList.contains("light")) {
      img.setAttribute("src", "avatar-light.png")
    } else {
      img.setAttribute("src", "avatar.png")
    }
  }