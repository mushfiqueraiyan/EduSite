const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(".content-box");

tabs.forEach((tab, index)=>{
    tab.addEventListener("click", ()=>{
        tabs.forEach(tab=>{tab.classList.remove("active")});
    tab.classList.add("active")
    
    all_content.forEach(contentBox =>{contentBox.classList.remove("active")});
    all_content[index].classList.add("active");
    })
});

