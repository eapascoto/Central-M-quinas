import './style.css';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const WA = 'https://wa.me/5518997326786';
const categories = [
  { id: 'padarias', number: '01', name: 'Padarias', detail: 'Atendimento para masseiras, modeladoras, cilindros, fornos, batedeiras e cortadores de frios.', image: '/assets/padarias.webp', alt: 'Equipamentos para padarias' },
  { id: 'acougues', number: '02', name: 'Açougues', detail: 'Atendimento para serras-fita, moedores de carne, batedores de bife e cortadores de frios.', image: '/assets/acougues.webp', alt: 'Equipamentos para açougues' },
  { id: 'salgados', number: '03', name: 'Salgados & pastelarias', detail: 'Fornos, masseiras, máquinas de salgados, estufas e fritadeiras para a rotina de produção.', image: '/assets/salgados.webp', alt: 'Equipamentos para salgados e pastelarias' },
  { id: 'balancas', number: '04', name: 'Balanças', detail: 'Balanças comerciais e industriais para diferentes necessidades de pesagem.', image: '/assets/balancas.webp', alt: 'Balanças comerciais e industriais' }
];
const waLink = (message) => `${WA}?text=${encodeURIComponent(message)}`;

document.querySelector('#app').innerHTML = `
  <div class="progress" aria-hidden="true"></div>
  <header class="header" id="topo">
    <a class="brand" href="#topo" aria-label="Central Máquinas e Balanças — início"><img src="/assets/central-logo-transparent.png" alt="Central Máquinas e Balanças" /></a>
    <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="main-nav"><span></span><span></span></button>
    <nav class="nav" id="main-nav" aria-label="Navegação principal">
      <a href="#manutencao">Manutenção</a><a href="#equipamentos">Equipamentos</a><a href="#resultado">Resultado real</a><a href="#sobre">A Central</a>
      <a class="nav-contact" href="#contato">Solicitar atendimento <span aria-hidden="true">→</span></a>
    </nav>
  </header>
  <main>
    <div class="experience" id="inicio">
      <div class="scene-stage" aria-label="Ilustração 3D interativa de um cortador de frios; modelo conceitual">
        <div id="scene"></div><div class="scene-vignette"></div>
        <div class="scene-fallback"><img src="/assets/cortador-depois.webp" alt="Cortador de frios após recuperação, conforme material fornecido" /></div>
        <div class="model-tag"><span class="red-dot"></span> MODELO 3D CONCEITUAL <span class="model-tag-line"></span> <span id="model-step">01 / 03</span></div>
      </div>
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-content">
          <p class="eyebrow"><span class="eyebrow-line"></span> CENTRAL MÁQUINAS E BALANÇAS <span class="eyebrow-index">LINS / SP</span></p>
          <h1 id="hero-title">SUA OPERAÇÃO<br /><em>NÃO PODE</em><br />PARAR<span class="period">.</span></h1>
          <p class="hero-lede">Manutenção de máquinas e equipamentos comerciais para manter seu negócio em movimento.</p>
          <div class="hero-actions"><a class="button button-red" href="${waLink('Olá! Gostaria de solicitar manutenção de um equipamento.')}" target="_blank" rel="noopener noreferrer">Solicitar manutenção <span aria-hidden="true">→</span></a><a class="text-link" href="#manutencao">Conhecer nossos serviços <span aria-hidden="true">↓</span></a></div>
        </div>
        <div class="hero-bottom"><span>01 — ENGENHARIA EM MOVIMENTO</span><span class="hero-scroll">ROLE PARA EXPLORAR <span aria-hidden="true">↓</span></span></div>
      </section>
      <section class="story" id="processo" aria-label="Narrativa de manutenção">
        <div class="story-step story-step-one"><span class="step-number">01 / 03 · OBSERVAR</span><h2>O detalhe faz<br />a diferença.</h2><p>Por trás de cada operação há uma máquina que precisa funcionar. A manutenção começa por entender o equipamento e o problema.</p></div>
        <div class="story-step story-step-two"><span class="step-number">02 / 03 · INTERVIR</span><h2>Precisão em<br /><em>cada ajuste.</em></h2><p>Dos componentes ao conjunto, o cuidado técnico ajuda a devolver o equipamento à rotina do negócio.</p></div>
        <div class="story-step story-step-three"><span class="step-number">03 / 03 · SEGUIR</span><h2>Seu trabalho<br />continua.</h2><p>A Central coloca a manutenção no centro da conversa. Conte o que aconteceu com sua máquina e solicite atendimento.</p><a class="small-arrow" href="#contato">FALE COM A CENTRAL <span aria-hidden="true">→</span></a></div>
      </section>
    </div>
    <section class="maintenance section-wrap" id="manutencao">
      <div class="section-kicker"><span class="square"></span> O QUE MOVE A CENTRAL <span>02 / 07</span></div>
      <div class="maintenance-grid"><div><h2>MANUTENÇÃO<br />É O NOSSO<br /><span>FORTE.</span></h2><p class="maintenance-intro">Quando um equipamento para, a rotina inteira sente. A Central atua com manutenção de máquinas e balanças para negócios que dependem delas todos os dias.</p><a class="underlink" href="#contato">Preciso de assistência <span aria-hidden="true">→</span></a></div><div class="maintenance-side"><div class="giant-index">C<span>/</span>M</div><p>Equipamentos para produção, preparo, corte e pesagem.</p><div class="rule"></div><span class="micro">ATENDIMENTO • LINS / SP</span></div></div>
    </section>
    <section class="category-section" id="equipamentos">
      <div class="section-wrap"><div class="section-kicker"><span class="square"></span> EQUIPAMENTOS & SEGMENTOS <span>03 / 07</span></div><div class="category-heading"><h2>EM CADA ETAPA<br /><em>DO SEU NEGÓCIO.</em></h2><p>Máquinas e equipamentos para produção, preparo, corte e pesagem. Fale com a Central sobre a necessidade do seu negócio.</p></div>
        <div class="category-layout"><div class="category-list" role="tablist" aria-label="Segmentos atendidos">${categories.map((c,i)=>`<button class="category-tab ${i===0?'active':''}" role="tab" id="tab-${c.id}" aria-selected="${i===0}" aria-controls="category-panel" data-category="${c.id}"><span>${c.number}</span><strong>${c.name}</strong><b aria-hidden="true">→</b></button>`).join('')}</div><div class="category-panel" id="category-panel" role="tabpanel" aria-labelledby="tab-padarias"><div class="category-image-wrap"><img id="category-image" src="/assets/padarias.webp" alt="${categories[0].alt}" /><div class="image-overlay"><span>EQUIPAMENTOS PARA ATENDIMENTO</span><span id="category-count">01 — 04</span></div></div><div class="category-copy"><p id="category-description">${categories[0].detail}</p><a id="category-cta" class="underlink" href="${waLink('Olá! Gostaria de consultar atendimento para um equipamento de padaria.')}" target="_blank" rel="noopener noreferrer">Consultar atendimento <span aria-hidden="true">→</span></a></div></div></div>
      </div>
    </section>
    <section class="result section-wrap" id="resultado"><div class="section-kicker"><span class="square"></span> RECUPERAÇÃO DE EQUIPAMENTO <span>04 / 07</span></div><div class="result-heading"><div><p class="micro red-text">CORTADOR DE FRIOS</p><h2>UM EQUIPAMENTO.<br /><em>OUTRA CONDIÇÃO.</em></h2></div><p>Veja o resultado de uma recuperação de cortador de frios realizada pela Central.</p></div><div class="comparison" id="comparison"><div class="comparison-image before"><img src="/assets/cortador-antes.webp" alt="Cortador de frios com desgaste e pintura danificada, antes da recuperação" /><span class="compare-label">ANTES</span></div><div class="comparison-image after"><img src="/assets/cortador-depois.webp" alt="Cortador de frios revisado e revitalizado, depois da recuperação" /><span class="compare-label">DEPOIS</span></div><div class="comparison-divider" aria-hidden="true"><span>↔</span></div><input type="range" id="comparison-range" min="0" max="100" value="50" aria-label="Comparar fotos antes e depois; deslize para revelar" /></div></section>
    <section class="about" id="sobre"><div class="section-wrap about-grid"><div><div class="section-kicker"><span class="square"></span> A CENTRAL <span>05 / 07</span></div><h2>MANUTENÇÃO QUE<br /><em>MANTÉM SEU NEGÓCIO</em><br />FUNCIONANDO.</h2><p>A Central Máquinas e Balanças atua em Lins/SP, com foco na manutenção de máquinas e equipamentos comerciais para negócios que dependem deles diariamente.</p><a class="underlink light" href="#contato">Solicitar atendimento <span aria-hidden="true">→</span></a></div><div class="about-visual" aria-hidden="true"><div class="about-gear"></div><span class="about-signal">CENTRAL<br /><b>EM MOVIMENTO</b></span><p>MANUTENÇÃO · LINS / SP</p></div></div></section>
    <section class="contact section-wrap" id="contato"><div class="section-kicker"><span class="square"></span> PRÓXIMO PASSO <span>06 / 07</span></div><div class="contact-grid"><div><p class="micro red-text">SEU EQUIPAMENTO PRECISA DE ATENÇÃO?</p><h2>VAMOS COLOCAR<br />TUDO <em>EM MOVIMENTO.</em></h2><p>Conte o que está acontecendo. A mensagem será preparada para você enviar diretamente pelo WhatsApp.</p><a class="contact-phone" href="${WA}" target="_blank" rel="noopener noreferrer">+55 18 99732-6786 →</a></div><form id="contact-form"><label>SEU NOME<input name="name" autocomplete="name" placeholder="Como podemos chamar você?" required /></label><label>EQUIPAMENTO<input name="equipment" placeholder="Ex.: cortador de frios" required /></label><label>O QUE ACONTECEU?<textarea name="problem" rows="3" placeholder="Descreva o problema brevemente" required></textarea></label><button class="button button-red" type="submit">Continuar no WhatsApp <span aria-hidden="true">→</span></button><p class="form-note">O envio é concluído no WhatsApp. Nenhum dado é armazenado neste site.</p></form></div></section>
  </main>
  <footer class="footer"><div class="section-wrap"><div class="footer-top"><a class="footer-brand" href="#topo"><img src="/assets/central-logo-transparent.png" alt="Central Máquinas e Balanças" /></a><p>Máquinas em movimento.<br />Negócios em frente.</p></div><div class="footer-bottom"><span>LINS / SÃO PAULO · BRASIL</span><nav aria-label="Links do rodapé"><a href="#manutencao">Manutenção</a><a href="#equipamentos">Equipamentos</a><a href="#resultado">Resultado real</a><a href="#contato">Contato</a></nav><a href="${WA}" target="_blank" rel="noopener noreferrer">WHATSAPP →</a></div><p class="demo-note">Demonstração comercial independente. Endereço completo pendente de confirmação; materiais e fotografias fornecidos pelo cliente.</p></div></footer>
`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  document.body.classList.toggle('menu-open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Abrir menu'); document.body.classList.remove('menu-open');
}));

