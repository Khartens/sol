//header burger
const headerBurger = document.querySelector('.burger');
const headerMenu = document.querySelector('.menu');
const linkMobile = document.querySelectorAll('.header__wrapper-mobile_nav-inner_item-link');
const linkMobileSubtitle = document.querySelectorAll('.header__wrapper-mobile_nav-inner_subtitle');
const bgActive = document.querySelector('.bg-active');
const body = document.body;
if(headerBurger) {
  const open = function () {
      headerBurger.isClick = true;
      headerMenu.classList.toggle('active');
      headerBurger.classList.toggle('active_menu');
      body.classList.toggle("noscroll");
      body.classList.toggle("bg");
      bgActive.classList.toggle('index');
  }
  headerBurger.addEventListener("click", function (e) {
    e.stopPropagation();
    open();
  });
  linkMobile.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });
  linkMobileSubtitle.forEach((link) => {
      link.addEventListener("click", closeOnClick);
  });
  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == headerMenu || headerMenu.contains(target);
    const its_btnMenu = target == headerBurger;
    const menu_is_active = headerMenu.classList.contains("active");
  
    if (!its_menu && !its_btnMenu && menu_is_active) {
      open();
    }
  });
  function closeOnClick() {
      headerMenu.classList.remove('active');
      headerBurger.classList.remove('active_menu');
      body.classList.remove("noscroll");
      body.classList.remove("bg");
      bgActive.classList.remove('index');
  }
}

//slider
document.querySelectorAll('.events__swiper').forEach(el => {
    let swiper = new Swiper(el, {
        speed: 600,
        spaceBetween: 10,
        pagination: {
            el: el.querySelector('.events-pagination'),
                clickable: true,
                type: "fraction",
        },
        navigation: {
            nextEl: el.querySelector('.events-next'),
            prevEl: el.querySelector('.events-prev')
        },
        loop: true,
        breakpoints: {
            690: {
                pagination: {
                    el: el.querySelector('.events-pagination'),
                        clickable: true,
                        dynamicBullets: true,
                        type: "bullets",
                },
            }
          }
    });
});
window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
        if (callback) {
          callback(swiper);
        }
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
    // const someFunc = (instance) => {
    //   if (instance) {
    //     instance.on('slideChange', function (e) {
    //       console.log('*** mySwiper.activeIndex', instance.activeIndex);
    //     });
    //   }
    // };
  
    resizableSwiper(
      '(max-width: 1230px)',
      '.team__box-swiper',
      {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        speed: 600,
        pagination: {
          el: '.team-pagination',
          clickable: true,
          type: "fraction",
        },
        navigation: {
            nextEl: '.team-next',
            prevEl: '.team-prev',
        },
        breakpoints: {
            890: {
                slidesPerView: 3,
            },
            690: {
                slidesPerView: 2,
            }
          }
        },
    //   someFunc
    );
  
    resizableSwiper(
      '(max-width: 1230px)',
      '.help__swiper',
      {
        allowTouchMove: false,
        loop: true,
        spaceBetween: 20,
        autoHeight: true,
        speed: 600,
        pagination: {
            el: '.help-pagination',
            clickable: true,
            type: "fraction",
        },
        navigation: {
            nextEl: '.help-next',
            prevEl: '.help-prev',
        },
        breakpoints: {
            690: {
                autoHeight: false,
                allowTouchMove:true,
                slidesPerView: 2,
            }
        }
      }
    );
    resizableSwiper(
        '(max-width: 955px)',
        '.news__swiper',
        {
            slidesPerView: 1,  
            loop: true,
            spaceBetween: 20,
            speed: 600,
            pagination: {
                el: '.news-pagination',
                type: "fraction",
            },
            navigation: {
                nextEl: '.news-next',
                prevEl: '.news-prev',
            },
            breakpoints: {
                690: {
                    slidesPerView: 2,
                }
            }
        }
      );
      resizableSwiper(
        '(max-width: 1230px)',
        '.upcoming__botoom-swiper',
        {
            slidesPerView: 1,  
            loop: true,
            spaceBetween: 0,
            speed: 600,
            allowTouchMove: false,
            pagination: {
                el: '.upcoming__botoom-pagination',
                type: "fraction",
            },
            navigation: {
                nextEl: '.upcoming__botoom-next',
                prevEl: '.upcoming__botoom-prev',
            },
            breakpoints: {
                955: {
                    slidesPerView: 2,
                    allowTouchMove: true,
                    spaceBetween: 20,
                }
            }
        }
      );
      resizableSwiper(
        '(max-width: 690px)',
        '.office__swiper',
        {
            slidesPerView: 1,  
            loop: true,
            spaceBetween: 10,
            speed: 600,
            pagination: {
                el: '.office-pagination',
                type: "fraction",
            },
            navigation: {
                nextEl: '.office-next',
                prevEl: '.office-prev',
            },
        }
      );
  });

