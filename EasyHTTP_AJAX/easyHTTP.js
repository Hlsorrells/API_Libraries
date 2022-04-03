// Library uses prototypes in ES5 with AJAX

function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request Method
easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    // Capture the state of "this"
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}

// Example using ES6 arrow function to fix the lexical this
// easyHTTP.prototype.get = function(url) {
//     this.http.open('GET', url, true);
//     this.http.onload = () => {
//         if (this.http.status === 200) {
//             console.log(this.http.responseText)
//         }
//     }
//     this.http.send();
// }

// Make an HTTP POST Request Method
easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT Request Method

// Make an HTTP DELETE Request Method

