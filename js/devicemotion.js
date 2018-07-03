if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {

        document.getElementById("xRotation").innerHTML = 'x ' + event.rotationRate.x.toFixed(2);
        document.getElementById("yRotation").innerHTML = 'y ' + event.rotationRate.y.toFixed(2);
        document.getElementById("zRotation").innerHTML = 'z ' + event.rotationRate.z.toFixed(2);

    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}