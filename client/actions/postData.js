const postData = (e) => {
  e.preventDefault();

  const input = document.getElementById('heights-form-input').value;
  console.log(input);

  return fetch('/render', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({input})
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    heightsForm.reset();
  });
};