function reveal(){
  document.querySelectorAll(".reveal").forEach(el=>{
    const top=el.getBoundingClientRect().top;
    const visible=window.innerHeight-100;
    if(top<visible) el.classList.add("active");
  });
}
window.addEventListener("scroll",reveal);
reveal();
