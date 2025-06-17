class Carousel {
    constructor() {
        this.cacheDOMElements();
        this.assignEventListeners();
        this.isDragging = false;
        this.startX = 0;
        this.startScrollLeft = 0;
    }

    cacheDOMElements() {
        this.carousel = document.getElementById("carousel");
        this.carouselContainer = document.getElementById("carousel-container")
    }

    assignEventListeners() {
        this.carouselContainer.addEventListener("mousedown", this.startDragging.bind(this));
        document.addEventListener("mouseup", this.stopDragging.bind(this));
        this.carouselContainer.addEventListener("mousemove", this.moveOnDrag.bind(this));
    }

    moveOnDrag(event) {
        if (this.isDragging) {
            // This means: new position of the carousel = starting_position - (mouse_drag_end_pos - mouse_drag_start_pos)
            this.carousel.scrollLeft = this.startScrollLeft - (event.pageX - this.startX);
        }
    }

    startDragging(event) {
        this.isDragging = true;
        this.carousel.classList.add("dragged")
        /*NOTE on these 2 properties*/
        // pageX is the X position of the cursor at the moment of the event firing
        this.startX = event.pageX;
        // carousel.scrollLeft is the carousels' offset from its initial (leftmost) unscrolled position
        this.startScrollLeft = this.carousel.scrollLeft;
    }
    stopDragging() {
        this.isDragging = false;
        this.carousel.classList.remove("dragged")
    }
}

const pokemonCarousel = new Carousel;