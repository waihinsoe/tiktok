const VIDEO_TAG = Array.from(
    document.querySelectorAll('.video-list-item video')
  );
  
  const videosList = document.querySelector('.video-list');
  let isSoundOn = false;
  let currentVisibleVideoTag;
  
  const soundTag = document.querySelector('.sound');
  soundTag.addEventListener('click', () => {
    isSoundOn = !isSoundOn; 
    if(isSoundOn){
      soundTag.innerHTML = `<i class="bx bx-volume-full"></i>`;
    }else{
      soundTag.innerHTML = `<i class='bx bx-volume-mute'></i>`;
  
    }
    currentVisibleVideoTag.muted = isSoundOn ? false : true;
  
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((elem) => {
      const children = elem.target.childNodes;
      if (elem.isIntersecting) {
        currentVisibleVideoTag = children[5];
        currentVisibleVideoTag.muted = isSoundOn ? false : true;
        currentVisibleVideoTag.play();
  
      } else {
        children[5].pause();
        children[5].currentTime = 0;
      }
    });
  });
  
  document
    .querySelectorAll('.video-list-item')
    .forEach((elem) => observer.observe(elem));
  
  const VIDEO_LIST_TAG = document.querySelector(
    '.wrapper  .video-list'
  );
  
  
  VIDEO_TAG.map((video) => {
    const PLAY_PAUSE_TAG = Array.from(
      document.querySelectorAll('.play-pause')
    );
    let isOpened = true;
    video.addEventListener('click', () => {
      if (isOpened) {
        video.pause();
        isOpened = false;
  
        PLAY_PAUSE_TAG.map((item) => {
          item.innerHTML = `<i class='bx bx-pause bx-flip-vertical' ></i>`;
          setTimeout(() => {
            item.innerHTML = ' ';
          }, 300);
        });
      } else {
        video.play();
        isOpened = true;
        PLAY_PAUSE_TAG.map((item) => {
          item.innerHTML = `<i class='bx bx-play bx-flip-vertical' ></i>`;
          setTimeout(() => {
            item.innerHTML = ' ';
          }, 300);
        });
      }
  
      VIDEO_LIST_TAG.addEventListener('scroll', () => {
        // video.pause();
        isOpened = true;
      });
    });
  });
  
  const TOP_MENU_ITEMS_TAG = Array.from(
    document.querySelectorAll('.top-menu-item')
  );
  
  TOP_MENU_ITEMS_TAG.map((item) => {
    item.addEventListener('click', () => {
      TOP_MENU_ITEMS_TAG.map((item) => {
        item.classList.remove('top-menu-item-active');
      });
      item.classList.add('top-menu-item-active');
    });
  });
  
  const BOTTOM_NAV_LI_TAG = Array.from(
    document.querySelectorAll('.bottom-nav ul li')
  );
  // const BOTTOM_NAV_I_TAG = Array.from(document.querySelectorAll(".bottom-nav ul li i"));
  // const BOTTOM_NAV_SPAN_TAG = Array.from(document.querySelectorAll(".bottom-nav ul li span"));
  
  BOTTOM_NAV_LI_TAG.map((item) => {
    if (item.className === 'no-select') {
      return;
    }
    item.addEventListener('click', () => {
      const first = item.firstElementChild;
      const last = item.lastElementChild;
      BOTTOM_NAV_LI_TAG.map((li) => {
        const first = li.firstElementChild;
        const last = li.lastElementChild;
  
        first.style.color = 'rgb(170, 170, 170)';
        last.style.color = 'rgb(170, 170, 170)';
      });
      first.style.color = '#fff';
      last.style.color = '#fff';
    });
  });
  