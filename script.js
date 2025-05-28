// Script to handle order form submission and show thank you message
document.addEventListener('DOMContentLoaded', function () {
  const orderForm = document.getElementById('orderForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simple form validation could be added here if needed

      // Hide the form and show thank you message
      orderForm.style.display = 'none';
      thankYouMessage.classList.remove('d-none');
    });
  }
});
