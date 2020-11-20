const username = "testuser001foramazon@gmail.com"
const password = "Test001"
//click('a[href="/dashboard"]')
module.exports = {

    /*
    TC001 - Web site is open
    Test Steps: 
    1. Go to https://www.amazon.de/.
    Expected Result: 
    1. The web site is open and the categories sidebar is shown.
    2. Title should be equal "Amazon.de: Günstige Preise für Elektronik & Foto, Filme, Musik, Bücher, Games, Spielzeug & mehr".
    
    */

    'Site is open'(browser){
        browser
            .url('https://www.amazon.de/')
            .waitForElementVisible('body')
            .assert.titleContains('Amazon.de: Günstige Preise für Elektronik & Foto, Filme, Musik, Bücher, Games, Spielzeug & mehr')
            .moveToElement('div#navFooter', 10, 10)
            .isVisible('div#navFooter', (result) => { 
                browser.assert.equal(result.value, true)
            })
    },

    /*
    TC002 - Login verification
    Test Steps: 
    1. Go to https://www.amazon.de/.
    2. Click on "Einloggen" button.
    3. Enter email and password.
    4. Click "Einlogen".
    Expected Result: 
    1. I see that I have to confirm sign in via email.
    */
   'Login'(browser){
        browser
            .url('https://www.amazon.de/')
            .waitForElementVisible('body')
            .click("a#nav-link-accountList")
            .waitForElementVisible('form.auth-validate-form.auth-real-time-validation.a-spacing-none')
            .setValue("input#ap_email", username)
            .click("input#continue")
            .setValue("input#ap_password", password)
            .click("input#signInSubmit")
            .assert.containsText("span.nav-line-1", "Hallo, Mister")
   },

}