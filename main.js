window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        location.reload();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    function initializeCarousel(selector, perViewCount) {
        const glide = new Glide(selector, {
            type: 'carousel',
            startAt: 2,
            perView: perViewCount,
            focusAt: 'center'
        });
        glide.mount();

        glide.on('move', () => {
            const bullets = document.querySelectorAll('.glide__bullet');
            const activeIndex = glide.index;
    
            bullets.forEach((bullet, index) => {
                bullet.classList.toggle('active', index === activeIndex);
            });
        });
    
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
    
        prevButton.addEventListener('click', () => {
            glide.go('<');
        });
    
        nextButton.addEventListener('click', () => {
            glide.go('>');
        });
    
        const bullets = document.querySelectorAll('.glide__bullet');
    
        bullets.forEach((bullet, index) => {
            bullet.addEventListener('click', () => {
                glide.go(`=${index}`);
            });
    
            if (index === Math.floor(bullets.length / 2)) {
                bullet.classList.add('active');
            }
        });
    }
    
    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
        initializeCarousel('.product-carousel', 1);
    } else {
        initializeCarousel('.product-carousel', 5);
    }
});
