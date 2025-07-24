

document.addEventListener('DOMContentLoaded', function() {
  const teamTrack = document.querySelector('.team-track');
  const teamCards = document.querySelectorAll('.team-card');
  const leftBtn = document.querySelector('.team-btn.left');
  const rightBtn = document.querySelector('.team-btn.right');
  let currentIndex = 0;
  const cardsToShow = 3;

  function updateTeamSlider() {
    const cardWidth = teamCards[0].offsetWidth + 18; // 18px gap
    // Infinite loop logic
    if (currentIndex < 0) currentIndex = teamCards.length - cardsToShow;
    if (currentIndex > teamCards.length - cardsToShow) currentIndex = 0;
    teamTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  leftBtn.addEventListener('click', () => {
    currentIndex--;
    updateTeamSlider();
  });

  rightBtn.addEventListener('click', () => {
    currentIndex++;
    updateTeamSlider();
  });

  window.addEventListener('resize', updateTeamSlider);
  updateTeamSlider();
});


document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.localities-track');
    const cards = document.querySelectorAll('.locality-card');
    const leftBtn = document.querySelector('.localities-btn.left');
    const rightBtn = document.querySelector('.localities-btn.right');
    let currentIndex = 0;
    const cardsToShow = 4;
  
    function updateSlider() {
      const cardWidth = cards[0].offsetWidth + 18; // 18px gap
      // Infinite loop logic
      if (currentIndex < 0) currentIndex = cards.length - cardsToShow;
      if (currentIndex > cards.length - cardsToShow) currentIndex = 0;
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  
    leftBtn.addEventListener('click', () => {
      currentIndex--;
      updateSlider();
    });
  
    rightBtn.addEventListener('click', () => {
      currentIndex++;
      updateSlider();
    });
  
    window.addEventListener('resize', updateSlider);
    updateSlider();
  });

  document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.bbs-track');
  const cards = document.querySelectorAll('.bbs-card');
  const leftBtn = document.querySelector('.bbs-btn.left');
  const rightBtn = document.querySelector('.bbs-btn.right');
  let currentIndex = 0;
  const cardsToShow = 4;

  if (!track || cards.length === 0 || !leftBtn || !rightBtn) {
    console.error("Bottom banner slider elements not found!");
    return;
  }

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 18; // 18px gap
    if (currentIndex < 0) currentIndex = cards.length - cardsToShow;
    if (currentIndex > cards.length - cardsToShow) currentIndex = 0;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  leftBtn.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
  });

  rightBtn.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
  });

  window.addEventListener('resize', updateSlider);
  updateSlider();
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.left-carousel .carousel-slide');
    const prevBtn = document.querySelector('.left-carousel .carousel-btn.prev');
    const nextBtn = document.querySelector('.left-carousel .carousel-btn.next');
    let current = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
  
    if (prevBtn && nextBtn && slides.length) {
      prevBtn.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      });
  
      nextBtn.addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
      });
  
      showSlide(current);
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.fullwidth-slider .slider-slide');
    const leftBtn = document.querySelector('.fullwidth-slider .slider-btn.left');
    const rightBtn = document.querySelector('.fullwidth-slider .slider-btn.right');
    let current = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
  
    if (leftBtn && rightBtn && slides.length) {
      leftBtn.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      });
  
      rightBtn.addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
      });
  
      showSlide(current);
    }
  });





// Animate sections on scroll
function animateSectionsOnScroll() {
  const sections = document.querySelectorAll('.section-animate');
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  });
}

window.addEventListener('scroll', animateSectionsOnScroll);
window.addEventListener('DOMContentLoaded', animateSectionsOnScroll);

// Animate text on scroll
function animateTextOnScroll() {
  const texts = document.querySelectorAll('.text-animate');
  const triggerBottom = window.innerHeight * 0.92;

  texts.forEach(text => {
    const textTop = text.getBoundingClientRect().top;
    if (textTop < triggerBottom) {
      text.classList.add('in-view');
    } else {
      text.classList.remove('in-view');
    }
  });
}

window.addEventListener('scroll', animateTextOnScroll);
window.addEventListener('DOMContentLoaded', animateTextOnScroll);

// Banner text animation on load and scroll
// This will animate .text-animate elements in the .banner section

document.addEventListener("DOMContentLoaded", function() {
  const banner = document.querySelector('.banner');
  const animatedTexts = banner ? banner.querySelectorAll('.text-animate') : [];

  function animateBannerText() {
    animatedTexts.forEach(el => el.classList.add('in-view'));
  }

  // Intersection Observer for scroll into view
  if ('IntersectionObserver' in window && banner) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateBannerText();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(banner);
  } else {
    // Fallback: animate on load
    animateBannerText();
  }
});















