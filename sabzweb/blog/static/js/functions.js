/**
* Blogzine - Blog and Magazine Bootstrap 5 Theme
*
* @author Webestica (https://www.webestica.com/)
* @version 1.2.0
**/


/* ===================
Table Of Content
======================
01 PRELOADER
02 MEGA MENU
03 STICKY HEADER
04 TINY SLIDER
05 PARALLAX BACKGROUND
06 STICKY BAR
07 TOOLTIP
08 POPOVER
09 BACK TO TOP
10 STICKY POST
11 STICKY FOOTER
12 GLIGHTBOX
13 ISOTOPE
14 DARK MODE
15 FONT SIZE
16 LAZY LOAD
17 QUILL EDITOR
18 VIDEO PLAYER
19 OVERLAY SCROLLBAR
20 DASHBOARD CHART
21 TRAFFIC CHART
====================== */

"use strict";
!function () {

    window.Element.prototype.removeClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.remove(className);
        }
        return this;
    }, window.Element.prototype.addClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.add(className);
        }
        return this;
    }, window.Element.prototype.toggleClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.toggle(className);
        }
        return this;
    }, window.Element.prototype.isVariableDefined = function () {
        return !!this && typeof (this) != 'undefined' && this != null;
    }
}();

// Get CSS var value
var ThemeColor = function () {
  return {
    getCssVariableValue: function (e) {
      var t = getComputedStyle(document.documentElement).getPropertyValue(e);
      return t && t.length > 0 && (t = t.trim()), t;
    }
  };
}();