const tabs = [...document.querySelectorAll('.category-tab')];
const categoryImage = document.querySelector('#category-image');
const categoryDescription = document.querySelector('#category-description');
const categoryCta = document.querySelector('#category-cta');
const categoryCount = document.querySelector('#category-count');
let categoryRequest = 0;
function selectCategory(id) {
  const item = categories.find(c => c.id === id);
  if (!item) return;
  tabs.forEach(tab => { const selected = tab.dataset.category === id; tab.classList.toggle('active', selected); tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1; });
  const panel = document.querySelector('#category-panel');
  panel.setAttribute('aria-labelledby', `tab-${id}`);
  const request = ++categoryRequest;
  categoryImage.classList.add('changing');
  const nextImage = new Image();
  nextImage.src = item.image;
  nextImage.onload = () => {
    if (request !== categoryRequest) return;
    categoryImage.src = item.image;
    categoryImage.alt = item.alt;
    categoryImage.classList.remove('changing');
  };
  nextImage.onerror = () => { if (request === categoryRequest) categoryImage.classList.remove('changing'); };
  categoryDescription.textContent = item.detail;
  categoryCta.href = waLink(`Olá! Gostaria de consultar atendimento para equipamentos do segmento de ${item.name.toLowerCase()}.`);
  categoryCount.textContent = `${item.number} — 04`;
}
tabs.forEach((tab,index) => {
  tab.addEventListener('click', () => selectCategory(tab.dataset.category));
  tab.addEventListener('keydown', e => {
    if (!['ArrowDown','ArrowUp','ArrowRight','ArrowLeft','Home','End'].includes(e.key)) return;
    e.preventDefault();
    let next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length-1 : (index + (['ArrowDown','ArrowRight'].includes(e.key) ? 1 : -1) + tabs.length) % tabs.length;
    selectCategory(tabs[next].dataset.category); tabs[next].focus();
  });
});
document.querySelector('#contact-form').addEventListener('submit', e => {
  e.preventDefault(); const data = new FormData(e.currentTarget);
  const message = `Olá, Central Máquinas e Balanças! Gostaria de solicitar atendimento.\n\nNome: ${data.get('name').trim()}\nEquipamento: ${data.get('equipment').trim()}\nProblema: ${data.get('problem').trim()}`;
  window.open(waLink(message), '_blank', 'noopener,noreferrer');
});

