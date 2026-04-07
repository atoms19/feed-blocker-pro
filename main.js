import {removeElement,removeElements,removeAllElements} from './lib/utils.js'
let criminals = [
  "www.youtube.com",
  "www.instagram.com",
  "www.reddit.com",
  "www.quora.com",
  "www.x.com",
  "www.linkedin.com"
]

function removeFeeds(){
let host = window.location.host;
let path = window.location.pathname;
        console.log(host,path);

if(host=="www.linkedin.com"){
  removeElement('[data-testid="mainFeed"]') 

}

if(host =="www.quora.com"){
  removeElements(".dom_annotate_multifeed_home",".dom_annotate_multifeed_following")
}
if(host == "www.reddit.com" && (path == "/"||path=="/r/popular/" || path=="/news/")){
		  let s =document.querySelector("#main-content")
        console.log(host,path);
        if (!s) return;
        s.style.opacity="0"; 
}else if(host=="www.reddit.com"){	
		  let s =document.querySelector("#main-content")
		  if (!s) return;
        s.style.opacity="1"; 
}
if(host=="www.instagram.com" && (path.startsWith("/reels") || path.startsWith("/explore"))){
      removeElement(".xvbhtw8")
}

if(host =="www.instagram.com" && path =="/"){
    let s = document.querySelector("[role='main'")?.children[0]?.children[0]?.children[0]?.children[1]
    if(!s) return;
    s.remove();
}

if(host=="www.youtube.com"){
  removeElement("#endpoint[title='Shorts']")
  removeAllElements('.ytGridShelfViewModelHost')
  removeElement('.ytd-watch-next-secondary-results-renderer')
}

if(host=="www.youtube.com" && path =="/"){
   let c =document.querySelector("#content > ytd-feed-nudge-renderer")
   if(c) c.remove();
   let s = document.querySelector("#contents");
   if(s) s.style.opacity ="0"
   if(s) s.style.pointerEvents ="none"
   let s2 = document.querySelector("#chips-wrapper")
   if(s2) s2.remove();
}else if(host=="www.youtube.com"){
 let s = document.querySelector("#contents");
   if(s) s.style.opacity ="1"
   if(s) s.style.pointerEvents ="auto"
    removeElement("#filter-chip-bar")
}


// https://www.youtube.com/feed/channels
if(host=="www.youtube.com" && path.startsWith("/feed/subscriptions")){
   window.location.replace("/feed/channels/")
}

if(host == "www.youtube.com" && path.startsWith("/shorts/")){
   window.location.replace("/")
}

if(host == "www.x.com"){
	 let s = document.querySelector("[aria-label='Home timeline']")?.children[4]
    removeElement("[aria-label='Timeline: Explore']")
    if (s) s.remove()
}
}



//only insert MutationObserver in mailicious websites 
if(criminals.includes(window.location.host)){
  removeFeeds();
const observer = new MutationObserver(() => {
  removeFeeds();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

}
