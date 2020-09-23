(function () {
    const query = window.location.search
    const urlParams = new URLSearchParams(query)
    if (urlParams.get('url')) {
        document.getElementById('parent-url').value = urlParams.get('url')
        document.getElementsByTagName('form')[0].submit()
    }
})()
