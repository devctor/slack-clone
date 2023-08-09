  const toggleMenu = document.querySelectorAll('button.toggle-menu')
  const nav = document.getElementById('header__nav')
  toggleMenu.forEach(btn => {
    btn.addEventListener('click', () => {
      nav?.classList.toggle('close')
    })
  })