//Аккордион
const projectsAccordion = document.querySelector(".projects");
const accordions = document.querySelectorAll(".accordion");
if(projectsAccordion) {
    document.addEventListener("DOMContentLoaded", () => {
        const accordions = document.querySelectorAll(".accordion");

        const openAccordion = (accordion) => {
            const content = accordion.querySelector(".accordion__content");
            accordion.classList.add("open");
            content.style.maxHeight = content.scrollHeight + "px";
        };
    
        const closeAccordion = (accordion) => {
            const content = accordion.querySelector(".accordion__content");
            accordion.classList.remove("open");
            content.style.maxHeight = null;
        };
    
        // Открываем первый элемент при загрузке
        openAccordion(accordions[0]);
    
        accordions.forEach((accordion) => {
            const intro = accordion.querySelector(".accordion__control");
            const content = accordion.querySelector(".accordion__content");
    
            intro.onclick = () => {
                if (content.style.maxHeight) {
                    closeAccordion(accordion);
                } else {
                    accordions.forEach((acc) => closeAccordion(acc));
                    openAccordion(accordion);

                }
            };
        });
    });
    document.addEventListener("DOMContentLoaded", () => {

        const accordionHeader = '.accordion__control';
        const delay = 800;
        const offset = 300;
    
            document.querySelectorAll(accordionHeader).forEach((header) => {
    
                header.addEventListener('click', () => {
    
                    setTimeout(() => {
                        window.scrollTo({
                            top: header.getBoundingClientRect().top + window.pageYOffset,
                            behavior: 'smooth'
                        });
                    }, delay);
                })
            })
        })
}
//показать еще аккордион 
const showMoreBtn = document.querySelector('.projects__show');
const projectsWrapper = document.querySelectorAll('.projects__wrapper').length;
const projectsLink = document.querySelector('.projects__link');
let itemsProgect = 10;
if(showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
        itemsProgect += 4;
      const array = Array.from(document.querySelector('.projects__list').children);
      const visItems = array.slice(0 , itemsProgect);
    
      visItems.forEach(el => el.classList.add('is-visible'));
        
      if(visItems.length === projectsWrapper) {
        showMoreBtn.style.display = 'none';
      }
      projectsLink.classList.add('active')

    });
    function getLastVisibleDiv() {
        return Array.from(document.querySelectorAll('.projects__wrapper'))
                    .reverse()
                    .find(div => div.offsetParent !== null);
    }
}

//video
// Получаем все элементы с классом "values__content-slider_slide-flex_photo"
// const photoElements = document.querySelectorAll('.values__content-slider_slide-flex_photo');
// let isVideoPlaying = false;
// let currentVideo = null;

// photoElements.forEach(photoElement => {
//     const videos = photoElement.querySelectorAll('.values__content-slider_slide-flex_photo-video');

//     videos.forEach((video) => {
//         // Обработчик клика на фото
//         photoElement.addEventListener('click', () => {
//             // Добавляем класс photo-none
//             photoElement.classList.add('photo-none');
//             video.play();
//             isVideoPlaying = true;
//         });
//         video.addEventListener('click', (e) => {
//           e.stopPropagation();  // Останавливаем всплытие события
//           if (!isVideoPlaying) {
//             video.play();
//             isVideoPlaying = true;
//           } 
//         });
        
//     });
// });
const photoElements = document.querySelectorAll('.values__content-slider_slide-flex_photo');
let isVideoPlaying = false;
let currentVideo = null;

// Функция для паузы видео
function pauseVideo(video) {
    video.pause();
    isVideoPlaying = false;
    // video.currentTime = 0; // Сбросить время видео (по желанию)
    // currentVideo = null; // Сбросить текущее видео
}

