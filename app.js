// ==========================================================================
// Frugální inženýr - Lightweight Client UI Engine (SSG Enhanced)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. DOM Elements
    const readingProgress = document.getElementById('reading-progress');
    const postView = document.getElementById('post-view');
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    // 2. Cached State & Layout Variables
    let postHeight = 0;
    let postOffset = 0;
    let isScrollBtnVisible = false;
    let ticking = false;

    // 3. Cache geometric properties (avoid reading layout in scroll events)
    function calculateDimensions() {
        if (postView) {
            postHeight = postView.scrollHeight;
            postOffset = postView.offsetTop;
        }
    }

    // 4. Batch DOM updates inside requestAnimationFrame
    function updateUI() {
        const scrolled = window.scrollY;
        
        // Update Scroll-to-top button visibility (only mutate DOM on change)
        if (scrollTopBtn) {
            const shouldBeVisible = scrolled > 300;
            if (shouldBeVisible !== isScrollBtnVisible) {
                isScrollBtnVisible = shouldBeVisible;
                if (shouldBeVisible) {
                    scrollTopBtn.classList.add('show');
                } else {
                    scrollTopBtn.classList.remove('show');
                }
            }
        }

        // Update Reading Progress Bar
        const isPostActive = postView && postView.style.display !== 'none';
        if (isPostActive && readingProgress) {
            const viewportHeight = window.innerHeight;
            const scrolledOnPost = scrolled - postOffset;
            const scrollableHeight = postHeight - viewportHeight;

            if (scrollableHeight > 0) {
                const percentage = Math.min(Math.max((scrolledOnPost / scrollableHeight) * 100, 0), 100);
                readingProgress.style.width = `${percentage}%`;
            } else {
                readingProgress.style.width = '0%';
            }
        }

        ticking = false;
    }

    // 5. Scroll and Resize Event Listeners (Passive & Debounced)
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateUI);
            ticking = true;
        }
    }, { passive: true });

    window.addEventListener('resize', () => {
        calculateDimensions();
        if (!ticking) {
            window.requestAnimationFrame(updateUI);
            ticking = true;
        }
    }, { passive: true });

    // 6. Scroll To Top Click Handler
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 7. Initial measurements and paint
    calculateDimensions();
    updateUI();
});
