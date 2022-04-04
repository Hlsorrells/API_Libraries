class EasyHTTP {
    // Make an HTTP GET Request Method
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
}