const postData = () => {
  let testInput = '1, 5, 3, 5, 1';
  let testObj = {
    input: testInput
  };

  return fetch('/render', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(testObj)
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
};