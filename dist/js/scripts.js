/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2026 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
document.querySelectorAll('form[data-netlify="true"]').forEach((form) => {
	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		const submitButton = form.querySelector('button[type="submit"]');
		const popup = document.getElementById('formSuccessPopup');
		submitButton.disabled = true;

		try {
			const response = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(new FormData(form)).toString(),
			});

			if (!response.ok) {
				throw new Error('Form submission failed');
			}

			form.reset();
			popup.classList.remove('d-none');
			popup.querySelector('button[data-popup-close="true"]').focus();
		} catch (error) {
			window.alert('No se pudo enviar el formulario. Intentalo nuevamente.');
		} finally {
			submitButton.disabled = false;
		}
	});
});

document.querySelectorAll('[data-popup-close="true"]').forEach((closeButton) => {
	closeButton.addEventListener('click', () => {
		document.getElementById('formSuccessPopup').classList.add('d-none');
	});
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		document.getElementById('formSuccessPopup').classList.add('d-none');
	}
});