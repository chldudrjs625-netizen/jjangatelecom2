const products=[
 {cat:'아이폰',icon:'📱',name:'아이폰16프로 128G',carrier:'SK/KT/LG',type:'번호이동 · 기기변경',price:'상담 후 안내'},
 {cat:'아이폰',icon:'📱',name:'아이폰16 128G',carrier:'SK/KT/LG',type:'인기 모델',price:'오늘 조건 확인'},
 {cat:'갤럭시',icon:'📲',name:'갤럭시 S25 울트라',carrier:'SK/KT/LG',type:'프리미엄 특가',price:'상담 특가'},
 {cat:'갤럭시',icon:'📲',name:'갤럭시 Z플립/Z폴드',carrier:'SK/KT/LG',type:'폴더블 상담',price:'재고 문의'},
 {cat:'키즈폰',icon:'⌚',name:'우리아이 첫 스마트폰',carrier:'KT/LG/SK',type:'키즈요금제 상담',price:'월납부 확인'},
 {cat:'키즈폰',icon:'🧒',name:'키즈폰 인기 패키지',carrier:'통신사별',type:'부모님 상담 많음',price:'조건 문의'},
 {cat:'인터넷TV',icon:'🏠',name:'인터넷+TV 결합',carrier:'SK/KT/LG',type:'약정만료/이사 상담',price:'지원금 상담'},
 {cat:'인터넷TV',icon:'🎁',name:'가족결합 패키지',carrier:'통신사별',type:'휴대폰 동시 결합',price:'혜택 확인'}
];
const grid=document.getElementById('productGrid');
function render(filter='전체',keyword=''){
 const q=keyword.trim().toLowerCase();
 grid.innerHTML=products.filter(p=>(filter==='전체'||p.cat===filter)&&(!q||p.name.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q))).map(p=>`<article class="product" id="${p.cat==='아이폰'?'iphone':p.cat==='갤럭시'?'galaxy':p.cat==='키즈폰'?'kids':'internet'}"><div class="thumb">${p.icon}</div><div class="product-body"><span class="tag">${p.cat}</span><h3>${p.name}</h3><p class="meta">${p.carrier}<br>${p.type}</p><div class="price">${p.price}</div><a class="mini-btn" href="#contact" data-model="${p.name}">상담하기</a></div></article>`).join('');
 document.querySelectorAll('.mini-btn').forEach(a=>a.onclick=()=>{setTimeout(()=>{document.querySelector('[name=model]').value=a.dataset.model},50)});
}
render();
document.querySelectorAll('.chip').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.chip').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter,document.getElementById('searchInput').value)});
document.getElementById('searchBtn').onclick=()=>render(document.querySelector('.chip.active').dataset.filter,document.getElementById('searchInput').value);
document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('searchBtn').click()});
document.getElementById('leadForm').addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));const text=`안녕하세요 짱아통신 상담 신청합니다.%0A이름: ${d.name}%0A연락처: ${d.phone}%0A희망상품: ${d.model||'-'}%0A가입유형: ${d.type}%0A문의: ${d.memo||'-'}`;alert('카카오톡 상담창에 붙여넣을 문구가 만들어졌습니다.\n\n'+decodeURIComponent(text.replaceAll('%0A','\n')));});
