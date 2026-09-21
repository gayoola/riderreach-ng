  // -----------------------------
  // RiderReach prototype dataset
  // -----------------------------
  const riders = [
    {id:1,name:"Ade Dispatch",base:"Ikorodu",coverage:["Agbowa","Ijede","Imota","Ikorodu North","Odogunyan"],price:{Agbowa:[4500,5000],Ijede:[4200,4800],Imota:[4000,4700]},rating:4.8,deliveries:42,response:"15–25 min",tags:["Bulky","After 6pm"],phone:"2348011110001"},
    {id:2,name:"Tunde Express",base:"Epe",coverage:["Epe","Ilara","Poka","Odomola","Ibeju-Lekki"],price:{Epe:[4000,4500],Ilara:[4500,5200],Poka:[4800,5500]},rating:4.6,deliveries:31,response:"20–30 min",tags:["Fragile"],phone:"2348011110002"},
    {id:3,name:"Kemi Local Run",base:"Ijede",coverage:["Ijede","Imota","Agbowa","Igbogbo","Bola Tinubu"],price:{Ijede:[4000,4600],Imota:[4200,5000],Agbowa:[4600,5300]},rating:4.7,deliveries:57,response:"10–20 min",tags:["Fragile","After 6pm"],phone:"2348011110003"},
    {id:4,name:"Mowo Mobility",base:"Mowe",coverage:["Mowe-Ofada","Mowe","Ofada","Loburo","Ibafo"],price:{"Mowe-Ofada":[3500,4500],Mowe:[3200,4200],Ofada:[3500,4400]},rating:4.5,deliveries:26,response:"15–25 min",tags:["Bulky"],phone:"2348011110004"},
    {id:5,name:"Epe Axis Riders",base:"Epe",coverage:["Epe","Ilara","Noforija","Eredo","Poka"],price:{Epe:[3800,4500],Ilara:[4700,5500],Eredo:[5000,5800]},rating:4.9,deliveries:68,response:"10–20 min",tags:["Bulky","Fragile","After 6pm"],phone:"2348011110005"},
    {id:6,name:"Ibeju Connect",base:"Ibeju-Lekki",coverage:["Ibeju-Lekki","Akodo","Awoyaya","Bogije","Eleko"],price:{"Ibeju-Lekki":[4000,5000],Akodo:[4200,5000],Awoyaya:[3800,4600]},rating:4.4,deliveries:19,response:"25–35 min",tags:["Bulky"],phone:"2348011110006"},
    {id:7,name:"Badagry Link",base:"Badagry",coverage:["Badagry","Ajara","Seme","Topo","Ijanikin"],price:{Badagry:[4200,5000],Ajara:[4500,5200],Seme:[5000,6000]},rating:4.7,deliveries:38,response:"20–35 min",tags:["After 6pm"],phone:"2348011110007"},
    {id:8,name:"Oke-Aro Runs",base:"Oke-Aro",coverage:["Oke-Aro","Akute","Alagbole","Lamido","Ojodu-Abiodun"],price:{"Oke-Aro":[3500,4300],Akute:[3000,3800]},rating:4.6,deliveries:34,response:"15–25 min",tags:["Fragile","After 6pm"],phone:"2348011110008"},
    {id:9,name:"Agbowa Neighbourhood",base:"Agbowa",coverage:["Agbowa","Imota","Ketu-Epe","Odomola"],price:{Agbowa:[4200,4800],Imota:[4300,5000]},rating:4.8,deliveries:29,response:"10–15 min",tags:["Bulky","After 6pm"],phone:"2348011110009"},
    {id:10,name:"Mile 12 Rural Link",base:"Ikorodu",coverage:["Agbowa","Ijede","Imota","Eredo","Ketu-Epe"],price:{Agbowa:[4600,5500],Ijede:[4300,5000],Imota:[4200,4900]},rating:4.5,deliveries:23,response:"25–40 min",tags:["Bulky"],phone:"2348011110010"},
    {id:11,name:"FringeRoute NG",base:"Ikorodu North",coverage:["Ikorodu North","Odogunyan","Ipakodo","Ijede","Imota"],price:{"Ikorodu North":[3500,4300],Ijede:[4200,4900],Imota:[4300,5100]},rating:4.7,deliveries:44,response:"15–25 min",tags:["Fragile"],phone:"2348011110011"},
    {id:12,name:"Ofada Swift",base:"Ofada",coverage:["Ofada","Mowe-Ofada","Mowe","Loburo","Ibafo"],price:{Ofada:[3200,4000],"Mowe-Ofada":[3500,4300]},rating:4.6,deliveries:21,response:"10–20 min",tags:["After 6pm"],phone:"2348011110012"},
    {id:13,name:"Ilara Local Dispatch",base:"Ilara",coverage:["Ilara","Epe","Poka","Noforija","Eredo"],price:{Ilara:[4300,5200],Epe:[3800,4600],Poka:[4500,5300]},rating:4.8,deliveries:51,response:"15–25 min",tags:["Fragile","Bulky"],phone:"2348011110013"},
    {id:14,name:"Ajara Riders",base:"Ajara",coverage:["Ajara","Badagry","Seme","Topo","Ijanikin"],price:{Ajara:[3800,4600],Badagry:[4300,5200]},rating:4.4,deliveries:17,response:"20–30 min",tags:["After 6pm"],phone:"2348011110014"},
    {id:15,name:"Estate2Village",base:"Lekki",coverage:["Awoyaya","Bogije","Eleko","Ibeju-Lekki","Akodo"],price:{Awoyaya:[3500,4400],Bogije:[4000,4800],Eleko:[4300,5100]},rating:4.7,deliveries:33,response:"20–30 min",tags:["Bulky"],phone:"2348011110015"},
    {id:16,name:"Ikorodu North Couriers",base:"Ikorodu North",coverage:["Ikorodu North","Odogunyan","Agbowa","Ipakodo"],price:{"Ikorodu North":[3300,4200],Agbowa:[4500,5200]},rating:4.5,deliveries:28,response:"15–30 min",tags:["Fragile"],phone:"2348011110016"},
    {id:17,name:"Eredo Express",base:"Eredo",coverage:["Eredo","Epe","Ilara","Poka","Noforija"],price:{Eredo:[4300,5200],Epe:[4000,4700]},rating:4.9,deliveries:74,response:"10–20 min",tags:["Bulky","After 6pm"],phone:"2348011110017"},
    {id:18,name:"Imota Connect",base:"Imota",coverage:["Imota","Agbowa","Ijede","Igbogbo"],price:{Imota:[3800,4600],Agbowa:[4300,5100],Ijede:[4000,4700]},rating:4.6,deliveries:36,response:"10–20 min",tags:["Fragile","After 6pm"],phone:"2348011110018"}
  ];

  const localities = [
    "Agbowa","Ijede","Imota","Epe","Ilara","Poka","Odomola","Ibeju-Lekki","Akodo","Awoyaya",
    "Bogije","Eleko","Badagry","Ajara","Seme","Topo","Ijanikin","Mowe-Ofada","Mowe","Ofada",
    "Loburo","Ibafo","Oke-Aro","Akute","Alagbole","Lamido","Ojodu-Abiodun","Ikorodu North",
    "Odogunyan","Ipakodo","Igbogbo","Ketu-Epe","Eredo","Noforija","Epe Road","Majidun",
    "Ibeshe","Itamaga","Aga","Parafa","Agura","Maya","Ewu-Oku","Ota-Ikosi","Itele",
    "Ilaro","Owode","Mowe Hills","Arepo","Isheri-Olofin","Berger","Ofin"
  ];

  const localityAliases = {
    "mowe ofada":"Mowe-Ofada",
    "mowe-ofada":"Mowe-Ofada",
    "ibeju lekki":"Ibeju-Lekki",
    "ibeju-lekki":"Ibeju-Lekki",
    "oke aro":"Oke-Aro",
    "ikd north":"Ikorodu North"
  };

  let selectedSize = "Medium";
  let currentDestination = "";
  let currentResults = [];

  const destinationInput = document.getElementById("destination");
  const suggestions = document.getElementById("suggestions");
  const resultsSection = document.getElementById("results");
  const emptyState = document.getElementById("emptyState");
  const riderGrid = document.getElementById("riderGrid");
  const resultCount = document.getElementById("resultCount");
  const resultsTitle = document.getElementById("resultsTitle");
  const typicalPrice = document.getElementById("typicalPrice");
  const sortBy = document.getElementById("sortBy");

  function normalize(value) {
    return value.trim().toLowerCase().replace(/\s+/g, " ");
  }

  function canonicalLocality(value) {
    const n = normalize(value);
    return localityAliases[n] || localities.find(x => normalize(x) === n) || value.trim();
  }

  function money(n) {
    return "₦" + Math.round(n).toLocaleString("en-NG");
  }

  function rangeText(range) {
    return money(range[0]) + " – " + money(range[1]);
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.querySelector("div").textContent = message;
    toast.classList.remove("hidden");
    clearTimeout(window.__toast);
    window.__toast = setTimeout(() => toast.classList.add("hidden"), 2600);
  }

  function setDestination(value, searchNow = false) {
    destinationInput.value = value;
    currentDestination = canonicalLocality(value);
    suggestions.classList.add("hidden");
    if (searchNow) runSearch();
  }

  destinationInput.addEventListener("input", () => {
    const q = normalize(destinationInput.value);
    if (!q) {
      suggestions.classList.add("hidden");
      return;
    }
    const matches = localities.filter(x => normalize(x).includes(q)).slice(0, 7);
    if (!matches.length) {
      suggestions.innerHTML = '<div class="px-4 py-3 text-sm text-slate-500">No seeded locality match — you can still search it.</div>';
    } else {
      suggestions.innerHTML = matches.map((x, i) => `
        <button type="button" class="autocomplete-item w-full text-left px-4 py-3 flex items-center gap-3 border-b border-slate-100 last:border-0" data-value="${x}">
          <span class="w-8 h-8 rounded-lg bg-emerald-50 text-brand grid place-items-center text-sm">⌖</span>
          <span>
            <span class="block text-sm font-bold">${x}</span>
            <span class="block text-xs text-slate-400">Nigerian locality</span>
          </span>
        </button>`).join("");
      suggestions.querySelectorAll("[data-value]").forEach(btn => {
        btn.addEventListener("click", () => setDestination(btn.dataset.value));
      });
    }
    suggestions.classList.remove("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!destinationInput.parentElement.parentElement.contains(e.target)) suggestions.classList.add("hidden");
  });

  document.querySelectorAll(".quick-search").forEach(btn => {
    btn.addEventListener("click", () => {
      setDestination(btn.dataset.destination);
      runSearch();
      document.getElementById("results").scrollIntoView({behavior:"smooth", block:"start"});
    });
  });

  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedSize = btn.dataset.size;
      document.getElementById("parcelSummary").textContent = selectedSize;
      document.querySelectorAll(".size-btn").forEach(b => {
        b.classList.remove("border-brand","bg-emerald-50","text-brand");
        b.classList.add("border-slate-200","bg-white");
      });
      btn.classList.remove("border-slate-200","bg-white");
      btn.classList.add("border-brand","bg-emerald-50","text-brand");
    });
  });

  document.getElementById("findBtn").addEventListener("click", runSearch);
  destinationInput.addEventListener("keydown", e => {
    if (e.key === "Enter") runSearch();
  });
  sortBy.addEventListener("change", () => renderResults(currentResults));

  function findRiders(destination) {
    const d = normalize(destination);
    return riders.filter(r => r.coverage.some(c => normalize(c) === d))
      .map(r => {
        const price = r.price[destination] || r.price[r.coverage.find(c => normalize(c) === d)];
        return {...r, routePrice: price || [4500, 5500]};
      });
  }

  function runSearch() {
    const raw = destinationInput.value.trim();
    if (!raw) {
      showToast("Enter a destination first — try Agbowa.");
      destinationInput.focus();
      return;
    }

    currentDestination = canonicalLocality(raw);
    currentResults = findRiders(currentDestination);

    if (!currentResults.length) {
      resultsSection.classList.add("hidden");
      emptyState.classList.remove("hidden");
      emptyState.classList.add("fade-up");
      emptyState.scrollIntoView({behavior:"smooth", block:"center"});
      return;
    }

    emptyState.classList.add("hidden");
    resultsSection.classList.remove("hidden");
    resultsSection.classList.add("fade-up");

    const allPrices = currentResults.flatMap(r => r.routePrice);
    typicalPrice.textContent = rangeText([Math.min(...allPrices), Math.max(...allPrices)]);
    resultsTitle.textContent = `Riders who cover ${currentDestination}`;
    renderResults(currentResults);
    resultsSection.scrollIntoView({behavior:"smooth", block:"start"});
  }

  function renderResults(data) {
    let list = [...data];
    if (sortBy.value === "price") list.sort((a,b) => a.routePrice[0] - b.routePrice[0]);
    if (sortBy.value === "rating") list.sort((a,b) => b.rating - a.rating);
    if (sortBy.value === "response") list.sort((a,b) => parseInt(a.response) - parseInt(b.response));

    resultCount.textContent = list.length;
    riderGrid.innerHTML = list.map((r, index) => `
      <article class="bg-white border border-slate-200 rounded-2xl p-5 shadow-card hover:-translate-y-0.5 hover:shadow-soft transition fade-up" style="animation-delay:${index*40}ms">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-xl bg-emerald-50 text-brand grid place-items-center font-black">${r.name.charAt(0)}</div>
            <div>
              <h3 class="font-extrabold">${r.name}</h3>
              <p class="text-xs text-slate-500 mt-0.5">Based in ${r.base}</p>
            </div>
          </div>
          <span class="rounded-full bg-amber-50 text-amber-700 border border-amber-100 px-2 py-1 text-xs font-bold">Demo</span>
        </div>

        <div class="mt-5 rounded-xl bg-slate-50 p-4">
          <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Route price</p>
          <p class="mt-1 text-xl font-black">${rangeText(r.routePrice)}</p>
          <p class="text-xs text-slate-400 mt-1">indicative prototype band</p>
        </div>

        <div class="mt-4 flex items-center gap-4 text-xs">
          <span class="font-bold text-slate-700">★ ${r.rating.toFixed(1)}</span>
          <span class="text-slate-400">${r.deliveries} demo deliveries</span>
          <span class="text-slate-400">~${r.response}</span>
        </div>

        <div class="mt-4 flex flex-wrap gap-1.5">
          ${r.tags.map(t => `<span class="rounded-full bg-emerald-50 text-brand px-2.5 py-1 text-xs font-semibold">✓ ${t}</span>`).join("")}
        </div>

        <button onclick="chatRider(${r.id})" class="mt-5 w-full rounded-xl bg-ink text-white py-3 font-extrabold hover:bg-brand transition">
          Chat on WhatsApp →
        </button>
      </article>
    `).join("");
  }

  function chatRider(id) {
    const rider = riders.find(r => r.id === id);
    const pickup = document.getElementById("pickup").value;
    const fragile = document.getElementById("fragile").checked ? "Fragile" : "Not marked fragile";
    const message =
`Hi ${rider.name}, I found you on RiderReach.

I need a delivery:
Pickup: ${pickup}
Destination: ${currentDestination}
Parcel: ${selectedSize}
Condition: ${fragile}
RiderReach price benchmark: ${rangeText(rider.routePrice)}

Are you available and can you confirm the final price?`;

    const url = `https://wa.me/${rider.phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
    showToast("Opening WhatsApp with the delivery details pre-filled.");
  }

  function openCoverageModal() {
    const modal = document.getElementById("coverageModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }

  function closeCoverageModal() {
    const modal = document.getElementById("coverageModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }

  document.getElementById("coverageModal").addEventListener("click", e => {
    if (e.target.id === "coverageModal") closeCoverageModal();
  });

  document.getElementById("leadForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const leads = JSON.parse(localStorage.getItem("riderreach_leads") || "[]");
    leads.push({
      name: form.get("name"),
      area: form.get("area"),
      coverage: form.get("coverage"),
      phone: form.get("phone"),
      createdAt: new Date().toISOString()
    });
    localStorage.setItem("riderreach_leads", JSON.stringify(leads));
    document.getElementById("leadSuccess").classList.remove("hidden");
    e.target.reset();
    showToast("Rider lead captured in this browser.");
  });

  // Start with a clear hero example without auto-opening results.
  setDestination("Agbowa");
