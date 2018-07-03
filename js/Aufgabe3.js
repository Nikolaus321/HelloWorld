var checkbox = document.querySelector("input[id=radio0]");
checkbox.addEventListener('change', function() {
    if (this.checked) {
        alert('Sie haben Pizza zum Mittagessen gewählt.');
    } else {
        // Checkbox is not checked..
        alert('Sie haben kein essen gewählt.');
    }
});
var checkbox = document.querySelector("input[id=radio1]");
checkbox.addEventListener('change', function() {
    if (this.checked) {
        alert('Sie haben Currywurst zum Mittagessen gewählt.');
    } else {
        // Checkbox is not checked..
        alert('Sie haben kein essen gewählt.');
    }
});
var checkbox = document.querySelector("input[id=radio2]");
checkbox.addEventListener('change', function() {
    if (this.checked) {
        alert('Sie haben Linsensuppe zum Mittagessen gewählt.');
    } else {
        // Checkbox is not checked..
        alert('Sie haben kein essen gewählt.');
    }
});