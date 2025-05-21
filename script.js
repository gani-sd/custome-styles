document.querySelectorAll('.text-field input').forEach(input => {
    input.addEventListener('blur', () => {
        const container = input.closest('.text-field');
        if (input.required && input.value.trim() === '') {
            container.classList.add('error');
        } else {
            container.classList.remove('error');
        }
    });
});