var e = {
    init: function () {
        e.preLoader(),
        e.megaMenu(),
        e.stickyHeader(),
        e.tinySlider(),
        e.parallaxBG(),
        e.stickyBar(),
        e.toolTipFunc(),
        e.popOverFunc(),
        e.backTotop(),
        e.stickyPost(),
        e.stickyFooter(),
        e.lightBox(),
        e.enableIsotope(),
        e.zooming(),
        e.lazyLoading(),
        e.quill(),
        e.videoPlyr()
        e.overlayScrollbars(),
        e.trafficsourcesChart(),
        e.trafficstatsChart();
    },
    isVariableDefined: function (el) {
        return typeof !!el && (el) != 'undefined' && el != null;
    },
    getParents: function (el, selector, filter) {
        const result = [];
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        // match start from parent
        el = el.parentElement;
        while (el && !matchesSelector.call(el, selector)) {
            if (!filter) {
                if (selector) {
                    if (matchesSelector.call(el, selector)) {
                        return result.push(el);
                    }
                } else {
                    result.push(el);
                }
            } else {
                if (matchesSelector.call(el, filter)) {
                    result.push(el);
                }
            }
            el = el.parentElement;
            if (e.isVariableDefined(el)) {
                if (matchesSelector.call(el, selector)) {
                    return el;
                }
            }

        }
        return result;
    },
    getNextSiblings: function (el, selector, filter) {
        let sibs = [];
        let nextElem = el.parentNode.firstChild;
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        do {
            if (nextElem.nodeType === 3) continue; // ignore text nodes
            if (nextElem === el) continue; // ignore elem of target
            if (nextElem === el.nextElementSibling) {
                if ((!filter || filter(el))) {
                    if (selector) {
                        if (matchesSelector.call(nextElem, selector)) {
                            return nextElem;
                        }
                    } else {
                        sibs.push(nextElem);
                    }
                    el = nextElem;

                }
            }
        } while (nextElem = nextElem.nextSibling)
        return sibs;
    },
    on: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors);
            }
            selectors.addEventListener(type, listener);
        });
    },
    onAll: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(selectors).forEach((element) => {
                if (type.indexOf(',') > -1) {
                    let types = type.split(',');
                    types.forEach((type) => {
                        element.addEventListener(type, listener);
                    });
                } else {
                    element.addEventListener(type, listener);
                }


            });
        });
    },
    removeClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.removeClass(className);
        }
    },
    removeAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors) && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.removeClass(className);
            });
        }

    },
    toggleClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.toggleClass(className);
        }
    },
    toggleAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors)  && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.toggleClass(className);
            });
        }
    },
    addClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.addClass(className);
        }
    },
    select: function (selectors) {
        return document.querySelector(selectors);
    },
    selectAll: function (selectors) {
        return document.querySelectorAll(selectors);
    },

    // START: 01 Preloader
    preLoader: function () {
        window.onload = function () {
            var preloader = e.select('.preloader');
            if (e.isVariableDefined(preloader)) {
                preloader.className += ' animate__animated animate__fadeOut';
                setTimeout(function(){
                    preloader.style.display = 'none';
                }, 200);
            }
        };
    },
    // END: Preloader

    // START: 02 Mega Menu
    megaMenu: function () {
        e.onAll('.dropdown-menu a.dropdown-item.dropdown-toggle', 'click', function (event) {
            var element = this;
            event.preventDefault();
            event.stopImmediatePropagation();
            if (e.isVariableDefined(element.nextElementSibling) && !element.nextElementSibling.classList.contains("show")) {
                const parents = e.getParents(element, '.dropdown-menu');
                e.removeClass(parents.querySelector('.show'), "show");
                if(e.isVariableDefined(parents.querySelector('.dropdown-opened'))){
                    e.removeClass(parents.querySelector('.dropdown-opened'), "dropdown-opened");
                }

            }
            var $subMenu = e.getNextSiblings(element, ".dropdown-menu");
            e.toggleClass($subMenu, "show");
            $subMenu.previousElementSibling.toggleClass('dropdown-opened');
            var parents = e.getParents(element, 'li.nav-item.dropdown.show');
            if (e.isVariableDefined(parents) && parents.length > 0) {
                e.on(parents, 'hidden.bs.dropdown', function (event) {
                    e.removeAllClass('.dropdown-submenu .show');
                });
            }
        });
    },
    // END: Mega Menu

    // START: 03 Sticky Header
    stickyHeader: function () {
        var stickyNav = e.select('.navbar-sticky');
        if (e.isVariableDefined(stickyNav)) {
            var stickyHeight = stickyNav.offsetHeight;
            stickyNav.insertAdjacentHTML('afterend', '<div id="sticky-space"></div>');
            var stickySpace = e.select('#sticky-space');
            if (e.isVariableDefined(stickySpace)) {
                document.addEventListener('scroll', function (event) {
                    var scTop = window.pageYOffset || document.documentElement.scrollTop;
                    if (scTop >= 400) {
                        stickySpace.addClass('active');
                        e.select("#sticky-space.active").style.height = stickyHeight + 'px';
                        stickyNav.addClass('navbar-sticky-on');
                    } else {
                        stickySpace.removeClass('active');
                        stickySpace.style.height = '0px';
                        stickyNav.removeClass("navbar-sticky-on");
                    }
                });
            }
        }
    },
    // END: Sticky Header

    // START: 04 Tiny Slider
    tinySlider: function () {
        var $carousel = e.select('.tiny-slider-inner');
        if (e.isVariableDefined($carousel)) {
          var tnsCarousel = e.selectAll('.tiny-slider-inner');
          tnsCarousel.forEach(slider => {
              var slider1 = slider;
              var sliderMode = slider1.getAttribute('data-mode') ? slider1.getAttribute('data-mode') : 'carousel';
              var sliderAxis = slider1.getAttribute('data-axis') ? slider1.getAttribute('data-axis') : 'horizontal';
              var sliderSpace = slider1.getAttribute('data-gutter') ? slider1.getAttribute('data-gutter') : 30;
              var sliderEdge = slider1.getAttribute('data-edge') ? slider1.getAttribute('data-edge') : 0;

              var sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 4; //option: number (items in all device)
              var sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItems); //option: number (items in 1200 to end )
              var sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsXl); //option: number (items in 992 to 1199 )
              var sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsLg); //option: number (items in 768 to 991 )
              var sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsMd); //option: number (items in 576 to 767 )
              var sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : Number(sliderItemsSm); //option: number (items in start to 575 )

              var sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
              var sliderautoWidth = slider1.getAttribute('data-autowidth') === 'true'; //option: true or false
              var sliderArrow = slider1.getAttribute('data-arrow') !== 'false'; //option: true or false
              var sliderDots = slider1.getAttribute('data-dots') !== 'false'; //option: true or false

              var sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false'; //option: true or false
              var sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 4000;
              var sliderHoverPause = slider1.getAttribute('data-hoverpause') === 'true'; //option: true or false
              if (e.isVariableDefined(e.select('.custom-thumb'))) {
                var sliderNavContainer = e.select('.custom-thumb');
              } 
              var sliderLoop = slider1.getAttribute('data-loop') !== 'false'; //option: true or false
              var sliderRewind = slider1.getAttribute('data-rewind') === 'true'; //option: true or false
              var sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true'; //option: true or false
              var sliderfixedWidth = slider1.getAttribute('data-fixedwidth') === 'true'; //option: true or false
              var sliderTouch = slider1.getAttribute('data-touch') !== 'false'; //option: true or false
              var sliderDrag = slider1.getAttribute('data-drag') !== 'false'; //option: true or false
              // Check if document DIR is RTL
              var ifRtl = document.getElementsByTagName("html")[0].getAttribute("dir");
              var sliderDirection;
              if (ifRtl === 'rtl') {
                  sliderDirection = 'rtl';
              }

              var tnsSlider = tns({
                  container: slider,
                  mode: sliderMode,
                  axis: sliderAxis,
                  gutter: sliderSpace,
                  edgePadding: sliderEdge,
                  speed: sliderSpeed,
                  autoWidth: sliderautoWidth,
                  controls: sliderArrow,
                  nav: sliderDots,
                  autoplay: sliderAutoPlay,
                  autoplayTimeout: sliderAutoPlayTime,
                  autoplayHoverPause: sliderHoverPause,
                  autoplayButton: false,
                  autoplayButtonOutput: false,
                  controlsPosition: top,
                  navContainer: sliderNavContainer,
                  navPosition: top,
                  autoplayPosition: top,
                  controlsText: [
                      '<i class="fas fa-chevron-left"></i>',
                      '<i class="fas fa-chevron-right"></i>'
                  ],
                  loop: sliderLoop,
                  rewind: sliderRewind,
                  autoHeight: sliderAutoHeight,
                  fixedWidth: sliderfixedWidth,
                  touch: sliderTouch,
                  mouseDrag: sliderDrag,
                  arrowKeys: true,
                  items: sliderItems,
                  textDirection: sliderDirection,
                  lazyload: true,
                  lazyloadSelector: '.lazy',
                  responsive: {
                      0: {
                          items: Number(sliderItemsXs)
                      },
                      576: {
                          items: Number(sliderItemsSm)
                      },
                      768: {
                          items: Number(sliderItemsMd)
                      },
                      992: {
                          items: Number(sliderItemsLg)
                      },
                      1200: {
                          items: Number(sliderItemsXl)
                      }
                  }
              });
          }); 
        }
    },
    // END: Tiny Slider

    // START: 05 Parallax Background
    parallaxBG: function () {
        var parBG = e.select('.bg-parallax');
        if (e.isVariableDefined(parBG)) {
            jarallax(e.selectAll('.bg-parallax'), {
                speed: 0.6
            });
        }
    },
    // END: Parallax Background

    // START: 06 Sticky Bar
    stickyBar: function () {
        var sb = e.select('[data-sticky]');
        if (e.isVariableDefined(sb)) {
            var sticky = new Sticky('[data-sticky]');
        }
    },
    // END: Sticky Bar

    // START: 07 Tooltip
    // Enable tooltips everywhere via data-toggle attribute
    toolTipFunc: function () {
        var tooltipTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    },
    // END: Tooltip

    // START: 08 Popover
    // Enable popover everywhere via data-toggle attribute
    popOverFunc: function () {
        var popoverTriggerList = [].slice.call(e.selectAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl)
        })
    },
    // END: Popover

    // START: 09 Back to Top
    backTotop: function () {
        var scrollpos = window.scrollY;
        var backBtn = e.select('.back-top');
        if (e.isVariableDefined(backBtn)) {
            var add_class_on_scroll = () => backBtn.addClass("back-top-show");
            var remove_class_on_scroll = () => backBtn.removeClass("back-top-show");

            window.addEventListener('scroll', function () {
                scrollpos = window.scrollY;
                if (scrollpos >= 800) {
                    add_class_on_scroll()
                } else {
                    remove_class_on_scroll()
                }
            });

            backBtn.addEventListener('click', () => window.scrollTo({
                top: 0,
                behavior: 'smooth',
            }));
        }
    },
    // END: Back to Top

    // START: 10 Sticky post
    stickyPost: function () {
        var scrollpos = window.scrollY;
        var sp = e.select('.sticky-post');
        if (e.isVariableDefined(sp)) {
            var add_class_on_scroll = () => sp.addClass("sticky-post-sticked");
            var remove_class_on_scroll = () => sp.removeClass("sticky-post-sticked");

            window.addEventListener('scroll', function () {
                scrollpos = window.scrollY;
                if (scrollpos >= 1400) {
                    add_class_on_scroll()
                } else {
                    remove_class_on_scroll()
                }
            });
        }
    },
    // END: Sticky Post

    // START: 11 Sticky Footer
    stickyFooter: function () {
        var fixedFooter = e.select('.footer-sticky');
        if (e.isVariableDefined(fixedFooter)) {
            window.addEventListener("load", function () {
                window.dispatchEvent(new Event('resize'));
            });
            window.addEventListener('resize', function (event) {
                var screenWidth = window.outerWidth;
                var footerHeight = fixedFooter.offsetHeight - 1;
                if (screenWidth >= 768) {
                    document.getElementsByTagName('main')[0].style.marginBottom = footerHeight + 'px';
                }
            });
        }
    },
    // END: Sticky Footer

    // START: 12 GLightbox
    lightBox: function () {
        var light = e.select('[data-glightbox]');
        if (e.isVariableDefined(light)) {
            var lb = GLightbox({
                selector: '*[data-glightbox]',
                openEffect: 'fade',
                closeEffect: 'fade'
            });
        }
    },
    // END: GLightbox

    // START: 13 Isotope
    enableIsotope: function () {
        var isGridItem = e.select('.grid-item');
        if (e.isVariableDefined(isGridItem)) {

            // Code only for normal Grid
            var onlyGrid = e.select('[data-isotope]');
            if (e.isVariableDefined(onlyGrid)) {
                var allGrid = e.selectAll("[data-isotope]");
                allGrid.forEach(gridItem => {
                    var gridItemData = gridItem.getAttribute('data-isotope');
                    var gridItemDataObj = JSON.parse(gridItemData);
                    var iso = new Isotope(gridItem, {
                        itemSelector: '.grid-item',
                        layoutMode: gridItemDataObj.layoutMode,
						isOriginLeft: false
                    });

                    imagesLoaded(gridItem).on('progress', function () {
                        // layout Isotope after each image loads
                        iso.layout();
                    });
                });
            }

            // Code only for normal Grid
            var onlyGridFilter = e.select('.grid-menu');
            if (e.isVariableDefined(onlyGridFilter)) {
                var filterMenu = e.selectAll('.grid-menu');
                filterMenu.forEach(menu => {
                    var filterContainer = menu.getAttribute('data-target');
                    var a = menu.dataset.target;
                    var b = e.select(a);
                    var filterContainerItemData = b.getAttribute('data-isotope');
                    var filterContainerItemDataObj = JSON.parse(filterContainerItemData);
                    var filter = new Isotope(filterContainer, {
                        itemSelector: '.grid-item',
                        transitionDuration: '0.7s',
                        layoutMode: filterContainerItemDataObj.layoutMode,
						isOriginLeft: false
                    });

                    var menuItems = menu.querySelectorAll('li a');
                    menuItems.forEach(menuItem => {
                        menuItem.addEventListener('click', function (event) {
                            var filterValue = menuItem.getAttribute('data-filter');
                            filter.arrange({filter: filterValue});
                            menuItems.forEach((control) => control.removeClass('active'));
                            menuItem.addClass('active');
                        });
                    });

                    imagesLoaded(filterContainer).on('progress', function () {
                        filter.layout();
                    });
                });
            }

        }
    },
    // END: Isotope

    // START: 15 Font size
    zooming: function () {
      const doc = document.documentElement;
      var radios = document.querySelectorAll('input[type=radio][name="fntradio"]');
      radios.forEach(radio => {
        radio.addEventListener("change", function() {
            var idZ = radio.getAttribute('id');
            if(idZ == 'font-sm') {
              doc.classList.remove('font-lg');
              doc.classList.add('font-sm');
            } else if(idZ == 'font-default') {
              doc.classList.remove('font-sm','font-lg');
            } else if(idZ == 'font-lg') {
              doc.classList.remove('font-sm');
              doc.classList.add('font-lg');
            }
        });
      });
    },
    // END: Font size

    // START: 16 Lazy Load
    lazyLoading: function () {
        var lazLoad = e.select('.lazy');
        if (e.isVariableDefined(lazLoad)) {
            var lazyLoadInstance = new LazyLoad({
            });
        }
    },
    // END: Lazy Load

    // START: 17 Quill Editor
    quill: function () {
      var ql = e.select('#quilleditor');
      if (e.isVariableDefined(ql)) {
        var editor = new Quill('#quilleditor', {
          modules: { toolbar: '#quilltoolbar' },
          theme: 'snow'
        });
      }
    },
    // END: Quill Editor

  // START: 18 Video player
  videoPlyr: function () {
    var vdp = e.select('.player-wrapper');
    if (e.isVariableDefined(vdp)) {
      // youtube
      const playerYoutube = Plyr.setup('.player-youtube', {});
      window.player = playerYoutube;

      // Vimeo
      const playerVimeo = Plyr.setup('.player-vimeo', {});
      window.player = playerVimeo;
      
      // HTML video
      const playerHtmlvideo = Plyr.setup('.player-html', {
        captions: {active: true}
      });
      window.player = playerHtmlvideo;

      // HTML audio
      const playerHtmlaudio = Plyr.setup('.player-audio', {});
      window.player = playerHtmlaudio;
    }
  },
  // END: Video player

  // START: 19 Overlay scrollbar
  overlayScrollbars: function () {
    var os = e.select('.custom-scrollbar');
    if (os) {
      document.addEventListener("DOMContentLoaded", function() {
        var cs = document.querySelectorAll('.custom-scrollbar');
        cs.forEach(c => {
            OverlayScrollbars(c, {
              scrollbars: {
                autoHide: 'leave',
                autoHideDelay: 200
              },
              overflowBehavior : {
                  x : "visible-hidden",
                  y : "scroll"
              }
             });
        });
      });
    }
  },
  // END: Overlay scrollbar

  // START: 20 Dashboard Chart
  trafficsourcesChart: function () {
    var ac = e.select('#apexChartTrafficSources');
    if (e.isVariableDefined(ac)) {
      var options = {
        colors: [
          '#2163e8', '#0cbc87', '#d6293e', '#f7c32e'
        ],
        labels: ['Search', 'Direct', 'Social', 'Display ads'],
        series: [44, 55, 41, 17],
        legend: {
          show: false,
          position: 'right'
        },
        chart: {
          height: 300,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            donut: {
              size: '75%',
            },
            offsetY: 20,
          },
          stroke: {
            colors: undefined
          }
        },
        stroke:{
          show: false
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              height: 200
            },
            legend: {
              show: false
            }
          }
        }]
      };
    var chart = new ApexCharts(document.querySelector("#apexChartTrafficSources"), options);
    chart.render();
    }
  },
  // END: Dashboard Chart

  // START: 21 Traffic Chart
  trafficstatsChart: function () {
    var cpv = e.select('#apexChartTrafficStats');
    if (e.isVariableDefined(cpv)) {
      var options = {
        colors: [
          '#2163e8',
        ],
        series: [{
          name: 'کاربران',
          data: [100, 401, 305, 501, 409, 602, 609, 901, 848, 602, 809, 901]
        }],
        chart: {
          height: 320,
          type: 'area',
          toolbar: {
            show: false
          }
        },
        grid: {
          strokeDashArray: 4,
          position: 'back'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        legend: {
          show: true,
          horizontalAlign: 'right',
          position: 'top',
          labels: {
          },
          markers: {
            width: 8,
            height: 8
          }
        },
        xaxis: {
          labels: {
            show: true
          },
          axisBorder: {
            show: false
          },
          categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      };
      var chart = new ApexCharts(document.querySelector("#apexChartTrafficStats"), options);
      chart.render();
    }
  },
  // END: Traffic Chart   

};
e.init();

   