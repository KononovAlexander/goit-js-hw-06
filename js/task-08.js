function formControl() {
    const loginForm = document.querySelector('form.login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const {
            elements: { email, password }
            } = event.currentTarget;

        if (!email.value || !password.value) {
            alert("Please fill in all the fields!");
        }
        console.log(
            {
                email: email.value,
                password:password.value
            }
        );
        event.currentTarget.reset();
    });
}
formControl();