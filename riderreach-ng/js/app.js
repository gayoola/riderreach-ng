tailwind.config = {
      theme: {
        extend: {
          colors: {
            ink: '#10231f',
            brand: '#0f766e',
            brandDark: '#115e59',
            mint: '#ecfdf5',
            warm: '#f8f7f2'
          },
          boxShadow: {
            soft: '0 20px 60px rgba(16, 35, 31, 0.08)',
            card: '0 10px 30px rgba(16, 35, 31, 0.07)'
          }
        }
      }
    }
  </script>
  <style>
    html { scroll-behavior: smooth; }
    body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .noise {
      background-image: radial-gradient(rgba(15,118,110,.08) 1px, transparent 1px);
      background-size: 18px 18px;
    }
    .glass { backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
    .autocomplete-item:hover { background: #f0fdfa; }
    .hide-scrollbar::-webkit-scrollbar { display:none; }
    .hide-scrollbar { -ms-overflow-style:none; scrollbar-width:none; }
    .fade-up { animation: fadeUp .45s ease both; }
    @keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
    .pulse-soft { animation: pulseSoft 2.5s infinite; }
    @keyframes pulseSoft { 0%,100%{box-shadow:0 0 0 0 rgba(15,118,110,.18)} 50%{box-shadow:0 0 0 10px rgba(15,118,110,0)} }
  </style>
</head>

<body class="bg-warm text-ink min-h-screen">
  <!-- NAV -->
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 glass">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <button onclick="window.scrollTo({top:0,behavior:'smooth'})" class="flex items-center gap-3">
        <span class="w-9 h-9 rounded-xl bg-brand text-white grid place-items-center font-black">R</span>
        <span class="font-extrabold tracking-tight text-lg">RiderReach <span class="text-brand">NG</span></span>
      </button>
      <div class="hidden sm:flex items-center gap-6 text-sm text-slate-600">
        <a href="#how" class="hover:text-brand">How it works</a>
        <a href="#coverage" class="hover:text-brand">Coverage</a>
        <a href="#about" class="hover:text-brand">Why RiderReach</a>
      </div>
      <button onclick="document.getElementById('finder').scrollIntoView({behavior:'smooth'})"
        class="rounded-xl bg-ink text-white px-4 py-2 text-sm font-semibold hover:bg-brand transition">
        Find a rider
      </button>
    </div>
  </header>

  <!-- HERO -->
  <main>
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 noise opacity-70 pointer-events-none"></div>
      <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl"></div>
      <div class="absolute top-64 -left-40 w-96 h-96 rounded-full bg-teal-100/50 blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand shadow-sm">
            <span class="w-2 h-2 rounded-full bg-brand pulse-soft"></span>
            Coverage-first delivery discovery
          </div>
          <h1 class="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.02]">
            Find a rider who <span class="text-brand">actually delivers there.</span>
          </h1>
          <p class="mt-5 max-w-2xl text-base sm:text-lg leading-8 text-slate-600">
            Search hard-to-reach Nigerian destinations, compare local rider prices, and move the conversation to WhatsApp in one tap.
          </p>
        </div>

        <!-- FINDER -->
        <section id="finder" class="mt-10 max-w-5xl">
          <div class="rounded-3xl bg-white border border-slate-200 shadow-soft p-4 sm:p-6">
            <div class="flex items-center justify-between gap-4 mb-5">
              <div>
                <h2 class="font-extrabold text-lg">Where is it going?</h2>
                <p class="text-sm text-slate-500 mt-1">Search the destination first. Coverage matters more than distance.</p>
              </div>
              <span id="demoBadge" class="hidden sm:inline-flex rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 text-xs font-semibold">
                Prototype data
              </span>
            </div>

            <div class="grid lg:grid-cols-[1.2fr_1fr] gap-4">
              <div class="relative">
                <label for="destination" class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Destination</label>
                <div class="relative">
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">⌕</span>
                  <input id="destination" autocomplete="off"
                    class="w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-4 outline-none focus:ring-4 focus:ring-emerald-100 focus:border-brand transition"
                    placeholder="e.g. Agbowa, Ijede, Imota..." />
                </div>
                <div id="suggestions" class="absolute z-30 left-0 right-0 mt-2 hidden rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden"></div>
              </div>

              <div>
                <label for="pickup" class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Pickup area</label>
                <select id="pickup" class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:ring-4 focus:ring-emerald-100 focus:border-brand transition">
                  <option>Ikorodu</option>
                  <option>Epe</option>
                  <option>Ibeju-Lekki</option>
                  <option>Badagry</option>
                  <option>Mowe</option>
                  <option>Agbowa</option>
                  <option>Ijede</option>
                  <option>Other / Not listed</option>
                </select>
              </div>
            </div>

            <div class="mt-5 grid sm:grid-cols-[1fr_auto] gap-5 items-end">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <label class="text-xs font-bold uppercase tracking-wider text-slate-500">Parcel</label>
                  <span id="parcelSummary" class="text-xs text-slate-400">Medium</span>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <button data-size="Small" class="size-btn rounded-xl border border-slate-200 px-3 py-3 text-sm font-semibold bg-white hover:border-brand">Small</button>
                  <button data-size="Medium" class="size-btn rounded-xl border border-brand bg-emerald-50 text-brand px-3 py-3 text-sm font-semibold">Medium</button>
                  <button data-size="Bulky" class="size-btn rounded-xl border border-slate-200 px-3 py-3 text-sm font-semibold bg-white hover:border-brand">Bulky</button>
                </div>
                <label class="mt-3 inline-flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input id="fragile" type="checkbox" class="w-4 h-4 accent-emerald-700 rounded" />
                  Fragile item
                </label>
              </div>

              <button id="findBtn" class="w-full sm:w-auto rounded-2xl bg-brand text-white px-7 py-4 font-extrabold hover:bg-brandDark transition shadow-lg shadow-emerald-900/10">
                Find riders →
              </button>
            </div>

            <div class="mt-5 flex flex-wrap gap-2">
              <span class="text-xs font-semibold text-slate-400 mr-1 py-1">Try:</span>
              <button class="quick-search text-xs rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-brand px-3 py-1.5" data-destination="Agbowa">Agbowa</button>
              <button class="quick-search text-xs rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-brand px-3 py-1.5" data-destination="Ijede">Ijede</button>
              <button class="quick-search text-xs rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-brand px-3 py-1.5" data-destination="Epe">Epe</button>
              <button class="quick-search text-xs rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-brand px-3 py-1.5" data-destination="Mowe-Ofada">Mowe-Ofada</button>
            </div>
          </div>
        </section>

        <!-- RESULTS -->
        <section id="results" class="mt-8 hidden">
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div class="flex items-center gap-2">
                <span id="resultCount" class="text-sm font-bold text-brand"></span>
                <span class="text-sm text-slate-400">coverage matches</span>
              </div>
              <h2 id="resultsTitle" class="text-2xl font-black mt-1"></h2>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs text-slate-500">Sort:</span>
              <select id="sortBy" class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold">
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="response">Response time</option>
              </select>
            </div>
          </div>

          <div id="priceBanner" class="mt-5 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-widest font-extrabold text-brand">Typical local rider price</p>
              <p id="typicalPrice" class="text-2xl font-black mt-1"></p>
              <p class="text-xs text-slate-500 mt-1">Prototype/community-reported estimate</p>
            </div>
            <div class="text-left sm:text-right">
              <p class="text-xs uppercase tracking-widest font-extrabold text-slate-400">Conventional remote quote</p>
              <p class="text-xl font-black text-slate-500 mt-1">₦11,000+</p>
              <p class="text-xs text-slate-500 mt-1">Illustrative comparison</p>
            </div>
          </div>

          <div id="riderGrid" class="mt-5 grid md:grid-cols-2 xl:grid-cols-3 gap-4"></div>
        </section>

        <!-- EMPTY -->
        <section id="emptyState" class="hidden mt-8 rounded-3xl bg-white border border-slate-200 p-8 text-center">
          <div class="mx-auto w-14 h-14 rounded-2xl bg-slate-100 grid place-items-center text-2xl">⌁</div>
          <h3 class="mt-4 text-xl font-black">No coverage yet</h3>
          <p class="mt-2 text-sm text-slate-500 max-w-md mx-auto">
            We don't have enough rider coverage for this destination in the prototype dataset yet.
          </p>
          <button onclick="document.getElementById('coverage').scrollIntoView({behavior:'smooth'})"
            class="mt-5 rounded-xl bg-ink text-white px-5 py-3 text-sm font-bold hover:bg-brand transition">
            Help expand coverage
          </button>
        </section>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section id="how" class="bg-white border-y border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="max-w-2xl">
          <p class="text-xs font-black uppercase tracking-widest text-brand">Simple by design</p>
          <h2 class="mt-2 text-3xl sm:text-4xl font-black">From destination to rider in seconds.</h2>
          <p class="mt-3 text-slate-500">RiderReach is built around one question: who already serves this place?</p>
        </div>
        <div class="mt-10 grid md:grid-cols-3 gap-5">
          <div class="rounded-2xl border border-slate-200 p-6">
            <span class="text-xs font-black text-brand">01</span>
            <h3 class="mt-5 font-extrabold text-lg">Search the destination</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">Look up villages, estates, back roads and underserved localities that generic dispatch search often misses.</p>
          </div>
          <div class="rounded-2xl border border-slate-200 p-6">
            <span class="text-xs font-black text-brand">02</span>
            <h3 class="mt-5 font-extrabold text-lg">Compare local coverage</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">See riders by the areas they already cover, with an indicative route price and useful service tags.</p>
          </div>
          <div class="rounded-2xl border border-slate-200 p-6">
            <span class="text-xs font-black text-brand">03</span>
            <h3 class="mt-5 font-extrabold text-lg">Chat on WhatsApp</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">The selected route, parcel details and benchmark price are pre-filled into the conversation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- COVERAGE -->
    <section id="coverage">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="rounded-3xl bg-ink text-white p-7 sm:p-10 overflow-hidden relative">
          <div class="absolute -right-20 -top-20 w-72 h-72 rounded-full border border-white/10"></div>
          <div class="absolute -right-8 -top-8 w-48 h-48 rounded-full border border-white/10"></div>
          <div class="relative grid lg:grid-cols-[1.2fr_.8fr] gap-10 items-center">
            <div>
              <p class="text-xs font-black uppercase tracking-widest text-emerald-300">Coverage network</p>
              <h2 class="mt-3 text-3xl sm:text-4xl font-black">Know a rider who covers an overlooked area?</h2>
              <p class="mt-4 text-slate-300 leading-7 max-w-xl">
                RiderReach grows by adding the places other delivery directories leave out. In the prototype, this is represented as a simple coverage dataset that can later be replaced with verified rider onboarding.
              </p>
              <button onclick="openCoverageModal()" class="mt-6 rounded-xl bg-white text-ink px-5 py-3 font-extrabold hover:bg-emerald-50 transition">
                Add rider coverage
              </button>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div class="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div class="text-3xl font-black">50+</div>
                <div class="mt-1 text-sm text-slate-300">prototype localities</div>
              </div>
              <div class="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div class="text-3xl font-black">8</div>
                <div class="mt-1 text-sm text-slate-300">focus axes</div>
              </div>
              <div class="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div class="text-3xl font-black">1-tap</div>
                <div class="mt-1 text-sm text-slate-300">WhatsApp handoff</div>
              </div>
              <div class="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div class="text-3xl font-black">₦</div>
                <div class="mt-1 text-sm text-slate-300">price transparency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY -->
    <section id="about" class="bg-white border-y border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p class="text-xs font-black uppercase tracking-widest text-brand">The insight</p>
            <h2 class="mt-2 text-3xl sm:text-4xl font-black">Distance is not the same thing as coverage.</h2>
            <p class="mt-5 text-slate-600 leading-7">
              A rider can be geographically close and still refuse a destination. Another rider living in the destination axis may be willing to take the same parcel at a normal local rate.
            </p>
            <p class="mt-4 text-slate-600 leading-7">
              RiderReach therefore treats delivery coverage as the primary discovery signal — not a map pin or a generic distance estimate.
            </p>
          </div>
          <div class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div class="flex items-center justify-between">
              <h3 class="font-extrabold">Prototype transparency</h3>
              <span class="rounded-full bg-amber-100 text-amber-700 px-2.5 py-1 text-xs font-bold">Demo</span>
            </div>
            <p class="mt-4 text-sm text-slate-600 leading-6">
              The rider profiles, ratings, delivery counts and price bands in this prototype are simulated data used to demonstrate the product experience. They are not live rider listings.
            </p>
            <div class="mt-5 rounded-2xl bg-white border border-slate-200 p-4">
              <div class="flex gap-3">
                <div class="w-9 h-9 rounded-xl bg-emerald-100 text-brand grid place-items-center font-black">✓</div>
                <div>
                  <p class="text-sm font-bold">Next validation milestone</p>
                  <p class="text-xs text-slate-500 mt-1">Replace seeded profiles with verified rider interviews and coverage records.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-3 justify-between text-xs text-slate-400">
      <span>© 2026 RiderReach NG — prototype</span>
      <span>Coverage intelligence for hard-to-reach deliveries</span>
    </div>
  </footer>

  <!-- MODAL -->
  <div id="coverageModal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-black/40">
    <div class="w-full max-w-lg rounded-3xl bg-white shadow-2xl p-6 sm:p-8">
      <div class="flex items-start justify-between">
        <div>
          <p class="text-xs font-black uppercase tracking-widest text-brand">Coverage expansion</p>
          <h3 class="mt-2 text-2xl font-black">Add a rider lead</h3>
        </div>
        <button onclick="closeCoverageModal()" class="text-slate-400 hover:text-ink text-2xl">×</button>
      </div>
      <form id="leadForm" class="mt-6 space-y-4">
        <input required name="name" placeholder="Rider / business name" class="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-emerald-100" />
        <input required name="area" placeholder="Base area" class="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-emerald-100" />
        <input required name="coverage" placeholder="Areas covered (e.g. Agbowa, Imota, Ijede)" class="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-emerald-100" />
        <input required name="phone" placeholder="WhatsApp number" class="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-emerald-100" />
        <button class="w-full rounded-xl bg-brand text-white py-3 font-extrabold hover:bg-brandDark">Submit rider lead</button>
      </form>
      <p id="leadSuccess" class="hidden mt-4 rounded-xl bg-emerald-50 text-brand p-3 text-sm font-semibold">Thanks — this demo has captured the lead locally.</p>
    </div>
  </div>

  <!-- TOAST -->
  <div id="toast" class="fixed bottom-5 left-1/2 -translate-x-1/2 z-[110] hidden">
    <div class="rounded-xl bg-ink text-white px-4 py-3 shadow-xl text-sm font-semibold"></div>
  </div>

<script>
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
