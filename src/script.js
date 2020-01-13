const url = 'https://dog.ceo/api/breed/hound/images/random';
const dogImg = document.querySelector('#dog-img');

const validateHttpStatus = dogData => {
  if (!dogData.ok) {
    throw new Error(`HTTP error, status ${dogData.status}`);
  }
  return dogData.json();
};

const setDogImage = ({ message: url }) => {
  dogImg.setAttribute('src', url);
};

const handleError = error => {
  console.log(error);
};

fetch(url)
  .then(validateHttpStatus)
  .then(setDogImage)
  .catch(handleError);