// Обработчик клика для документа
document.addEventListener('click', (e) => {
    // Проверяем, есть ли текущее воспроизводимое видео
    if (isVideoPlaying && currentVideo) {
        // Проверяем, кликаем ли мы на элементе видео или его родителе
        if (!currentVideo.contains(e.target) && !currentVideo.closest('.values__content-slider_slide-flex_photo').contains(e.target)) {
            pauseVideo(currentVideo);
        }
    }
});

photoElements.forEach(photoElement => {
    const videos = photoElement.querySelectorAll('.values__content-slider_slide-flex_photo-video');

    videos.forEach((video) => {
        // Обработчик клика на фото
        photoElement.addEventListener('click', () => {
            // Добавляем класс photo-none
            photoElement.classList.add('photo-none');
            video.play();
            isVideoPlaying = true;
            currentVideo = video; // Запоминаем текущее видео
        });

        video.addEventListener('click', (e) => {
            e.stopPropagation();  // Останавливаем всплытие события
            if (!isVideoPlaying) {
                video.play();
                isVideoPlaying = true;
                currentVideo = video; // Запоминаем текущее видео
            } 
        });
    });
});

//big видео
document.addEventListener('DOMContentLoaded', function () {
  const videoElement = document.querySelector('.video__inner');
  const videoContainer = document.querySelector('.video');


  // 1. По клику на класс 'video' добавлять ему класс 'photo-none'
  videoContainer.addEventListener('click', function () {
      videoContainer.classList.add('photo-none');
  });

  // 2. Запускать видео с классом 'video__inner'
  videoContainer.addEventListener('click', function () {
      if (!isVideoPlaying) {
          videoElement.play();
          isVideoPlaying = true;
      }
  });

  // 3. Когда видео вне видимости останавливать его
  // const handleVisibilityChange = () => {
  //     const rect = videoContainer.getBoundingClientRect();
  //     const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

  //     if (!isVisible) {
  //         videoElement.pause();
  //         isVideoPlaying = false;
  //     }
  // };

  // Слушаем события прокрутки и изменения размера окна
  // window.addEventListener('scroll', handleVisibilityChange);
  // window.addEventListener('resize', handleVisibilityChange);

  // initial check
  // handleVisibilityChange();
});

//hover photo
const teamMinPhoto = document.querySelector('.team__box-slide_min_photo');
const teamBigPhoto = document.querySelector('.team__box-slide_big_photo');
const teamSlideMin = document.querySelector('.team__box-slide_min')
const teamMinText = document.querySelector('.team__box-slide_min_photo-text');
const teamBigText = document.querySelector('.team__box-slide_big_photo-text');
const teamHover3 = document.querySelector('.team__box-slide_hover-3');
const teamHover4 = document.querySelector('.team__box-slide_hover-4');
const teamHover5 = document.querySelector('.team__box-slide_hover-5');
if(teamMinPhoto) {
    if (document.documentElement.clientWidth > 1230) {
        function addHover () {
            teamBigPhoto.classList.add('hover');
            teamBigText.classList.add('hover');
        }
        function removeHover () {
            teamBigPhoto.classList.remove('hover');
            teamBigText.classList.remove('hover');
        }
        teamMinPhoto.addEventListener('mouseover', ()=> {
            teamSlideMin.classList.add('hover');
            addHover();
        })
        teamMinPhoto.addEventListener('mouseout', ()=> {
            teamSlideMin.classList.remove('hover');
            removeHover()
        })
        teamHover3.addEventListener('mouseover', ()=> {
            teamHover3.classList.add('hover');
            addHover();
        })
        teamHover3.addEventListener('mouseout', ()=> {
            teamHover3.classList.remove('hover');
            removeHover();
        })
        teamHover4.addEventListener('mouseover', ()=> {
            teamHover4.classList.add('hover');
            addHover();
        })
        teamHover4.addEventListener('mouseout', ()=> {
            teamHover4.classList.remove('hover');
            removeHover();
        })
        teamHover5.addEventListener('mouseover', ()=> {
            teamHover5.classList.add('hover');
            addHover();
        })
        teamHover5.addEventListener('mouseout', ()=> {
            teamHover5.classList.remove('hover');
            removeHover();
        })
        document.addEventListener("DOMContentLoaded", () => {
    
            const accordionHeader = '.team__box-slide';
            const delay = 350;
            const offset = 300;
        
                document.querySelectorAll(accordionHeader).forEach((header) => {
        
                    header.addEventListener('mouseover', () => {
        
                        setTimeout(() => {
                            window.scrollTo({
                                top: header.getBoundingClientRect().top + window.pageYOffset,
                                behavior: 'smooth'
                            });
                        }, delay);
                    })
                })
        })
    }
}
// Маска телефона
let input = document.querySelectorAll(".maskphone");
if(input) {
  document.addEventListener("DOMContentLoaded", function() {
      input.forEach((e) => {
        e.addEventListener("input", mask);
        e.addEventListener("focus", mask);
        e.addEventListener("blur", mask);
      })
      
      /***/
      function mask(event) {
        let blank = "+_ (___) ___-__-__";
        
        let i = 0;
        let val = this.value.replace(/\D/g, "").replace(/^8/, "7"); // <---
        
        this.value = blank.replace(/./g, function(char) {
          if (/[_\d]/.test(char) && i < val.length) return val.charAt(i++);
          
          return i >= val.length ? "" : char;
        });
        
        if (event.type == "blur") {
          if (this.value.length == 2) this.value = "";
        } else {
          setCursorPosition(this, this.value.length);
        }
      };
      
      /***/
      function setCursorPosition(elem, pos) {
        elem.focus();
        
        if (elem.setSelectionRange) {    
          elem.setSelectionRange(pos, pos);
          return;
        }
        
        if (elem.createTextRange) {    
          let range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select();      
          return;
        }
      }
  });
  
}

