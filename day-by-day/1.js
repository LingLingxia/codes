
window.addEventListener('load',()=>{
  const script = document.createElement('script');
  script.innerHTML = `
  const navbar = document.querySelector('.navbar');
  console.log(navbar);
  if(navbar){
    navbar.style.background='linear-gradient(#666 10%,white)'
  }
  `
  document.head.appendChild(script);
},false)
 window.onload = ()=>{
  const script = document.createElement('script');
  script.setAttribute('defer',true);
  script.innerHTML = `
  const navbar = document.querySelector('.navbar');
  console.log(navbar);
  if(navbar){
    navbar.style.background='linear-gradient(#666 10%,white)'
  }
  `
  document.body.appendChild(script);
}

window.onload = ()=>{
  const style =  document.createElement('style');
  style.innerHTML = '.navbar{background:linear-gradient(#666 10%,white)!important}';
  document.head.appendChild(style);
}
