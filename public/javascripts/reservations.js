// SELECTING A SEAT

document.querySelectorAll('.table').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('tableSelected')
    })
  })
