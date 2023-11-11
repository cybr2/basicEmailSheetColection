
  const scriptURL = 'google sheet url'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('message')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Thank you For Subscribing!'
        setTimeout(() => {
            msg.innerHTML = ''
        },2000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