//slider value 
const swiperValues = new Swiper('.values__content-slider_swiper', {
    slidesPerView: 1,  
    loop: true,
    speed: 600,
    spaceBetween: 20,
    autoHeight: true,
    pagination: {
      el: '.values-pagination',
      type: "fraction",
    },
    navigation: {
      nextEl: '.values-next',
      prevEl: '.values-prev',
    },
});
const swipersDate = document.querySelectorAll('.values__content-slider_swiper');

swipersDate.forEach(swiperDate => {
  const swiperItem = swiperDate.swiper;

  setInterval(() => {
    swiperItem.update();
  }, 100)
})

//main slider 
const swiperMain = new Swiper('.main__wrapper-swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 700,
  pagination: {
    el: '.main-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
});


if (document.documentElement.clientWidth < 1230) {
const accordionsTwo = document.querySelectorAll(".accordionTwo");

if(accordionsTwo) {
    const openAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__contentTwo");
        accordion.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
    };
    
    const closeAccordion = (accordion) => {
        const content = accordion.querySelector(".accordion__contentTwo");
        accordion.classList.remove("open");
        content.style.maxHeight = null;
    };
    
    accordionsTwo.forEach((accordion) => {
        const intro = accordion.querySelector(".accordion__controlTwo");
        const content = accordion.querySelector(".accordion__contentTwo");
    
        intro.onclick = () => {
            if (content.style.maxHeight) {
                closeAccordion(accordion);
            } else {
                accordionsTwo.forEach((accordion) => closeAccordion(accordion));
                openAccordion(accordion);
            }
        };
    });
    
    accordionsTwo.forEach((accordion) => {
        const content = accordion.querySelector(".accordion__contentTwo");
        document.addEventListener('mouseup', function handleClickOutsideBox(event) {
    
            if (!content.contains(event.target)) {
                closeAccordion(accordion);
            }
        });
        
    });

    }
}
//При скролле активный класс 
window.addEventListener('scroll', () => {
    document.querySelectorAll('.section').forEach((sec) => {
      let menuLink = document.querySelectorAll(`.about-link[href="#${sec.id}"]`);
      menuLink.forEach((e) => {
          if (window.scrollY >= sec.offsetTop && window.scrollY < sec.offsetTop + sec.offsetHeight) {
            e.classList.add('active');
          } else {
            e.classList.remove('active');
          }
      })
    });
  });

//click card news 
if (document.documentElement.clientWidth < 1230) {
    let menuItems = document.getElementsByClassName("news__swiper-slide_top");
    
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function() { 
            removeSelected(this);
            this.classList.toggle('active');
        });
    }  
    
    
    function removeSelected(el) {
        Array.prototype.forEach.call(document.querySelectorAll('.active'), function(e){
            if (e!=el) {
                e.classList.remove('active');
            }
        });
    }
}
//gallary слайдер
const gallerySwiper = new Swiper('.gallery__swiper', {
    loop: true,
    slidesPerView: 1,  
    spaceBetween: 20,
    speed: 600,
    pagination: {
        el: '.gallery-pagination',
        type: "fraction",
    },
    navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    },
    breakpoints: {
        955: {
            slidesPerView: 3,
        },
        690: {
            slidesPerView: 2,
        }
    }
  });

  //Показать еще карточки в мобильной

