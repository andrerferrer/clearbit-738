const authorization = "Bearer sk_232fc2745f40d265541099b35e9968e9";

// Pseudocode

// find the form
const form = document.querySelector("#clearbitForm");
// add an event listener (submit)
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // find the user input
  const userInput = document.querySelector("#clearbitEmail").value;
  // send the user input in the api request
  const url = `https://person.clearbit.com/v2/people/find?email=${userInput}`;
  
  const options = {
    headers: {
      "Authorization": authorization
    }
    // method: 'POST',
    // body: JSON.stringify({key: 'value'})
  }
  
  fetch(url, options)
    .then(res => res.json())
    .then((data) => {
      // response -> dig the json (find the relevant info)
      console.log(data);
      const email = data.email;
      const bio = data.bio;
      const location = data.location;
      const name = data.name.fullName;
      const linkedin = data.linkedin.handle;

      // update the DOM with the new info
      document.getElementById('name').innerText = name;
      document.getElementById('email').innerText = email;
      document.getElementById('bio').innerText = bio;
      document.getElementById('location').innerText = location;
      document.getElementById('linkedin').innerHTML = `<a href="https://linkedin.com/${linkedin}">Linkedin</a>`;

    });
});
