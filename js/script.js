
document.querySelector('.menu-btn').onclick=()=>document.querySelector('nav').classList.toggle('ativo');

const themeToggle=document.querySelector('.theme-toggle');
const themeIcon=document.querySelector('.theme-icon');
if(themeToggle){
  themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('light');
    const isLight=document.body.classList.contains('light');
    if(themeIcon){
      themeIcon.textContent=isLight?'☾':'☀︎';
    }
  });
}

const contatoForm=document.getElementById('contato-form');
if (contatoForm) {
  contatoForm.addEventListener('submit', e => {
    e.preventDefault();

    const nome = document.getElementById('nome')?.value.trim();
    const modelo = document.getElementById('modelo')?.value.trim();
    const ano = document.getElementById('ano')?.value.trim();
    const mensagem = document.getElementById('mensagem')?.value.trim();

    if (!nome || !modelo || !ano || !mensagem) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    const mensagemIntro = 'Olá, estou vindo pelo site, gostaria de um orçamento 😊';
    const texto = `${mensagemIntro}\n\nNome: ${nome}\nModelo do Veículo: ${modelo}\nAno do Veículo: ${ano}\nMensagem: ${mensagem}`;
    const numero = '5511940166100';
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  });
}

document.querySelectorAll('.animar').forEach(el=>{
const obs=new IntersectionObserver(entries=>{
if(entries[0].isIntersecting) el.classList.add('show');
});
obs.observe(el);
});

document.querySelectorAll('.contador').forEach(c=>{
let t=+c.dataset.target,v=0;
let i=setInterval(()=>{
v+=Math.ceil(t/80);
if(v>=t){v=t;clearInterval(i);}
c.textContent=v;
},25);
});

let slides=document.querySelectorAll('.slide');
let s=0;
setInterval(()=>{
slides[s].classList.remove('active');
s=(s+1)%slides.length;
slides[s].classList.add('active');
},3000);

const light=document.getElementById('lightbox');
const img=light.querySelector('img');
document.querySelectorAll('.galeria img').forEach(f=>{
f.onclick=()=>{img.src=f.src;light.style.display='flex';}
});
light.onclick=()=>light.style.display='none';