const showMore = document.querySelector('.btn-download');
const cards = document.querySelectorAll('.opportunities__container-more').length;
let items = 10;
if(cards) {
    showMore.addEventListener('click', () => {
      items += 4;
      const array = Array.from(document.querySelector('.opportunities__container').children);
      const visItems = array.slice(0 , items);
    
      visItems.forEach(el => el.classList.add('is-visible'));
        
      if(visItems.length === cards) {
        showMore.style.display = 'none';
      }
    });
    function getLastVisibleDiv() {
        return Array.from(document.querySelectorAll('.opportunities__container-more'))
                    .reverse()
                    .find(div => div.offsetParent !== null);
    }
}
//Обрезание текста 
if (document.documentElement.clientWidth < 690) {
    const truncate = (text, limit) => {
        return text.substr(0, limit) + '';
      }
      
      const toggleText = (e, item) => {
        const text = item.querySelector('.demo');
        let newText = '';
          
        if (!item.dataset.text) {
          item.dataset.text = text.innerHTML;
        }
        
        newText = (item.classList.contains('active'))
          ? item.dataset.text
          : truncate(item.dataset.text, item.offsetWidth / 2.05);
        
        text.innerHTML = newText;
        item.classList.toggle('active'); 
      }
      const value_wrappe = document.querySelectorAll('.values__content-slider_swiper')
      document.querySelectorAll('.values__content-slider_slide-flex_text-mobile').forEach(item => {
        const btn = item.querySelector('.btns-open');
        toggleText(null, item);
        
        btn.addEventListener('click', e => toggleText(e, item));
      });
}



//swiper passt-evens 
const passtEvensSwiper  = new Swiper('.past-events__swiper', {
    slidesPerView: 1,  
    spaceBetween: 0,
    loop: true,
    speed: 600,
    allowTouchMove: false,
    pagination: {
      el: '.past-events-pagination',
      type: "fraction",
    },

    navigation: {
      nextEl: '.past-events-next',
      prevEl: '.past-events-prev',
    },
    breakpoints: {
        1230: {
            slidesPerView: 3,
            spaceBetween: 20,
            allowTouchMove: true,
        },
        955: {
            slidesPerView: 2,
            allowTouchMove: true,
            spaceBetween: 20,
        }
    }
  });

  const eventsPastSwiper  = new Swiper('.events-past-swiper', {
    slidesPerView: 1,  
    spaceBetween: 0,
    loop: true,
    speed: 600,
    allowTouchMove: false,
    pagination: {
      el: '.events-past-pagination',
      type: "fraction",
    },

    navigation: {
      nextEl: '.events-past-next',
      prevEl: '.events-past-prev',
    },
    breakpoints: {
        1230: {
            slidesPerView: 4,
            spaceBetween: 20,
            allowTouchMove: true,
        },
        955: {
            slidesPerView: 2,
            allowTouchMove: true,
            spaceBetween: 20,
        }
    }
  });

  const trusteesSwiper  = new Swiper('.trustees__swiper', {
    slidesPerView: 1,  
    spaceBetween: 20,
    loop: true,
    speed: 600,
    pagination: {
      el: '.trustees-pagination',
      type: "fraction",
    },

    navigation: {
      nextEl: '.trustees-next',
      prevEl: '.trustees-prev',
    },
    breakpoints: {
        1230: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        955: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        690: {
          slidesPerView: 2,
          spaceBetween: 20,
        }
    }
  });
document.querySelectorAll('.slider-common_swiper').forEach(el => {
  let swiper = new Swiper(el, {
    slidesPerView: 1,  
    spaceBetween: 20,
    loop: true,
    speed: 1200,
    autoHeight: true,
  pagination: {
    el: el.querySelector('.slider-common-pagination'),
    type: "fraction",
  },
   navigation: {
      nextEl: el.querySelector('.slider-common-next'),
      prevEl: el.querySelector('.slider-common-prev')
   }
});
});
const aboutProjectSwiper = new Swiper('.about-project__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  speed: 1100,
  pagination: {
    el: '.about-project-pagination',
    type: "fraction",
  },
  navigation: {
    nextEl: '.about-project-next',
    prevEl: '.about-project-prev',
  },
  breakpoints: {
    690: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    955: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
}
});
const swiper = new Swiper('.reviews__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 600,
  pagination: {
    el: '.reviews-pagination',
    type: "fraction",
  },
  navigation: {
    nextEl: '.reviews-next',
    prevEl: '.reviews-prev',
  },
  breakpoints: {
    955: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
}
});


