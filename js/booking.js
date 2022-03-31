'use strict';
const form = document.getElementById('form');
const fullNameEl = document.getElementById('fullName');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');
const locationEl = document.getElementById('location');
const service = document.getElementById('select');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   inputValues();
});

function inputValues() {
   const textCheck = /[a-zA-z]{2}/;
   const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const numberCheck = /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/;

   const fullName = fullNameEl.value;
   const email = emailEl.value;
   const phone = phoneEl.value;
   const location = locationEl.value;
   const selectedService = service.value;

   if (
      !textCheck.test(fullName) ||
      !textCheck.test(location) ||
      !numberCheck.test(phone) ||
      !emailCheck.test(email) ||
      selectedService === 'default'
   ) {
      alert('all fields required');
   } else {
      console.log(fullName, email, phone, location, selectedService);
      alert('Message Sent');
   }
}
