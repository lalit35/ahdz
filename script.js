
document.getElementById('loginButton').addEventListener('click', () => {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (userId === "testUser" && password === "LKumar212") {
        // Navigate to the next page with animation
        document.querySelector('.container').style.animation = "fadeOut 0.5s ease-in-out";
        setTimeout(() => {
            window.location.href = 'photo-capture.html';
        }, 500);
    } else {
        // Show error message
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
    }
});
document.getElementById('loginButton').addEventListener('click', () => {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if (!userId || password !== 'LKumar212') {
        alert("Invalid User ID or Password.");
        return;
    }

    window.location.href = 'photo-capture.html';
});
const video = document.getElementById('video');
const capturedImage = document.getElementById('capturedImage');
const capturedImageContainer = document.getElementById('capturedImageContainer');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.style.display = 'block';
        document.getElementById('capture').style.display = 'inline-block';
    })
    .catch(err => {
        alert("Unable to access the camera. Please check permissions.");
    });

document.getElementById('capture').addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    capturedImage.src = canvas.toDataURL('image/png');
    capturedImageContainer.style.display = 'block';
    video.style.display = 'none';
});

document.getElementById('nextButton').addEventListener('click', () => {
    window.location.href = 'id-card-capture.html';
});
const idCardVideo = document.getElementById('idCardVideo');
const idCardImageContainer = document.getElementById('idCardImageContainer');
const idCardImage = document.getElementById('idCardImage');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        idCardVideo.srcObject = stream;
        idCardVideo.style.display = 'block';
        document.getElementById('captureIdCard').style.display = 'inline-block';
    })
    .catch(err => {
        alert("Unable to access the camera. Please check permissions.");
    });

document.getElementById('captureIdCard').addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = idCardVideo.videoWidth;
    canvas.height = idCardVideo.videoHeight;
    context.drawImage(idCardVideo, 0, 0, canvas.width, canvas.height);
    idCardImage.src = canvas.toDataURL('image/png');
    idCardImageContainer.style.display = 'block';
});

document.getElementById('shareLocationButton').addEventListener('click', () => {
    window.location.href = 'final-message.html';
});
document.getElementById('logoutButton').addEventListener('click', () => {
    window.location.href = 'login.html';
});
