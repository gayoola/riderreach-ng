const riders = [
  {id:1,type:'rider',name:'Ade Dispatch',base:'Ikorodu',coverage:['Agbowa','Ijede','Imota','Ikorodu North','Odogunyan'],price:[4200,5000],rating:4.8,deliveries:42,response:15,completion:96,onTime:94,score:92,tags:['Bulky','After 6pm'],phone:'2348011110001'},
  {id:2,type:'rider',name:'Tunde Express',base:'Epe',coverage:['Epe','Ilara','Poka','Odomola','Ibeju-Lekki'],price:[4500,5500],rating:4.6,deliveries:38,response:20,completion:94,onTime:91,score:88,tags:['Fragile','Same day'],phone:'2348011110002'},
  {id:3,type:'rider',name:'Kemi Local Run',base:'Ijede',coverage:['Ijede','Imota','Agbowa','Igbogbo'],price:[3800,4700],rating:4.7,deliveries:51,response:12,completion:97,onTime:95,score:94,tags:['Budget','Fragile'],phone:'2348011110003'},
  {id:4,type:'rider',name:'Mowo Mobility',base:'Mowe',coverage:['Mowe-Ofada','Mowe','Ofada','Loburo','Ibafo'],price:[4000,5200],rating:4.5,deliveries:33,response:18,completion:93,onTime:90,score:86,tags:['Bulky'],phone:'2348011110004'},
  {id:5,type:'rider',name:'Epe Axis Riders',base:'Epe',coverage:['Epe','Ilara','Noforija','Eredo','Poka'],price:[4300,5400],rating:4.8,deliveries:47,response:16,completion:96,onTime:93,score:91,tags:['Fragile'],phone:'2348011110005'},
  {id:6,type:'rider',name:'Ibeju Connect',base:'Ibeju-Lekki',coverage:['Ibeju-Lekki','Akodo','Awoyaya','Bogije','Eleko'],price:[5000,6200],rating:4.7,deliveries:29,response:22,completion:92,onTime:89,score:84,tags:['Bulky','After 6pm'],phone:'2348011110006'},
  {id:7,type:'rider',name:'Badagry Link',base:'Badagry',coverage:['Badagry','Ajara','Seme','Topo','Ijanikin'],price:[4600,5800],rating:4.6,deliveries:41,response:17,completion:95,onTime:92,score:89,tags:['Intercity'],phone:'2348011110007'},
  {id:8,type:'rider',name:'Oke-Aro Runs',base:'Oke-Aro',coverage:['Oke-Aro','Akute','Alagbole','Lamido','Ojodu-Abiodun'],price:[3500,4600],rating:4.5,deliveries:35,response:14,completion:94,onTime:90,score:87,tags:['Budget'],phone:'2348011110008'},
  {id:9,type:'rider',name:'Agbowa Neighbourhood',base:'Agbowa',coverage:['Agbowa','Imota','Ketu-Epe','Odomola'],price:[3600,4500],rating:4.9,deliveries:63,response:10,completion:98,onTime:96,score:96,tags:['Local specialist','Fragile'],phone:'2348011110009'},
  {id:10,type:'rider',name:'Mile 12 Rural Link',base:'Ikorodu',coverage:['Agbowa','Ijede','Imota','Eredo','Ketu-Epe'],price:[4100,5100],rating:4.7,deliveries:44,response:15,completion:95,onTime:93,score:90,tags:['Bulky'],phone:'2348011110010'},
  {id:11,type:'rider',name:'FringeRoute NG',base:'Ikorodu North',coverage:['Ikorodu North','Odogunyan','Ipakodo','Ijede','Imota'],price:[3900,4900],rating:4.6,deliveries:36,response:13,completion:94,onTime:92,score:88,tags:['After 6pm'],phone:'2348011110011'},
  {id:12,type:'rider',name:'Ofada Swift',base:'Ofada',coverage:['Ofada','Mowe-Ofada','Mowe','Loburo','Ibafo'],price:[3900,5000],rating:4.6,deliveries:40,response:16,completion:95,onTime:91,score:89,tags:['Same day'],phone:'2348011110012'},
  {id:13,type:'rider',name:'Ilara Local Dispatch',base:'Ilara',coverage:['Ilara','Epe','Poka','Noforija','Eredo'],price:[4200,5300],rating:4.8,deliveries:45,response:14,completion:96,onTime:94,score:92,tags:['Local specialist'],phone:'2348011110013'},
  {id:14,type:'rider',name:'Ajara Riders',base:'Ajara',coverage:['Ajara','Badagry','Seme','Topo','Ijanikin'],price:[4500,5700],rating:4.7,deliveries:31,response:19,completion:93,onTime:91,score:87,tags:['Intercity'],phone:'2348011110014'},
  {id:15,type:'rider',name:'Estate2Village',base:'Lekki',coverage:['Awoyaya','Bogije','Eleko','Ibeju-Lekki','Akodo'],price:[5000,6300],rating:4.8,deliveries:27,response:21,completion:92,onTime:90,score:85,tags:['Bulky','Fragile'],phone:'2348011110015'},
  {id:16,type:'rider',name:'Ikorodu North Couriers',base:'Ikorodu North',coverage:['Ikorodu North','Odogunyan','Agbowa','Ipakodo'],price:[4000,5000],rating:4.7,deliveries:39,response:15,completion:95,onTime:92,score:90,tags:['Budget'],phone:'2348011110016'},
  {id:17,type:'rider',name:'Eredo Express',base:'Eredo',coverage:['Eredo','Epe','Ilara','Poka','Noforija'],price:[4100,5200],rating:4.7,deliveries:34,response:17,completion:94,onTime:92,score:89,tags:['Same day'],phone:'2348011110017'},
  {id:18,type:'rider',name:'Imota Connect',base:'Imota',coverage:['Imota','Agbowa','Ijede','Igbogbo'],price:[3700,4600],rating:4.8,deliveries:49,response:11,completion:97,onTime:95,score:94,tags:['Local specialist'],phone:'2348011110018'}
];

