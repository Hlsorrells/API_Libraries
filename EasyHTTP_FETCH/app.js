// Click listeners for each of the buttons
document.getElementById('button1').addEventListener('click', getText);

// Get local text file data
function getText() {
    fetch('sampleText.txt')
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log(err);
        });
}
