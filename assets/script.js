
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav-links');
if(menu&&nav){
  menu.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));

const topBtn=document.querySelector('.backtop');
window.addEventListener('scroll',()=>{
  if(topBtn) topBtn.classList.toggle('show',window.scrollY>450);
});
if(topBtn) topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const form=document.querySelector('#contactForm');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.querySelector('#name').value.trim();
    const email=document.querySelector('#email').value.trim();
    const service=document.querySelector('#service').value;
    const message=document.querySelector('#message').value.trim();
    const subject=encodeURIComponent(`Website Enquiry - ${service}`);
    const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`);
    window.location.href=`mailto:softzeontechnologies@gmail.com?subject=${subject}&body=${body}`;
  });
}
