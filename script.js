function makeRequest (method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

let request1 = makeRequest('GET', 'http://demo4774019.mockable.io/thirdTask');
let request2 = makeRequest('GET', 'http://demo4774019.mockable.io/thirdTaskSecond');

Promise.all([request1, request2])
    .then(res => console.log('Оба ответа получены'))
    .catch(err => console.error(err));