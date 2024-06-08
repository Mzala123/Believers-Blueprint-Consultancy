
const toggle_open = document.getElementById("toggle_open")
const toggle_close = document.getElementById("toggle_close")

const nav_items =  document.querySelector(".header_wrapper > .nav_items");


const open_menu_handler = ()=>{
    console.log("Opened menu")
    nav_items.classList.toggle('close_menu')
    nav_items.classList.add('open_menu')
}

toggle_open.addEventListener("click", open_menu_handler)

const tabs = document.querySelectorAll(".tab_btn");
const all_service_content = document.querySelectorAll(".service_content");

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=>{
        tabs.forEach((_tab)=>{
            _tab.classList.remove("active_tab")
        })
        tab.classList.add("active_tab")
        let line =  document.querySelector('.line')
        line.style.width =  e.target.offsetWidth +"px"
        line.style.left =  e.target.offsetLeft +"px"
      
        all_service_content.forEach(content=> {content.classList.remove('active_content')})
        all_service_content[index].classList.add('active_content')
       
    })
})
