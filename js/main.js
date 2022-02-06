'use strict';

window.addEventListener('DOMContentLoaded', () => {
  
  // =============================
  // common
  // =============================
  const body = document.querySelector('body');
  
  // =============================
  // hamburger
  // =============================
  const hamburgerButton = document.querySelector('.header__hamburger');
  const hamburgerButtonLine = document.querySelector('.header__hamburger-line');
  const headerNav = document.querySelector('.header__nav');
  const headerMask = document.querySelector('.header__mask');
  hamburgerButton.addEventListener('click', () => {
    headerNav.classList.toggle('header__nav--open');
    if(headerNav.classList.contains('header__nav--open')) {
      hamburgerButtonLine.classList.add('header__hamburger-line--active');
      headerMask.classList.add('header__mask--open');
      body.style.overflowY = 'hidden';
      return;
    }
    closeHamburger()
  });
  headerMask.addEventListener('click', () => {
    closeHamburger()
  });
  
  function closeHamburger() {
    body.style.overflowY = 'auto';
    hamburgerButtonLine.classList.remove('header__hamburger-line--active');
    headerNav.classList.remove('header__nav--open');
    headerMask.classList.remove('header__mask--open');
  }
  
  // =============================
  // page top
  // =============================
  const pageTop = document.querySelector('.page-top');
  window.addEventListener('scroll', () => {
    let topY = window.pageYOffset;
    if(topY <= 0) {
      pageTop.classList.remove('active');
    } else {
      pageTop.classList.add('active');
    }
  });

  pageTop.addEventListener('click', (e) => {
    e.preventDefault();
    const windowTop = 0;
    window.scroll({
      top: windowTop,
      behavior: "smooth",
    });
  });

  // =============================
  // animation
  // =============================
  const animationTargets = document.querySelectorAll('.animation');
  const animationOptions = {
    threshold: .3
  };
  const animationObs = new IntersectionObserver(animation, animationOptions);

  animationTargets.forEach(animationTarget => {
    animationObs.observe(animationTarget);
  });

  function animation(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      };
      entry.target.classList.add('animation--active');
      obs.unobserve(entry.target);
    });
  }

  // =============================
  // cover slide
  // =============================
  const coverSlideTargets = document.querySelectorAll('.cover-slide');
  const coverSlideOptions = {
    threshold: .6,
  };
  const coverSlideObs = new IntersectionObserver(coverSlide, coverSlideOptions);

  coverSlideTargets.forEach(coverSlideTarget =>{
    coverSlideObs.observe(coverSlideTarget);
  });

  function coverSlide(entries,obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      };
      entry.target.classList.add('cover-slide--active');
      obs.unobserve(entry.target);
    });

  };
  

  // =============================
  // resize
  // =============================
  const reloadBreakPoint = 767;
  let resizeFlag;
  if(reloadBreakPoint < window.innerWidth) {
    resizeFlag = false;
  } else {
    resizeFlag = true;
  };
  resizeWindow();

  function resizeWindow() {
    window.addEventListener('resize', () => {
      if(reloadBreakPoint < window.innerWidth && resizeFlag) {
        window.location.reload();
        resizeFlag = false;
      } else if(reloadBreakPoint >= window.innerWidth && !(resizeFlag)) {
        resizeFlag = true;
      };
    });
  };
});
