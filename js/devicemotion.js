if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {

        document.getElementById("xRotation").innerHTML = 'x ' + event.rotationRate.alpha.toFixed(2);
        document.getElementById("yRotation").innerHTML = 'y ' + event.rotationRate.beta.toFixed(2);
        document.getElementById("zRotation").innerHTML = 'z ' + event.rotationRate.gamma.toFixed(2);

    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}