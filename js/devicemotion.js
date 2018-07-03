if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {

        document.getElementById("xRotation").innerHTML = 'x ' + event.rotateX.toFixed(2);
        document.getElementById("yRotation").innerHTML = 'y ' + event.rotateY.toFixed(2);
        document.getElementById("zRotation").innerHTML = 'z ' + event.rotateZ.toFixed(2);

    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}