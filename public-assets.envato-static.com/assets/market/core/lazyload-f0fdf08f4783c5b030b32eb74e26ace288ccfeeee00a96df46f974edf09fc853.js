document.addEventListener("DOMContentLoaded",(function(){const e="span.lazy-load-img";let t=[].slice.call(document.querySelectorAll(e));const n=/^data-(.+)/,o=function(e){if("SPAN"===e.tagName&&(e.dataset.src||e.dataset.srcset)){const t=document.createElement("img"),o=e.attributes;for(let e=0;e<o.length;e++){const i=o[e],r=i.name.match(n);if(r&&2===r.length){const e=r[1];t.setAttribute(e,i.value)}}e.parentElement.replaceChild(t,e)}},i=function(){let e=!1;const n=function(){!1===e&&(e=!0,setTimeout((function(){t.forEach((function(e){const i=e.getBoundingClientRect().top<=window.innerHeight&&e.getBoundingClientRect().bottom>=0,r="none"!==getComputedStyle(e).display;i&&r&&(o(e),t=t.filter((function(t){return t!==e})),0===t.length&&(document.removeEventListener("scroll",n),window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n)))})),e=!1}),200))};[].slice.call(document.querySelectorAll("*[data-lazy-load-trigger]")).forEach((function(e){e.addEventListener(e.dataset.lazyLoadTrigger,(function t(){n(),e.removeEventListener(e.dataset.lazyLoadTrigger,t)}))})),n(),document.addEventListener("scroll",n),window.addEventListener("resize",n),window.addEventListener("orientationchange",n)};if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?function(){const e=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){const n=t.target;o(n),e.unobserve(n)}}))}),{rootMargin:"50px"});t.forEach((function(t){e.observe(t)}))}():i(),window.MutationObserver){new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.length&&t.addedNodes.forEach((function(t){if(t.childNodes.length){t.querySelectorAll(e).forEach((function(e){o(e)}))}}))}))})).observe(document.body,{childList:!0,subtree:!0})}}));