const trucks = [
  {id:'t1',type:'truck',name:'WestLink Haulage',route:'Lagos → Benin',returnRoute:'Benin → Lagos',capacity:'5–10 tons',available:'Tomorrow',score:91,rating:4.8,deliveries:118},
  {id:'t2',type:'truck',name:'Eko–East Transport',route:'Lagos → Onitsha',returnRoute:'Onitsha → Lagos',capacity:'10+ tons',available:'Friday',score:88,rating:4.7,deliveries:96},
  {id:'t3',type:'truck',name:'NorthSouth Freight',route:'Lagos → Abuja',returnRoute:'Abuja → Lagos',capacity:'1–5 tons',available:'Saturday',score:94,rating:4.9,deliveries:142},
  {id:'t4',type:'truck',name:'Benin Corridor Movers',route:'Benin → Lagos',returnRoute:'Lagos → Benin',capacity:'5–10 tons',available:'Monday',score:86,rating:4.6,deliveries:73}
];

const localities = ['Agbowa','Ijede','Imota','Epe','Ilara','Poka','Odomola','Ibeju-Lekki','Akodo','Awoyaya','Bogije','Eleko','Badagry','Ajara','Seme','Topo','Ijanikin','Mowe-Ofada','Mowe','Ofada','Loburo','Ibafo','Oke-Aro','Akute','Alagbole','Lamido','Ojodu-Abiodun','Ikorodu North','Odogunyan','Ipakodo','Igbogbo','Ketu-Epe','Eredo','Noforija','Epe Road','Majidun','Ibeshe','Itamaga','Aga','Parafa','Agura','Maya','Ewu-Oku','Ota-Ikosi','Itele','Ilaro','Owode','Mowe Hills','Arepo','Isheri-Olofin','Berger','Ofin'];

