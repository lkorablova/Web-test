const username = "testuser001foramazon@gmail.com"
const password = "Test001"
//click('a[href="/dashboard"]')
module.exports = {

    /*
    TC001 - Web site is open
    Test Steps: 
    1. Go to https://www.amazon.de/.
    2. Accept cookies.
    Expected Result: 
    1. The web site is open and the categories sidebar is shown.
    2. Title should be equal "Amazon.de: Günstige Preise für Elektronik & Foto, Filme, Musik, Bücher, Games, Spielzeug & mehr".
    
    */

    'Site is open'(browser){
        browser
            .url('https://www.amazon.de/')
            .waitForElementVisible('body')
            .click('xpath', '/html/body/div[1]/span/form/div[2]/span[1]/span/input')
            .assert.titleContains('Amazon.de: Günstige Preise für Elektronik & Foto, Filme, Musik, Bücher, Games, Spielzeug & mehr')
            .moveToElement('div#navFooter', 10, 10)
            .isVisible('div#navFooter', (result) => { 
                browser.assert.equal(result.value, true)
            })
    },

    /*
    TC002 - Open help for "Alexa-Skills" 
    Test Steps: 
    1. Go to https://www.amazon.de/.
    2. Scroll down till footer is visible.
    3. Select "Kundenservice".
    4. Select "Hilfe für digitale Dienste und Geräte.
    5. select "Alexa-Funktionen".
    6. Select "Alexa Skills".
    7. Select "Was sind Alexa Skills?"
    Expected Result: 
    1. I see message `Alexa Skills sind sprachaktivierte Apps, die Ihr Alexa-fähiges Gerät um zusätzliche Funktionen ergänzen.`
    */

   'Open help for "Alexa-Skills"'(browser){
        browser
            .url('https://www.amazon.de/')
            .waitForElementVisible('body')
            .waitForElementVisible('xpath', "/html/body/div[1]/div[5]/div[1]/div/div[7]/ul/li[10]/a")
            .click('xpath', "/html/body/div[1]/div[5]/div[1]/div/div[7]/ul/li[10]/a")
            .waitForElementVisible('xpath', '/html/body/div[2]/div[4]/div/div[1]/div[1]/div[3]/a')
            .click('xpath', '/html/body/div[2]/div[4]/div/div[1]/div[1]/div[3]/a')
            .waitForElementVisible('xpath', '/html/body/div[2]/div/div[3]/div[2]/a[2]')
            .click('xpath', '/html/body/div[2]/div/div[3]/div[2]/a[2]')
            .waitForElementVisible('xpath','/html/body/div[2]/div[2]/div[1]/div/div[3]/div/div[8]/div[2]/ul/li/span/a')
            .click('xpath','/html/body/div[2]/div[2]/div[1]/div/div[3]/div/div[8]/div[2]/ul/li/span/a')
            .waitForElementVisible('xpath','/html/body/div[2]/div[2]/div[1]/div/div[3]/div/div[2]/ul/li/span/a')
            .click('xpath','/html/body/div[2]/div[2]/div[1]/div/div[3]/div/div[2]/ul/li/span/a')
            .waitForElementPresent('xpath', "//p[contains(@class, 'lead') and text()=' Alexa Skills sind sprachaktivierte Apps, die Ihr Alexa-fähiges Gerät um zusätzliche Funktionen ergänzen. ']")
   },

   /*
    TC003 - Search for an item usign search bar
    Test Steps: 
    1. Go to https://www.amazon.de/.
    2. Type "Tisch" in search bar.
    3. Select one of the search results.
    Expected Result: 
    1. The details page is open.
    2. Price is visible.
   */

   
  'Search for an item usign search bar'(browser){
    browser
        .url('https://www.amazon.de/')
        .waitForElementVisible('body') 
        .setValue("input#twotabsearchtextbox","Tisch")
        .click('xpath','/html/body/div[1]/header/div/div[1]/div[2]/div/form/div[3]/div/span/input')
        .waitForElementVisible('xpath','/html/body/div[1]/div[2]/div[1]/div[2]/div/span[3]/div[2]/div[3]/div/span/div/div/div/div/div[2]/h2/a')
        .submitForm('xpath','/html/body/div[1]/header/div/div[1]/div[2]/div/form')
        .waitForElementVisible('xpath',"/html/body/div[1]/div[2]/div[1]/div[2]/div/span[3]/div[2]/div[3]/div/span/div/div/div/div/span/a")
        .click('xpath',"/html/body/div[1]/div[2]/div[1]/div[2]/div/span[3]/div[2]/div[3]/div/span/div/div/div/div/span/a")
        .waitForElementVisible('#price_inside_buybox')
    
    },

    /*
    TC004 - Search for an item through categories
    Test Steps: 
    1. Go to https://www.amazon.de/.
    2. Click on "Amazon Basics".
    3. Select "Mehr" -> "Büro".
    4. Select one of the search results.
    Expected Result: 
    1. The details page is open.
    2. Price is visible.
    */
   'Search for an item through categories'(browser){
    browser
        .url('https://www.amazon.de/')
        .waitForElementVisible('body') 
        .click('xpath','/html/body/div[1]/header/div/div[4]/div[2]/div[2]/div/a[2]')
        .click('xpath','/html/body/div[1]/div[2]/div/div[2]/div/div/div/div/div[3]/div[2]/div[2]/div[2]/nav/ul/li[22]/button')
        .waitForElementVisible('xpath','/html/body/div[1]/div[2]/div/div[2]/div/div/div/div/div[3]/div[2]/div[2]/div[3]/nav/div/ul/li[6]/a')
        .click('xpath','/html/body/div[1]/div[2]/div/div[2]/div/div/div/div/div[3]/div[2]/div[2]/div[3]/nav/div/ul/li[6]/a')
        .waitForElementVisible('xpath','/html/body/div[1]/div[2]/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/a')
        .click('xpath','/html/body/div[1]/div[2]/div/div[3]/div/div/div/div/div/div/div/div/div/div[2]/a')
        .waitForElementVisible('#priceblock_ourprice')
    },

    /*
    TC005 - Login verification
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
            .assert.containsText("span.a-size-medium.transaction-approval-word-break.a-text-bold", "Genehmigen Sie die Benachrichtigung, die gesendet wurde an:")
   },
}