axios.get('/api/tables')
  .then(res => {
    res.data.forEach(table => {
      let itemElem = document.createElement('li')
      itemElem.innerHTML = `
      <div>
        <p>
          Name: ${table.name}
          Email: ${table.email}
          Phone: ${table.phone}
          ID: ${table.id}
        </p>   
      </div>
      `
      document.getElementById('tables').append(itemElem)
    })
  })
  .catch(err => console.error(err))