document.querySelectorAll('.past__box-card_swiper').forEach(el => {
    let swiper = new Swiper(el, {
        speed: 600,
        spaceBetween: 20,
        pagination: {
          el: el.querySelector('.past__box-pagination'),
              clickable: true,
              dynamicBullets: true,
              type: "bullets",
      },
        navigation: {
            nextEl: el.querySelector('.past__box-next'),
            prevEl: el.querySelector('.past__box-prev')
        },
        loop: true,
    });
});
document.querySelectorAll(".custom-select").forEach(customSelect => {
  const selectBtn = customSelect.querySelector(".select-button");

  const selectedValue = customSelect.querySelector(".selected-value");
  const optionsList = customSelect.querySelectorAll(".select-dropdown_inner-text");

  selectBtn.addEventListener("click", () => {
    // add/remove active class on the container element
    customSelect.classList.toggle("active");
    // update the aria-expanded attribute based on the current state
    selectBtn.setAttribute(
      "aria-expanded",
      selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });
  
  optionsList.forEach((option) => {
    function handler(e) {
      // Click Events
      if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
        selectedValue.textContent = this.children[1].textContent;
        customSelect.classList.remove("active");
      }
      // Key Events
      if (e.key === "Enter") {
        selectedValue.textContent = this.textContent;
        customSelect.classList.remove("active");
      }
    }
  
    option.addEventListener("keyup", handler);
    option.addEventListener("click", handler);
  });
  for (const dropdown of document.querySelectorAll(
    ".custom__select-wrapper:not(.clearFilter)"
  )) {
    dropdown.addEventListener("click", function () {
      this.querySelector(".custom__select").classList.toggle("active");
    });
  }
  
  for (const option of document.querySelectorAll(".custom__option")) {
    option.addEventListener("click", function () {
      if (!this.classList.contains("selected")) {
        this.parentNode
          .querySelector(".custom__option.selected")
          .classList.remove("selected");
        this.classList.add("selected");
        this.closest(".custom__select").querySelector(
          ".custom__select-trigger h6"
        ).textContent = this.textContent;
        if (this.getAttribute("data-type")) {
          current_story = this.dataset["type"];
        }
      }
    });
  }
 
  document.addEventListener("click", function (e) {
    for (const select of document.querySelectorAll(".custom-select")) {
      if (!select.contains(e.target)) {
        select.classList.remove("active");
      }
    }
  });
});

document.querySelectorAll('.select-dropdown_inner').forEach(el => {
  new SimpleBar(el)
});

//hover slider
if (document.documentElement.clientWidth > 1230) {
  const oneSlide = document.querySelector('.one-slide');
  const twoSlide = document.querySelector('.two-slide');
  const threeSlide = document.querySelector('.three-slide');
  if(oneSlide) {
    twoSlide.addEventListener('mouseover', () => {
      oneSlide.classList.add('min-slide');
      twoSlide.classList.remove('min-slide');
    })
    twoSlide.addEventListener('mouseout', () => {
      oneSlide.classList.remove('min-slide');
      twoSlide.classList.add('min-slide');
    })
    threeSlide.addEventListener('mouseover', () => {
      oneSlide.classList.add('min-slide');
      threeSlide.classList.remove('min-slide');
    })
    threeSlide.addEventListener('mouseout', () => {
      oneSlide.classList.remove('min-slide');
      threeSlide.classList.add('min-slide');
    })
  }
}
//map
const contaсts = document.querySelector('.contaсts')
if(contaсts) {
  let center = [55.7891170689432,37.60623549999999];
  
  function inits() {
    let map = new ymaps.Map('YMapsID-1', {
      center: center,
      zoom: 15
    });
  
    let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: 'assets/img/map-icon.svg',
      iconImageSize: [42, 62],
      iconImageOffset: [20, -60]
    });
  
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    map.geoObjects.add(placemark);
    map.behaviors.disable('drag');
  }
  ymaps.ready(inits);

}  

