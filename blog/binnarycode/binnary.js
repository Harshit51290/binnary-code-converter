function textToBinary() {
    let text = document.getElementById("inputText").value;
    let binary = '';
    for (let i = 0; i < text.length; i++) {
        binary += text[i].charCodeAt(0).toString(2) + ' ';
    }
    document.getElementById("inputBinary").value = binary.trim();
}

function binaryToText() {
    let binary = document.getElementById("inputBinary").value;
    let text = '';
    binary.split(' ').forEach(function (bin) {
        text += String.fromCharCode(parseInt(bin, 2));
    });
    document.getElementById("inputText").value = text;
}