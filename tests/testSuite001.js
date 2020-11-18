module.exports = {
    'Site is open'(browser){
        browser
            .url('https://www.ebay-kleinanzeigen.de/')
            .waitForElementVisible('body')
            .assert.titleContains('eBay Kleinanzeigen | Kostenlos. Einfach. Lokal. Anzeigen gratis inserieren mit eBay Kleinanzeigen')
            .assert.containsText('.splitheader--title','Kategorien')
    }
}