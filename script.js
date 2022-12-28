const VIDEO_TAG = Array.from(document.querySelectorAll(".video-list-item video"));

const VIDEO_LIST_TAG = document.querySelector(".wrapper  .video-list");
let isOpened = false;

VIDEO_TAG.map(video => {
    const PLAY_PAUSE_TAG = Array.from(document.querySelectorAll(".play-pause"));
    video.addEventListener("click", () => {
        if(isOpened){
            video.pause();
            isOpened = false;

            PLAY_PAUSE_TAG.map(item => {
                item.innerHTML = `<i class='bx bx-pause bx-flip-vertical' ></i>`;
                setTimeout(() => {
                    item.innerHTML = " ";
                },300);
            })
            
        }else{
            video.play();
            isOpened = true;
            PLAY_PAUSE_TAG.map(item => {
                item.innerHTML = `<i class='bx bx-play bx-flip-vertical' ></i>`;
                setTimeout(() => {
                    item.innerHTML = " ";
                },300);
            })
        }

        VIDEO_LIST_TAG.addEventListener("scroll", () => {
            video.pause();
            isOpened = false;
        })
    });
})


const TOP_MENU_ITEMS_TAG= Array.from(document.querySelectorAll(".top-menu-item"));

TOP_MENU_ITEMS_TAG.map(item => {
    item.addEventListener("click",() => {
        TOP_MENU_ITEMS_TAG.map(item => {
            item.classList.remove("top-menu-item-active");
        })
        item.classList.add("top-menu-item-active");
    })
})



const BOTTOM_NAV_LI_TAG = Array.from(document.querySelectorAll(".bottom-nav ul li"));
// const BOTTOM_NAV_I_TAG = Array.from(document.querySelectorAll(".bottom-nav ul li i"));
// const BOTTOM_NAV_SPAN_TAG = Array.from(document.querySelectorAll(".bottom-nav ul li span"));

BOTTOM_NAV_LI_TAG.map(item => {
    if(item.className === "no-select"){
        return;
    }
    item.addEventListener("click", () => {
        
        const first = item.firstElementChild;
        const last = item.lastElementChild;
        BOTTOM_NAV_LI_TAG.map(li => {
            const first = li.firstElementChild;
            const last = li.lastElementChild;

            first.style.color = "rgb(170, 170, 170)";
            last.style.color = "rgb(170, 170, 170)";
        })
        first.style.color = "#fff";
        last.style.color = "#fff";
    })
})