// $(document).ready(function(){
//   const options = $(".option");
//   let currentIndex = 0;
//   let interval;
//   let isPausedByClick = false;

//   function setActive(index) {
//     options.removeClass("active zoom");
//     options.eq(index).addClass("active");
//   }

//   function nextSlide() {
//     if (!isPausedByClick) {
//     currentIndex = (currentIndex + 1) % options.length;
//     setActive(currentIndex);
//     }
//   }

//   function startAutoplay() {
//     interval = setInterval(nextSlide, 3000);
//   }

//   function stopAutoplay() {
//     clearInterval(interval);
//   }

//   // Pause autoplay ONLY when mouse is inside the slider
//   $(".options").on("mouseenter", function() {
//     if (!isPausedByClick) stopAutoplay();
//   });
//   $(".options").on("mouseleave", function() {
//     if (!isPausedByClick) startAutoplay();
//   });

//   // Zoom effect on click
//   options.on("click", function(){
//     stopAutoplay();
//     isPausedByClick = true;
//     currentIndex = $(this).index();
//     setActive(currentIndex);
//     $(this).addClass("zoom");
//   });

//   $(".video-toggle").on("click", function (e) {
//     e.stopPropagation(); // prevent it from affecting the slider
//     const $btn = $(this);
//     const $video = $btn.siblings("video")[0];
  
//     if ($video.paused) {
//       $video.play();
//       $btn.find(".icon").text("⏸"); // Change to pause icon
//     } else {
//       $video.pause();
//       $btn.find(".icon").text("▶"); // Change to play icon
//     }
//   });
// $(".video-toggle").on("click", function (e) {
//   e.stopPropagation();
//   const $btn = $(this);
//   const $video = $btn.siblings("video")[0];

//   if ($video.paused) {
//     $video.play();
//     $btn.find(".icon").text("⏸"); // Show pause icon
//   } else {
//     $video.pause();
//     $btn.find(".icon").text("▶"); // Show play icon
//   }
// });
  
//   // Start autoplay initially
//   startAutoplay();

  

// });


$(document).ready(function () {
  const options = $(".option");
  let currentIndex = 0;
  let interval;
  let isPausedByClick = false;

  function setActive(index) {
    options.removeClass("active zoom");
    options.eq(index).addClass("active");
  }

  function nextSlide() {
    if (!isPausedByClick) {
      currentIndex = (currentIndex + 1) % options.length;
      setActive(currentIndex);
    }
  }

  function startAutoplay() {
    interval = setInterval(nextSlide, 3000);
  }

  function stopAutoplay() {
    clearInterval(interval);
  }

  // Pause on hover
  $(".options").on("mouseenter", function () {
    if (!isPausedByClick) stopAutoplay();
  });
  $(".options").on("mouseleave", function () {
    if (!isPausedByClick) startAutoplay();
  });

  // Zoom and pause autoplay on click
  options.on("click", function () {
    stopAutoplay();
    isPausedByClick = true;
    currentIndex = $(this).index();
    setActive(currentIndex);
    $(this).addClass("zoom");
  });

  // 🔁 Video toggle: play/pause current, pause all others
  $(".video-toggle").on("click", function (e) {
    e.stopPropagation();
    const $btn = $(this);
    const $currentOption = $btn.closest(".option");
    const $currentVideo = $currentOption.find("video")[0];

    // Pause all other videos & reset all buttons
    $(".option").each(function () {
      const video = $(this).find("video")[0];
      const icon = $(this).find(".video-toggle .icon");
      if (video !== $currentVideo) {
        video.pause();
        icon.text("▶");
      }
    });

    // Toggle current video
    if ($currentVideo.paused) {
      $currentVideo.play();
      $btn.find(".icon").text("⏸");
    } else {
      $currentVideo.pause();
      $btn.find(".icon").text("▶");
    }
  });
function generatePosterFromVideo(videoElement) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  videoElement.addEventListener("loadeddata", () => {
    // Seek to 1 second
    videoElement.currentTime = 1;
  });

  videoElement.addEventListener("seeked", () => {
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    const posterImage = canvas.toDataURL("image/jpeg");
    videoElement.setAttribute("poster", posterImage);
  });
}

$(document).ready(() => {
  const video = document.getElementById("myVideo");
  generatePosterFromVideo(video);
});

  // Start autoplay
  startAutoplay();
});





