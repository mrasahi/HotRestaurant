document.getElementById('addRes').addEventListener('click', event => {
    event.preventDefault()
    axios.post('/api/tables', {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      id: document.getElementById('id').value,
      
    })
      .then(({ data }) => {
        
        alert('success')
      })
      .catch(err => console.error(err))
  })