function norm(v){return String(v||'').toLowerCase().trim().replace(/[–—]/g,'-').replace(/\s+/g,' ');}
function money(n){return '₦'+Number(n).toLocaleString('en-NG');}
function showView(view){
  document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));
  document.getElementById('view-'+view).classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  window.scrollTo({top:0,behavior:'smooth'});
  if(view==='network') renderNetwork();
}
function scrollToSearch(){showView('home'); setTimeout(()=>document.getElementById('search-panel').scrollIntoView({behavior:'smooth'}),100);}
function setDestination(value, searchNow=false){
  document.getElementById('destination').value=value;
  document.getElementById('suggestions').classList.add('hidden');
  if(searchNow) runSearch();
}
function handleDestinationInput(){
  const q=norm(document.getElementById('destination').value);
  const box=document.getElementById('suggestions');
  if(!q){box.classList.add('hidden');return;}
  const hits=localities.filter(x=>norm(x).includes(q)).slice(0,7);
  box.innerHTML=hits.map(x=>`<button onclick="setDestination('${x.replace(/'/g,"\\'")}',true)" class="block w-full text-left px-4 py-3 hover:bg-mint text-sm font-semibold">${x}<span class="block text-xs text-slate-400 font-normal">Destination coverage lookup</span></button>`).join('');
  box.classList.toggle('hidden',hits.length===0);
}
function runSearch(){
  const dest=document.getElementById('destination').value.trim();
  if(!dest){alert('Enter a destination first.');return;}
  const matches=riders.filter(r=>r.coverage.some(c=>norm(c)===norm(dest) || norm(c).includes(norm(dest)) || norm(dest).includes(norm(c))));
  window.currentMatches=matches;
  document.getElementById('results').classList.remove('hidden');
  document.getElementById('resultMeta').textContent=`${matches.length} operator${matches.length===1?'':'s'} found for ${dest}`;
  renderResults();
  document.getElementById('results').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderResults(){
  const matches=[...(window.currentMatches||[])];
  const sort=document.getElementById('sortBy').value;
  matches.sort((a,b)=> sort==='price'?a.price[0]-b.price[0]:sort==='rating'?b.rating-a.rating:sort==='response'?a.response-b.response:b.score-a.score);
  const no=document.getElementById('noCoverage'), grid=document.getElementById('riderCards');
  no.classList.toggle('hidden',matches.length>0); grid.classList.toggle('hidden',matches.length===0);
  if(!matches.length){document.getElementById('priceBanner').innerHTML='';return;}
  const min=Math.min(...matches.map(x=>x.price[0])),max=Math.max(...matches.map(x=>x.price[1]));
  document.getElementById('priceBanner').innerHTML=`<div class="rounded-2xl bg-mint border border-emerald-100 p-5"><div class="text-xs font-bold uppercase tracking-widest text-brand">Coverage price benchmark</div><div class="mt-1 flex flex-wrap items-baseline gap-2"><span class="text-2xl font-black">${money(min)}–${money(max)}</span><span class="text-sm text-slate-500">typical local range for this demo route</span></div><div class="text-xs text-slate-500 mt-1">Compare final price, parcel condition and availability with the operator before handing over the parcel.</div></div>`;
  grid.innerHTML=matches.map(r=>`
    <article class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div class="flex justify-between gap-3">
        <div><div class="font-extrabold">${r.name}</div><div class="text-xs text-slate-500 mt-1">Base: ${r.base}</div></div>
        <div class="text-right"><div class="text-xs text-slate-400">DeliveryScore</div><div class="text-2xl font-black text-brand">${r.score}</div><div class="text-[11px] text-slate-400">/100</div></div>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-4">
        <div class="stat"><b>★ ${r.rating}</b><span>rating</span></div>
        <div class="stat"><b>${r.deliveries}</b><span>deliveries</span></div>
        <div class="stat"><b>${r.response}–${r.response+10}m</b><span>response</span></div>
      </div>
      <div class="mt-4 text-sm"><span class="font-bold">${money(r.price[0])}–${money(r.price[1])}</span> <span class="text-slate-400">estimated route range</span></div>
      <div class="flex flex-wrap gap-1.5 mt-3">${r.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="text-xs text-slate-500 mt-4">${r.completion}% completion · ${r.onTime}% on-time demo record</div>
      <button onclick="chatRider(${r.id})" class="mt-4 w-full rounded-xl bg-brand text-white py-2.5 font-bold hover:bg-brandDark">Chat on WhatsApp</button>
    </article>`).join('');
}
function chatRider(id){
  const r=riders.find(x=>x.id===id), dest=document.getElementById('destination').value, pickup=document.getElementById('pickup').value, size=document.getElementById('parcelSize').value, fragile=document.getElementById('fragile').checked;
  const msg=`Hi ${r.name}, I found you on RiderReach.%0A%0APickup: ${pickup}%0ADestination: ${dest}%0AParcel: ${size}%0ACondition: ${fragile?'Fragile':'Standard'}%0ARiderReach price benchmark: ${money(r.price[0])}–${money(r.price[1])}%0A%0AAre you available and can you confirm the final price?`;
  window.open(`https://wa.me/${r.phone}?text=${msg}`,'_blank');
}
function findLogisticsCoverage(){
  const dest=document.getElementById('logDest').value.trim();
  const matches=riders.filter(r=>r.coverage.some(c=>norm(c)===norm(dest) || norm(c).includes(norm(dest)) || norm(dest).includes(norm(c)))).sort((a,b)=>b.score-a.score);
  document.getElementById('logisticsResults').innerHTML=matches.length?`<div class="grid md:grid-cols-2 gap-4">${matches.slice(0,4).map(r=>`<div class="rounded-2xl border border-slate-200 p-5"><div class="flex justify-between"><div><b>${r.name}</b><div class="text-xs text-slate-500 mt-1">${r.base} · ${r.deliveries} deliveries</div></div><b class="text-brand text-xl">${r.score}</b></div><div class="text-sm mt-3">${r.completion}% completion · ${r.onTime}% on-time · ${r.response}–${r.response+10}m response</div><div class="text-sm font-bold mt-2">${money(r.price[0])}–${money(r.price[1])}</div><button onclick="chatRider(${r.id})" class="mt-4 rounded-xl bg-brand text-white px-4 py-2 font-bold text-sm">Contact operator</button></div>`).join('')}</div>`:`<div class="rounded-2xl bg-slate-50 p-6 text-sm text-slate-500">No seeded partner covers ${dest} yet. Add it to your coverage expansion queue.</div>`;
}
function updateBackhaulMode(){
  const mode=document.getElementById('backhaulMode').value;
  document.getElementById('bhFrom').value=mode==='cargo'?'Lagos':'Benin';
  document.getElementById('bhTo').value=mode==='cargo'?'Benin':'Lagos';
}
function searchBackhaul(){
  const from=norm(document.getElementById('bhFrom').value),to=norm(document.getElementById('bhTo').value);
  const route=trucks.filter(t=>norm(t.returnRoute).includes(from) && norm(t.returnRoute).includes(to) || norm(t.route).includes(from) && norm(t.route).includes(to));
  const matches=route.length?route:trucks.filter(t=>norm(t.returnRoute).includes(to)||norm(t.route).includes(to));
  document.getElementById('backhaulResults').innerHTML=`<div class="grid md:grid-cols-2 gap-4">${matches.map(t=>`<div class="rounded-2xl border border-slate-200 p-5"><div class="flex justify-between"><div><b>${t.name}</b><div class="text-xs text-slate-500 mt-1">${t.returnRoute}</div></div><div class="text-brand font-black">${t.score}</div></div><div class="grid grid-cols-3 gap-2 mt-4"><div class="stat"><b>${t.capacity}</b><span>capacity</span></div><div class="stat"><b>${t.available}</b><span>available</span></div><div class="stat"><b>★ ${t.rating}</b><span>rating</span></div></div><div class="text-sm text-slate-500 mt-4">Verified demo operator · ${t.deliveries} completed hauls</div><button onclick="openJoinModal('truck')" class="mt-4 rounded-xl bg-brand text-white px-4 py-2.5 font-bold text-sm">Request match</button></div>`).join('')}</div>`;
}
function renderNetwork(){
  const type=document.getElementById('networkType').value;
  let data=type==='rider'?riders:type==='truck'?trucks:[...riders,...trucks];
  data.sort((a,b)=>b.score-a.score);
  document.getElementById('networkTable').innerHTML=`<table class="w-full text-sm"><thead><tr class="text-left border-b border-slate-200 text-slate-500"><th class="py-3 pr-4">Operator</th><th class="py-3 pr-4">Type</th><th class="py-3 pr-4">DeliveryScore</th><th class="py-3 pr-4">Rating</th><th class="py-3 pr-4">Experience</th><th class="py-3">Coverage / route</th></tr></thead><tbody>${data.map(x=>`<tr class="border-b border-slate-100"><td class="py-4 pr-4 font-bold">${x.name}</td><td class="py-4 pr-4"><span class="tag">${x.type==='truck'?'Truck':'Local rider'}</span></td><td class="py-4 pr-4"><span class="font-black text-brand">${x.score}</span><span class="text-slate-400">/100</span></td><td class="py-4 pr-4">★ ${x.rating}</td><td class="py-4 pr-4">${x.deliveries} ${x.type==='truck'?'hauls':'deliveries'}</td><td class="py-4">${x.type==='truck'?x.route:x.coverage.slice(0,4).join(', ')}</td></tr>`).join('')}</tbody></table>`;
}
function openJoinModal(type){
  document.getElementById('joinModal').classList.remove('hidden');
  if(type) document.getElementById('joinType').value=type;
}
function closeJoinModal(){document.getElementById('joinModal').classList.add('hidden');}
function submitJoin(e){
  e.preventDefault();
  const lead={type:document.getElementById('joinType').value,name:document.getElementById('joinName').value,phone:document.getElementById('joinPhone').value,area:document.getElementById('joinArea').value,createdAt:new Date().toISOString()};
  const leads=JSON.parse(localStorage.getItem('riderreach_leads')||'[]'); leads.push(lead); localStorage.setItem('riderreach_leads',JSON.stringify(leads));
  closeJoinModal(); alert('Thanks — your interest has been saved in this prototype.'); e.target.reset();
}
document.addEventListener('click',e=>{if(!e.target.closest('#destination')&&!e.target.closest('#suggestions'))document.getElementById('suggestions').classList.add('hidden');});
