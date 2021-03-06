import { HTMLLoader } from '../core/utils/html_loader';
import { Accordion } from './accordion';
import { doSomething } from './do-something';
import { HTMLContent, itemsToCache } from './html-imports';
import { Slideshow } from './slideshow';

// Put all function calls that need to be made on every page load inside the setupAll function body.
export function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    
    window.onscroll = function() {setupSticky()}
    console.log("inside student setup");
    const banner = document.querySelector('#mturk-top-banner-drop-down-content');
    const header = document.getElementById("main-menu-container");
    if (banner?.classList.contains("none")) {
        header?.classList.remove("banner");
        console.log("page reload removed banner class")
    } else {
      console.log("in else class of banner empty or display");
    }
    
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type == "attributes") {
          if (banner?.classList.contains("display")) {
            header?.classList.add("banner");
            console.log("mutation: banner added");
          }
          if (banner?.classList.contains("none")) {
            header?.classList.remove("banner");
            console.log("mutation: banner removed");
          }
        }
      });
    });
    if (banner != null) {
      observer.observe(banner, {
        attributes: true //configure it to listen to attribute changes
      });
    }
    
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function setupSticky() {
  var header = document.getElementById("main-menu-container");
    var sticky = header?.offsetTop;
    if (window.pageYOffset > sticky) {
      header?.classList.add("sticky");
    } else {
      header?.classList.remove("sticky");
    }
  }

export async function setupAll() {
    await new Promise((r: any) => setTimeout(r, 100));
    console.log('reloading');
    Slideshow.setupAll();
    Accordion.setupAll();
    PutStudentPageLoadOperationsInsideThisStudentBody();
    console.log('reloaded');
}

itemsToCache.forEach((item: HTMLContent) => {
    HTMLLoader.cacheHTML(item.name, item.content);
});
(window as any).HTMLLoader = HTMLLoader;

console.log('dynamic-dom loaded');
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener('newPageLoad', () => setupAll());