const range = document.querySelector('#comparison-range');
function updateComparison() { document.querySelector('#comparison').style.setProperty('--split', `${range.value}%`); }
range.addEventListener('input', updateComparison);
updateComparison();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  document.querySelector('.progress').style.transform = `scaleX(${max ? scrollY/max : 0})`;
  document.querySelector('.header').classList.toggle('scrolled', scrollY > 30);
}, { passive: true });
if (!reduceMotion) {
  gsap.utils.toArray('.story-step').forEach((step,index) => {
    ScrollTrigger.create({ trigger: step, start: 'top 72%', end: 'bottom 28%', toggleClass: 'in-view', onEnter: () => document.querySelector('#model-step').textContent = `${String(index+1).padStart(2,'0')} / 03`, onEnterBack: () => document.querySelector('#model-step').textContent = `${String(index+1).padStart(2,'0')} / 03` });
  });
  gsap.utils.toArray('.section-kicker, .maintenance h2, .category-heading h2, .result-heading h2, .about h2, .contact h2').forEach(el => {
    gsap.from(el, { y: 38, opacity: 0, duration: .8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });
} else { document.querySelectorAll('.story-step').forEach(step => step.classList.add('in-view')); }

// A purpose-built, lightweight conceptual slicer assembled from geometry rather than a catalog model.
const canvasHost = document.querySelector('#scene');
let renderer, scene, camera, mount, machine, blade, frameId, sceneVisible = true;
const pointer = { x: 0, y: 0 };
try {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2', { alpha: true, antialias: true, powerPreference: 'low-power' }) || canvas.getContext('webgl', { alpha: true, antialias: true, powerPreference: 'low-power' });
  if (!gl) throw new Error('WebGL indisponível');
  renderer = new THREE.WebGLRenderer({ canvas, context: gl, alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.65;
  canvasHost.appendChild(renderer.domElement);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(34, 1, .1, 100);
  camera.position.set(6, 3.2, 10.8); camera.lookAt(0, .3, 0);
  scene.add(new THREE.AmbientLight(0xffffff, 2));
  const key = new THREE.DirectionalLight(0xffffff, 4.5); key.position.set(4, 8, 6); scene.add(key);
  const red = new THREE.DirectionalLight(0xe43d30, 3); red.position.set(-5, 2, -3); scene.add(red);
  const rim = new THREE.DirectionalLight(0x8aa0a5, 2.5); rim.position.set(0, 5, -6); scene.add(rim);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xd73125, metalness: .58, roughness: .27 });
  const bodyDark = new THREE.MeshStandardMaterial({ color: 0x7d1612, metalness: .55, roughness: .34 });
  const metal = new THREE.MeshStandardMaterial({ color: 0xd9e1e0, metalness: .46, roughness: .27 });
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x465053, metalness: .5, roughness: .34 });
  const rubber = new THREE.MeshStandardMaterial({ color: 0x171b1d, metalness: .1, roughness: .72 });
  mount = new THREE.Group(); scene.add(mount);
  machine = new THREE.Group(); mount.add(machine);
  function box(w,h,d,x,y,z,mat, group=machine) { const m=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,3,Math.min(w,h,d)*.09),mat);m.position.set(x,y,z);group.add(m);return m; }
  function cyl(r1,r2,h,x,y,z,mat,rotation,group=machine){const m=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,h,48),mat);m.position.set(x,y,z);if(rotation)m.rotation.set(...rotation);group.add(m);return m;}
  box(4.9,.62,2.65,0,-.8,0,bodyMat); box(5,.12,2.75,0,-1.14,0,bodyDark);
  box(1.34,1.95,2.02,1.58,.42,-.15,bodyMat);
  box(1.45,.25,2.12,1.58,1.45,-.15,bodyDark);
  box(.22,.5,.22,-1.8,-1.25,.86,rubber);box(.22,.5,.22,1.8,-1.25,.86,rubber);
  box(.22,.5,.22,-1.8,-1.25,-.86,rubber);box(.22,.5,.22,1.8,-1.25,-.86,rubber);
  // Blade sits on the visible front side of the red motor housing.
  blade = new THREE.Group(); blade.position.set(1.42,.45,1.04); machine.add(blade);
  cyl(1.13,1.13,.085,0,0,0,metal,[Math.PI/2,0,0],blade);
  const outer = new THREE.Mesh(new THREE.TorusGeometry(1.14,.052,12,72),darkMetal);blade.add(outer);
  const brushed = new THREE.MeshBasicMaterial({color:0xf0f4f2,transparent:true,opacity:.36,depthWrite:false});
  for(const radius of [.56,.79,1.02]){const line=new THREE.Mesh(new THREE.TorusGeometry(radius,.006,5,72),brushed);line.position.z=.055;blade.add(line);}
  cyl(.17,.17,.16,0,0,.09,darkMetal,[Math.PI/2,0,0],blade);
  for(let a=0;a<4;a++){const angle=a*Math.PI/2;cyl(.025,.025,.012,Math.cos(angle)*.34,Math.sin(angle)*.34,.066,darkMetal,[Math.PI/2,0,0],blade);}
  const bladeGuard = new THREE.Mesh(new THREE.TorusGeometry(1.18,.12,12,60,Math.PI*1.23),bodyMat);bladeGuard.rotation.z=.12;bladeGuard.position.z=.12;blade.add(bladeGuard);
  // Sliding carriage, rails, table and handles.
  box(2.9,.13,1.8,-1.17,-.17,.32,metal);
  box(2.55,.1,.08,-1.12,-.4,1.14,darkMetal);
  box(2.55,.1,.08,-1.12,-.4,-.52,darkMetal);
  const carriage = new THREE.Group();carriage.rotation.z=-.16;machine.add(carriage);
  box(1.65,.12,1.48,-1.12,.26,.5,metal,carriage);
  box(.13,.87,1.48,-1.94,.66,.5,metal,carriage);
  box(.12,.8,1.48,-.35,.66,.5,darkMetal,carriage);
  box(.22,.73,.2,-1.99,.7,1.4,rubber,carriage);
  cyl(.2,.2,.13,-1.83,-.83,1.4,rubber,[Math.PI/2,0,0]);
  box(.8,.24,.05,1.6,-.73,1.34,darkMetal);
  for(let i=0;i<5;i++) box(.11,.02,.025,1.3+i*.15,-.73,1.37,metal);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(200,200), new THREE.MeshBasicMaterial({color:0x161b1d,transparent:true,opacity:.25}));floor.rotation.x=-Math.PI/2;floor.position.y=-1.52;scene.add(floor);
  function resize(){ const w=canvasHost.clientWidth,h=canvasHost.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false); }
  resize(); window.addEventListener('resize',resize,{passive:true});
  const experience = document.querySelector('.experience');
  experience.addEventListener('pointermove',e=>{if(reduceMotion || (e.pointerType==='touch' && e.buttons===0))return;pointer.x=(e.clientX/innerWidth-.5)*.3;pointer.y=(e.clientY/innerHeight-.5)*.12;},{passive:true});
  const observer = new IntersectionObserver(entries=>{sceneVisible=entries[0].isIntersecting;if(sceneVisible && !frameId)render();},{threshold:0});observer.observe(document.querySelector('.experience'));
  let time=0;
  function render(){if(!sceneVisible || document.hidden){frameId=null;return;}if(!reduceMotion){time+=.012;machine.rotation.y += (pointer.x-machine.rotation.y)*.045;machine.rotation.x += (pointer.y-machine.rotation.x)*.045;machine.position.y=Math.sin(time)*.045;blade.rotation.z+=.003;}renderer.render(scene,camera);frameId=reduceMotion?null:requestAnimationFrame(render);}
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();sceneVisible=false;if(frameId)cancelAnimationFrame(frameId);document.body.classList.remove('has-webgl');document.body.classList.add('no-webgl');});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden && sceneVisible && !frameId)render();});render();
  document.body.classList.add('has-webgl');
  if(!reduceMotion){
    const tl=gsap.timeline({scrollTrigger:{trigger:'.experience',start:'top top',end:'bottom bottom',scrub:1.2}});
    tl.to(mount.rotation,{z:-.08,y:.28,duration:.35,ease:'none'},0)
      .to(camera.position,{x:3.8,y:2.7,z:7.2,duration:.4,ease:'none'},.1)
      .to(mount.rotation,{y:-.62,z:.04,duration:.45,ease:'none'},.45)
      .to(camera.position,{x:4.4,y:2.2,z:8.5,duration:.4,ease:'none'},.6)
      .to('.scene-stage',{opacity:.82,duration:.18},.82);
  }
} catch (error) {
  document.body.classList.add('no-webgl');
  console.info('Visual estático ativado:',error.message);
}
