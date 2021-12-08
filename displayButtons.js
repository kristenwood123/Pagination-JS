const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class='page-btn ${activeIndex === pageIndex ? 'active-btn': 'null'}>${pageIndex + 1}</button>`
  })
  container.innerHTML = btns.join('')
}

export default displayButtons

