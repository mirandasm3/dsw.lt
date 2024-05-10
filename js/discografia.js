document.addEventListener("DOMContentLoaded", function() {
    const albums = document.querySelectorAll(".albums-table img");

    albums.forEach(function(image) {
        image.addEventListener("click", function() {
            const albumLink = this.dataset.albumLink;
            if (albumLink) {
                window.open(albumLink, "_blank");
            }
        });
    });
});
