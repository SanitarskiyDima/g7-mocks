export function login(userEmail, userPassword) {

    cy.request({
        method: 'POST',
        url: '/api/users/login',
        body: {
            "user": {
                    "email": userEmail,
                    "password": userPassword
                }
        }
    }).then(response => {
        expect(response.isOkStatusCode).to.be.true;
        expect(response.body.user.email).eq(userEmail);

        let token = response.body.user.token;
        let userLocalStorage = response.body.user;
        userLocalStorage.effectiveImage = 'https://static.productionready.io/images/smiley-cyrus.jpg'

        cy.setCookie('auth', token);
        window.localStorage.setItem('user', JSON.stringify(userLocalStorage));
    })

}