if (document.documentElement.clientWidth > 1230) {
  (function(){
    init();
  
    var g_containerInViewport;
    function init(){
        setStickyContainersSize();
        bindEvents();
    }
  
    function bindEvents(){
        window.addEventListener("wheel", wheelHandler);        
    }
  
    function setStickyContainersSize(){
        document.querySelectorAll('.history-container').forEach(function(container){
            const stikyContainerHeight = container.querySelector('.history-main').scrollWidth;
            container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
        });
    }
  
    function isElementInViewport (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }
  
    function wheelHandler(evt){
        
        const containerInViewPort = Array.from(document.querySelectorAll('.history-container')).filter(function(container){
            return isElementInViewport(container);
        })[0];
  
        if(!containerInViewPort){
            return;
        }
  
        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;
  
        if(g_canScrollHorizontally){
            containerInViewPort.querySelector('.history-main').scrollLeft += evt.deltaY;
        }
    }
  })();
}

const historyBtn = document.querySelector('.history_btn');
const historyMain = document.querySelector('.history-main');
const mainBox = document.querySelector('.history-main_box-2020');

if(historyMain) {
  historyBtn.addEventListener('click', ()=> {
    historyMain.classList.add('main-active');
    historyBtn.classList.add('btn-active');
    mainBox.classList.toggle('box-active');
  })
}


const fileInput = document.getElementById('fileInput');
const fileDisplayArea = document.getElementById('fileDisplayArea');
const fileInputLabel = document.getElementById('fileInputLabel');

fileInput.addEventListener('change', function() {
    const files = fileInput.files;
    if (files.length > 0) {
        const file = files[0];
        const fileURL = URL.createObjectURL(file);
        const fileInfoDiv = document.createElement('div');
        fileInfoDiv.classList.add('file-info');

        // Создаем элемент для отображения названия файла
        const fileName = document.createElement('span');
        fileName.textContent = file.name;

        // Создаем элемент для отображения веса файла
        const fileWeight = document.createElement('span');
        fileWeight.textContent = `(${(file.size / (1024 * 1024)).toFixed(2)} МБ)`; // Конвертируем байты в МБ
        fileWeight.classList.add('file-weight');

        // Создаем элемент изображения (иконка для PDF)
        const fileImage = document.createElement('img');
        fileImage.src = 'assets/img/pdf.svg'; // Замените на путь к иконке PDF
        fileImage.alt = 'PDF Icon';
        fileImage.classList.add('file-img');

        // Кнопка удаления
        const removeButton = document.createElement('span');
        removeButton.classList.add('remove-button');
        removeButton.onclick = function() {
            fileInput.value = ''; // Очистить input
            fileDisplayArea.removeChild(fileInfoDiv); // Удалить отображение файла
            fileInputLabel.style.display = 'flex'; // Показать label
        };

        // Добавляем элементы в контейнер
        fileInfoDiv.appendChild(fileImage);
        fileInfoDiv.appendChild(fileName);
        fileInfoDiv.appendChild(fileWeight); // Добавляем вес файла
        fileInfoDiv.appendChild(removeButton);
        fileDisplayArea.appendChild(fileInfoDiv);

        // Скрываем label после загрузки
        fileInputLabel.style.display = 'none';
    }
});

//popup
const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 300;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const popupFormButton = document.querySelector('.popup-form__box-btn-blue');
  const popupThanks = document.querySelector('.popup-thanks');
  const popupForm = document.querySelector('.popup-form');
  const body = document.body;

  // Функция для открытия popup-thanks
  function openPopupThanks() {
      popupThanks.classList.add('open');
      popupForm.classList.remove('open');
      body.classList.add('lock');
  }

  // Функция для закрытия popup-thanks
  function closePopupThanks() {
      popupThanks.classList.remove('open');
      body.classList.remove('lock');
  }

  // Обработчик клика по кнопке
  popupFormButton.addEventListener('click', openPopupThanks);

  // Обработчик клика вне popup-thanks
  document.addEventListener('click', (event) => {
      if (popupThanks.classList.contains('open') && !popupThanks.contains(event.target) && !popupFormButton.contains(event.target)) {
          closePopupThanks();
      }
  });

  // Обработчик клика на кнопке закрытия
  const closeButtons = document.querySelectorAll('.popup__close');
  closeButtons.forEach(button => {
      button.addEventListener('click', closePopupThanks);
  });

  // Обработчик клика на кнопку внутри popup-thanks
  const thanksBoxButton = document.querySelector('.popup-thanks__box-btn');
  thanksBoxButton.addEventListener('click', closePopupThanks);
});