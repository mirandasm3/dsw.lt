document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll("#gallery img");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentImageIndex = 0;

    // Función para mostrar la imagen actual y ocultar las demás
    function showCurrentImage() {
        galleryImages.forEach((image, index) => {
            if (index === currentImageIndex) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    // Función para avanzar a la siguiente imagen
    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }
        showCurrentImage();
    }

    // Función para retroceder a la imagen anterior
    function prevImage() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        }
        showCurrentImage();
    }

    // Agregar eventos de clic a los botones de navegación
    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    // Mostrar la primera imagen al cargar la página
    showCurrentImage();
});
