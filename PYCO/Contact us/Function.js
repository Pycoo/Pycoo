const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());
  
  fetch('/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formObject)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Mensaje enviado con éxito!');
      form.reset();
    } else {
      alert('Error al enviar el mensaje. Por favor inténtalo de nuevo.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al enviar el mensaje. Por favor inténtalo de nuevo.');
  });
});


const calculator = document.querySelector('#cost-calculator');
const calculateButton = document.querySelector('#calculate-button');
const totalCostInput = document.querySelector('#total-cost');

calculateButton.addEventListener('click', () => {
  const numOutlets = parseInt(document.querySelector('#num-outlets').value);
  const numLights = parseInt(document.querySelector('#num-lights').value);
  const outletCost = 50; // Costo por cada enchufe
  const lightCost = 100; // Costo por cada luz
  
  const totalCost = numOutlets * outletCost + numLights * lightCost;
  
  totalCostInput.value = `$${totalCost}`;
});







