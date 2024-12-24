document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the "animate" class
    var animatedElements = document.querySelectorAll('.animate');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight * 3 / 4 &&
            rect.bottom >= 0
        );
    }

    function handleScroll() {
        animatedElements.forEach(function (el) {
            // Check if each element is in the viewport
            if (isElementInViewport(el)) {
                // Add the specific animation class to trigger the animation
                el.classList.add('fade-in');
            }
        });

        // Filter out elements that have been animated and remove them from the list
        animatedElements = Array.prototype.filter.call(animatedElements, function (el) {
            return !el.classList.contains('fade-in');
        });

        // If all elements have been animated, remove the scroll event listener
        if (animatedElements.length === 0) {
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Add a scroll event listener to trigger the animation
    window.addEventListener('scroll', handleScroll);

    // Trigger the check on page load
    handleScroll();
});







//    counter animation
let hasScrolled = false;
let happyTravelersCounted = false;
let destinationsCounted = false;
let positiveReviewsCounted = false;


function startCounting(elementId, targetValue, showPlus = true) {
    const element = document.getElementById(elementId);
    let currentValue = 0;
    const increment = 5; // Adjust this value for speed
    const animationDuration = 2000; // Adjust this value for the animation duration

    function updateCount(timestamp) {
        if (!currentValue) currentValue = timestamp;

        const progress = (timestamp - currentValue) / animationDuration;
        const incrementValue = Math.ceil(targetValue * progress);

        if (incrementValue < targetValue) {
            element.textContent = showPlus ? `${incrementValue.toLocaleString()}%` : `${incrementValue.toLocaleString()}`;
            requestAnimationFrame((timestamp) => updateCount(timestamp));
        } else {
            element.textContent = showPlus ? `${targetValue.toLocaleString()}%` : `${targetValue.toLocaleString()}`;
        }
    }

    requestAnimationFrame((timestamp) => updateCount(timestamp));
}

function handleVisibility() {
    if (!hasScrolled) {
        // If user hasn't scrolled, set the flag to true and return
        hasScrolled = true;
        return;
    }

    const happyTravelersElement = document.getElementById("happyTravelersCount");
    const destinationsElement = document.getElementById("destinationsCount");
    const positiveReviewsElement = document.getElementById("positiveReviewsCount");

    if (!happyTravelersCounted && isInViewport(happyTravelersElement)) {
        startCounting("happyTravelersCount", 100);
        happyTravelersCounted = true;
    }

    if (!destinationsCounted && isInViewport(destinationsElement)) {
        startCounting("destinationsCount", 97);
        destinationsCounted = true;
    }

    if (!positiveReviewsCounted && isInViewport(positiveReviewsElement)) {
        startCounting("positiveReviewsCount", 99);
        positiveReviewsCounted = true;
    }
}

function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight * 3 / 4 &&
        rect.bottom >= 0
    );
}

document.addEventListener("DOMContentLoaded", handleVisibility);
window.addEventListener("scroll", handleVisibility);

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
);
