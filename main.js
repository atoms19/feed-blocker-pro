let targetedWebsites = [
  "www.youtube.com",
  "www.instagram.com",
  "www.reddit.com"
]

function removeFeeds(){
let host = window.location.host;
let path = window.location.pathname;
        console.log(host,path);


if(host =="www.quora.com"){
   console.log("quora found")
	let s = document.querySelector(".dom_annotate_multifeed_home")
   let d = document.querySelector(".dom_annotate_multifeed_following") 

	if(s) s.remove();
	 if(d) d.remove();
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
		let s = document.querySelector(".xvbhtw8");
      if(!s) return;
      s.remove();
}

if(host =="www.instagram.com" && path =="/"){
    let s = document.querySelector("[role='main'").children[0].children[0].children[0].children[1]
    if(!s) return;
    s.remove();
}

if(host=="www.youtube.com"){
   document.querySelector("#endpoint[title='Shorts']")?.remove()  
document.querySelectorAll('.ytGridShelfViewModelHost').forEach(e=>e.remove())
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
   let s2 = document.querySelector("#filter-chip-bar")
   if(s2) s2.remove();
  setTimeout(()=>{
	 let s2 = document.querySelector("#filter-chip-bar")
	 if(s2) s2.remove();
document.querySelectorAll('.ytGridShelfViewModelHost').forEach(e=>e.remove())
	},1000)
}


// https://www.youtube.com/feed/channels
if(host=="www.youtube.com" && path.startsWith("/feed/subscriptions")){
   window.location.pathname="/feed/channels/"
}

if(host == "www.youtube.com" && path.startsWith("/shorts/")){
   window.location.pathname="/"
}

if(host == "www.x.com"){
	 let s = document.querySelector("[aria-label='Home timeline']").children[4]
    let d = document.querySelector("[aria-label='Timeline: Explore']")
    if (s) s.remove()
    if (d) d.remove()
}
}


const observer = new MutationObserver(() => {
  removeFeeds();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
