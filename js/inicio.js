document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll("#gallery img");
    const prevButton = document.querySelector(".here_button");
    const nextButton = document.querySelector(".next_button");
    let currentImageIndex = 0;

    function showCurrentImage() {
        galleryImages.forEach((image, index) => {
            if (index === currentImageIndex) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }
        showCurrentImage();
    }

    function prevImage() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        }
        showCurrentImage();
    }

    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    showCurrentImage();
});
