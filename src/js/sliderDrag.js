//Галерея самокатов 

function init() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        const SegwayClassName = 'slider'; 
        const SegwayLineClassName = 'slider__line'; 
        const SegwaySlideClassName= 'slider__segway'; 
        const SegwayDraggableClassName = 'slider__draggable'
        
        class Gallery {
            constructor(element, options = {}) {
                this.containerNode = element;
                this.size = element.childElementCount;
                this.currentSlide = 0;
                this.currentSlideWasChanget = false;
        
        
                this.manageHTML = this.manageHTML.bind(this);
                this.setParameters = this.setParameters.bind(this);
                this.setEvents = this.setEvents.bind(this);
                this.resizeGallery = this.resizeGallery.bind(this);
                this.startDrag = this.startDrag.bind(this);
                this.stopDrag = this.stopDrag.bind(this);
                this.dragging = this.dragging.bind(this);
                this.setStylePosition = this.setStylePosition.bind(this);
                this.settings = {
                    margin: options.margin || 0
                }
        
        
                this.manageHTML();
                this.setParameters();
                this.setEvents();
            }
        
            manageHTML() {
                this.containerNode.classList.add(SegwayClassName);
                this.containerNode.innerHTML = `
                    <div class="${SegwayLineClassName}">
                        ${this.containerNode.innerHTML}
                    </div>
                `
                this.lineNode = this.containerNode.querySelector(`.${SegwayLineClassName}`);
        
                this.slideNodes = Array.from(this.lineNode.children).map((childNode) => 
                    wrapElementByDiv ({
                        element: childNode,
                        className: SegwaySlideClassName
                    })
                )
            }
        
            setParameters() {
                const coordsContainer = this.containerNode.getBoundingClientRect();
                this.width = coordsContainer.width;
                this.x = -this.currentSlide * (this.width + this.settings.margin);
                this.maximumX = -(this.size) * (this.width + this.settings.margin);
        
                this.resetStyleTransition();
                this.lineNode.style.width = `${this.size * (this.width + this.settings.margin)}px`;
                this.setStylePosition();
                Array.from(this.slideNodes).forEach((slideNode) => {
                    slideNode.style.width = `${this.width}px`;
                    slideNode.style.marginRight = `${this.settings.margin}px`
                })
            }
        
            setEvents() {
                this.debouncedResizeGallery = debounce(this.resizeGallery);
                window.addEventListener('resize', this.debouncedResizeGallery);
                this.lineNode.addEventListener('pointerdown', this.startDrag);
                window.addEventListener('pointerup', this.stopDrag);
                window.addEventListener('pointercancel', this.stopDrag);
            }
        
            destroyEvents() {
                window.removeEventListener('resize', this.debouncedResizeGallery);
                this.lineNode.removeEventListener('pointerdown', this.startDrag);
                window.removeEventListener('pointerup', this.stopDrag);
                window.removeEventListener('pointercancel', this.stopDrag);
            }
        
            resizeGallery() {
                this.setParameters()
            }
        
            startDrag(evt) {
                this.currentSlideWasChanget = false;
                this.clickX = evt.pageX;
                this.startX = this.x; 
                window.addEventListener('pointermove', this.dragging);
        
                this.resetStyleTransition();
                this.containerNode.classList.add(SegwayDraggableClassName)
            }
        
            stopDrag() {
                window.removeEventListener('pointermove', this.dragging);
                this.x = -this.currentSlide * (this.width + this.settings.margin);
                
                this.containerNode.classList.remove(SegwayDraggableClassName)
        
                this.setStylePosition();
                this.setStyleTransition();
            }
        
            dragging(evt) {
                this.dragX = evt.pageX;
                const dragShift = this.dragX - this.clickX;
                const easing = dragShift / 5;
                this.x = Math.max(Math.min(this.startX + dragShift, easing), this.maximumX + easing);
        
                this.setStylePosition()
        
                if(
                    dragShift > 20 &&
                    dragShift > 0 &&
                    !this.currentSlideWasChanget &&
                    this.currentSlide > 0
                ) {
                    this.currentSlideWasChanget = true;
                    this.currentSlide = this.currentSlide - 1;    
                }
        
                if(
                    dragShift < -20 &&
                    dragShift < 0 &&
                    !this.currentSlideWasChanget &&
                    this.currentSlide < this.size - 1
                ) {
                    this.currentSlideWasChanget = true;
                    this.currentSlide = this.currentSlide + 1;    
                }
            }
        
            setStylePosition() {
                this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)`
            }
        
            setStyleTransition() {
                this.lineNode.style.transition = `all 0.4s ease 0s`
            }
        
            resetStyleTransition() {
                this.lineNode.style.transition = `all 0s ease 0s`
            }
        
        }
        
        function wrapElementByDiv({element, className}) {
            const wrapperNode = document.createElement('div');
            wrapperNode.classList.add(className);
        
            element.parentNode.insertBefore(wrapperNode, element);
            wrapperNode.appendChild(element);
        
            return wrapperNode;
        }
        
        function debounce (func, time = 100) {
            let timer;
            return function (event) {
                clearTimeout(time);
                time = setTimeout(func, time, event)
            }
        }
        
        new Gallery(document.getElementById('slider-2'), {
            margin: 10
        })
    }
    if (window.matchMedia("(max-width: 420px)").matches) {
        const SegwayClassName = 'slider'; 
        const SegwayLineClassName = 'slider__line'; 
        const SegwaySlideClassName= 'slider__segway'; 
        const SegwayDraggableClassName = 'slider__draggable'
        
        class Gallery {
            constructor(element, options = {}) {
                this.containerNode = element;
                this.size = element.childElementCount;
                this.currentSlide = 0;
                this.currentSlideWasChanget = false;
        
        
                this.manageHTML = this.manageHTML.bind(this);
                this.setParameters = this.setParameters.bind(this);
                this.setEvents = this.setEvents.bind(this);
                this.resizeGallery = this.resizeGallery.bind(this);
                this.startDrag = this.startDrag.bind(this);
                this.stopDrag = this.stopDrag.bind(this);
                this.dragging = this.dragging.bind(this);
                this.setStylePosition = this.setStylePosition.bind(this);
                this.settings = {
                    margin: options.margin || 0
                }
        
        
                this.manageHTML();
                this.setParameters();
                this.setEvents();
            }
        
            manageHTML() {
                this.containerNode.classList.add(SegwayClassName);
                this.containerNode.innerHTML = `
                    <div class="${SegwayLineClassName}">
                        ${this.containerNode.innerHTML}
                    </div>
                `
                this.lineNode = this.containerNode.querySelector(`.${SegwayLineClassName}`);
        
                this.slideNodes = Array.from(this.lineNode.children).map((childNode) => 
                    wrapElementByDiv ({
                        element: childNode,
                        className: SegwaySlideClassName
                    })
                )
            }
        
            setParameters() {
                const coordsContainer = this.containerNode.getBoundingClientRect();
                this.width = coordsContainer.width;
                this.x = -this.currentSlide * (this.width + this.settings.margin);
                this.maximumX = -(this.size) * (this.width + this.settings.margin);
        
                this.resetStyleTransition();
                this.lineNode.style.width = `${this.size * (this.width + this.settings.margin)}px`;
                this.setStylePosition();
                Array.from(this.slideNodes).forEach((slideNode) => {
                    slideNode.style.width = `${this.width}px`;
                    slideNode.style.marginRight = `${this.settings.margin}px`
                })
            }
        
            setEvents() {
                this.debouncedResizeGallery = debounce(this.resizeGallery);
                window.addEventListener('resize', this.debouncedResizeGallery);
                this.lineNode.addEventListener('pointerdown', this.startDrag);
                window.addEventListener('pointerup', this.stopDrag);
                window.addEventListener('pointercancel', this.stopDrag);
            }
        
            destroyEvents() {
                window.removeEventListener('resize', this.debouncedResizeGallery);
                this.lineNode.removeEventListener('pointerdown', this.startDrag);
                window.removeEventListener('pointerup', this.stopDrag);
                window.removeEventListener('pointercancel', this.stopDrag);
            }
        
            resizeGallery() {
                this.setParameters()
            }
        
            startDrag(evt) {
                this.currentSlideWasChanget = false;
                this.clickX = evt.pageX;
                this.startX = this.x; 
                window.addEventListener('pointermove', this.dragging);
        
                this.resetStyleTransition();
                this.containerNode.classList.add(SegwayDraggableClassName)
            }
        
            stopDrag() {
                window.removeEventListener('pointermove', this.dragging);
                this.x = -this.currentSlide * (this.width + this.settings.margin);
                
                this.containerNode.classList.remove(SegwayDraggableClassName)
        
                this.setStylePosition();
                this.setStyleTransition();
            }
        
            dragging(evt) {
                this.dragX = evt.pageX;
                const dragShift = this.dragX - this.clickX;
                const easing = dragShift / 5;
                this.x = Math.max(Math.min(this.startX + dragShift, easing), this.maximumX + easing);
        
                this.setStylePosition()
        
                if(
                    dragShift > 20 &&
                    dragShift > 0 &&
                    !this.currentSlideWasChanget &&
                    this.currentSlide > 0
                ) {
                    this.currentSlideWasChanget = true;
                    this.currentSlide = this.currentSlide - 1;    
                }
        
                if(
                    dragShift < -20 &&
                    dragShift < 0 &&
                    !this.currentSlideWasChanget &&
                    this.currentSlide < this.size - 1
                ) {
                    this.currentSlideWasChanget = true;
                    this.currentSlide = this.currentSlide + 1;    
                }
            }
        
            setStylePosition() {
                this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)`
            }
        
            setStyleTransition() {
                this.lineNode.style.transition = `all 0.4s ease 0s`
            }
        
            resetStyleTransition() {
                this.lineNode.style.transition = `all 0s ease 0s`
            }
        
        }
        
        function wrapElementByDiv({element, className}) {
            const wrapperNode = document.createElement('div');
            wrapperNode.classList.add(className);
        
            element.parentNode.insertBefore(wrapperNode, element);
            wrapperNode.appendChild(element);
        
            return wrapperNode;
        }
        
        function debounce (func, time = 100) {
            let timer;
            return function (event) {
                clearTimeout(time);
                time = setTimeout(func, time, event)
            }
        }
        
        new Gallery(document.getElementById('slider-3'), {
            margin: 10
        })
    }
}

init()
document.addEventListener('resize', init)