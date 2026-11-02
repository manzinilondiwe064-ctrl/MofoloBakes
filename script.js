const cakes = [
 {name:"Midnight Gold Drip", price:"R550", desc:"Chocolate + gold drip", img:"https://via.placeholder.com/300x200/000000/FFD700?text=Midnight+Gold"},
 {name:"Red Velvet Royal", price:"R500", desc:"Classic red velvet", img:"https://via.placeholder.com/300x200/C00000/FFFFFF?text=Red+Velvet"},
 {name:"Vanilla Dream Cloud", price:"R450", desc:"Soft vanilla", img:"https://via.placeholder.com/300x200/FFF8DC/8B4513?text=Vanilla"},
 {name:"Strawberry Blush", price:"R480", desc:"Fresh strawberry", img:"https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=Strawberry"},
 {name:"Caramel Goddess", price:"R520", desc:"Salted caramel", img:"https://via.placeholder.com/300x200/D2691E/FFFFFF?text=Caramel"},
 {name:"Lemon Zest Bliss", price:"R460", desc:"Zesty lemon", img:"https://via.placeholder.com/300x200/FFFACD/228B22?text=Lemon"}
];

function displayCakes(list){
 const gal=document.getElementById('cake-gallery');
 if(!gal) return;
 gal.innerHTML='';
 list.forEach(c=>{
  const div=document.createElement('div');
  div.className='card';
  div.innerHTML=`<img src="${c.img}"><h3>${c.name}</h3><p>${c.price}</p><p>${c.desc}</p><a href="enquiry.html" class="btn">Order</a>`;
  div.querySelector('img').onclick=()=>{document.getElementById('lightbox').style.display='block';document.getElementById('lightbox-img').src=c.img;}
  gal.appendChild(div);
 });
}

displayCakes(cakes);

const search=document.getElementById('cake-search');
if(search){
 search.addEventListener('input',()=>{
  const term=search.value.toLowerCase();
  displayCakes(cakes.filter(c=>c.name.toLowerCase().includes(term)));
 });
}

document.getElementById('lightbox').onclick=()=>{document.getElementById('lightbox').style.display='none';}


// WhatsApp Enquiry - Part 3 Final - Fixes Chrome 100+ issue
function sendWhatsAppEnquiry() {
  const name = document.getElementById('fullName')?.value || '';
  const email = document.getElementById('email')?.value || '';
  const phone = document.getElementById('phone')?.value || '';
  const cake = document.getElementById('cakeChoice')?.value || '';
  const qty = document.getElementById('quantity')?.value || '1';
  const colour = document.getElementById('colourChoice')?.value || '';
  const date = document.getElementById('eventDate')?.value || '';
  const msg = document.getElementById('message')?.value || '';

  if (!name || !email || !cake) {
    alert("Please fill Full Name, Email and Cake Choice");
    return;
  }

  let text = `Hi Bella's Bakes! I want to order:%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ACake: ${cake}%0AQty: ${qty}%0AColour: ${colour}%0ADate: ${date}%0AMsg: ${msg}`;

  const myNumber = "27828549578"; // <-- your real WhatsApp number

  const url = `https://wa.me/${myNumber}?text=${text}`;
  window.open(url, '_blank');
}