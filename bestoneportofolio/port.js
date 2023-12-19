let  sections= document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let stop=window.scrollY;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id=sec.getAttributr('id');
        if(top>=offset&&top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                // document.querySelector('header nav a')
            });
        }
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100)


};