<script>
    import { onMount } from 'svelte';
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    import { Bus, Map, Search, Info, ChevronRight, Accessibility, Coffee, Clock, MapPin } from 'lucide-svelte';
  
    const busStops = [
  {
    id: 1,
    name: 'Zaria City Main Terminal',
    lat: 11.0785,
    lng: 7.7197,
    address: 'Zaria City Market Area, Zaria',
    routes: ['Z1', 'Z2', 'Z3', 'KD1'],
    facilities: ['Shelter', 'Seating', 'Information Board', 'Security Post', 'Food Vendors'],
    accessibility: ['Wheelchair Access', 'Senior Citizen Priority'],
    nextBuses: [
      { route: 'Z1', time: '5 min', destination: 'ABU Main Campus' },
      { route: 'Z2', time: '10 min', destination: 'PZ' },
      { route: 'Z3', time: '15 min', destination: 'Sabon Gari' },
      { route: 'KD1', time: '30 min', destination: 'Kaduna' }
    ]
  },
  {
    id: 2,
    name: 'ABU Main Gate Terminal',
    lat: 11.1584,
    lng: 7.6506,
    address: 'ABU Samaru Main Gate, Zaria',
    routes: ['Z1', 'Z4', 'Z5'],
    facilities: ['Shelter', 'Seating', 'Student Information Center', 'ATM'],
    accessibility: ['Wheelchair Access', 'Student Priority'],
    nextBuses: [
      { route: 'Z1', time: '3 min', destination: 'Zaria City' },
      { route: 'Z4', time: '7 min', destination: 'Congo Stadium' },
      { route: 'Z5', time: '12 min', destination: 'ICSA' }
    ]
  },
  {
    id: 3,
    name: 'PZ Bus Stop',
    lat: 11.0751,
    lng: 7.7309,
    address: 'PZ Area, Zaria City',
    routes: ['Z2', 'Z6', 'KD1'],
    facilities: ['Shelter', 'Seating', 'Ticket Office', 'Shop'],
    accessibility: ['Wheelchair Access', 'Priority Seating'],
    nextBuses: [
      { route: 'Z2', time: '5 min', destination: 'Zaria City' },
      { route: 'Z6', time: '15 min', destination: 'Tudun Wada' },
      { route: 'KD1', time: '25 min', destination: 'Kaduna' }
    ]
  },
  {
    id: 4,
    name: 'Sabon Gari Station',
    lat: 11.0924,
    lng: 7.7218,
    address: 'Sabon Gari Market Area, Zaria',
    routes: ['Z3', 'Z7', 'Z8'],
    facilities: ['Shelter', 'Seating', 'Information Board', 'Market Access'],
    accessibility: ['Wheelchair Access'],
    nextBuses: [
      { route: 'Z3', time: '8 min', destination: 'Zaria City' },
      { route: 'Z7', time: '12 min', destination: 'GRA' },
      { route: 'Z8', time: '20 min', destination: 'Hanwa' }
    ]
  },
  {
    id: 5,
    name: 'Tudun Wada Terminal',
    lat: 11.0858,
    lng: 7.7134,
    address: 'Tudun Wada Area, Zaria',
    routes: ['Z6', 'Z9', 'Z10'],
    facilities: ['Shelter', 'Waiting Area', 'Food Court'],
    accessibility: ['Wheelchair Access', 'Priority Seating'],
    nextBuses: [
      { route: 'Z6', time: '10 min', destination: 'PZ' },
      { route: 'Z9', time: '15 min', destination: 'Teaching Hospital' },
      { route: 'Z10', time: '25 min', destination: 'Aviation Quarter' }
    ]
  },
  {
    id: 6,
    name: 'ABU Teaching Hospital Stop',
    lat: 11.1342,
    lng: 7.6851,
    address: 'Shika, Zaria',
    routes: ['Z9', 'Z11'],
    facilities: ['Shelter', 'Medical Emergency Access', 'Pharmacy', 'Seating'],
    accessibility: ['Wheelchair Access', 'Patient Priority', 'Emergency Vehicle Access'],
    nextBuses: [
      { route: 'Z9', time: '10 min', destination: 'Tudun Wada' },
      { route: 'Z11', time: '15 min', destination: 'ABU Main Campus' },
      { route: 'Z32', time: '15 min', destination: 'Sabon Gari' }
    ]
  },
  {
    id: 7,
    name: 'Congo Stadium Terminal',
    lat: 11.1512,
    lng: 7.6473,
    address: 'Congo Russia Area, Samaru',
    routes: ['Z4', 'Z12'],
    facilities: ['Shelter', 'Sports Complex Access', 'Refreshment Stands'],
    accessibility: ['Wheelchair Access'],
    nextBuses: [
      { route: 'Z4', time: '5 min', destination: 'ABU Main Gate' },
      { route: 'Z12', time: '15 min', destination: 'Aviation Quarter' }
    ]
  },
  {
    id: 8,
    name: 'ICSA Bus Terminal',
    lat: 11.1628,
    lng: 7.6398,
    address: 'Institute of Christian and Social Affairs Area',
    routes: ['Z5', 'Z13'],
    facilities: ['Shelter', 'Student Waiting Area', 'Mini Mart'],
    accessibility: ['Wheelchair Access', 'Student Priority'],
    nextBuses: [
      { route: 'Z5', time: '8 min', destination: 'ABU Main Gate' },
      { route: 'Z13', time: '20 min', destination: 'Sabon Gari' }
    ]
  }
];
  
    let map;
    let selectedBusStop = $state(null);
    let searchQuery = $state('');
    let filteredStops = $state(busStops);
    let currentView = $state('list'); // 'list' or 'map' for mobile view
    let loading = $state(true);
  
    onMount(() => {
      initializeMap();
      loading = false;
    });
  
    function initializeMap() {
      map = L.map('map').setView([10.5222, 7.4359], 12); // Centered on Kaduna
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
  
      busStops.forEach((stop) => {
        const marker = L.marker([stop.lat, stop.lng]).addTo(map);
        
        const popupContent = `
          <div class="popup-content">
            <h3>${stop.name}</h3>
            <p>${stop.address}</p>
          </div>
        `;
        
        marker.bindPopup(popupContent);
        
        marker.on('click', () => {
          selectBusStop(stop);
        });
      });
    }
  
    $effect(()=>{
      filteredStops = busStops.filter(stop =>
        stop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stop.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stop.routes.some(route => route.includes(searchQuery))
      );
    })
  
    function selectBusStop(stop) {
      selectedBusStop = stop;
      map.setView([stop.lat, stop.lng], 15);
      currentView = 'map';
    }
  
    function toggleView(view) {
      currentView = view;
    }
  </script>
  
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <header class="bg-primary text-primary-foreground shadow-lg">
      <div class="container mx-auto px-4 py-6">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold">Zaria Transit</h1>
            <p class="text-primary-foreground/80 mt-2">Bus information system</p>
          </div>
          <div class="hidden md:flex items-center gap-6">
            <Bus class="w-6 h-6" />
            <Map class="w-6 h-6" />
            <Info class="w-6 h-6" />
          </div>
        </div>
      </div>
    </header>
  
    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Search Bar -->
      <div class="mb-6">
        <div class="relative max-w-xl mx-auto">
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search stops, routes, or locations..."
            class="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-ring"
          />
          <Search class="absolute right-3 top-3 text-muted-foreground w-5 h-5" />
        </div>
      </div>
  
      <!-- Mobile View Toggles -->
      <div class="md:hidden mb-4 flex space-x-2">
        <button
          class="flex-1 py-2 px-4 rounded-lg {currentView === 'list' ? 'bg-primary text-primary-foreground' : 'bg-muted'}"
          onclick={() => toggleView('list')}
        >
          List View
        </button>
        <button
          class="flex-1 py-2 px-4 rounded-lg {currentView === 'map' ? 'bg-primary text-primary-foreground' : 'bg-muted'}"
          onclick={() => toggleView('map')}
        >
          Map View
        </button>
      </div>
  
      <!-- Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Bus Stop List -->
        <div class="bg-card rounded-lg shadow-lg {currentView === 'map' ? 'hidden md:block' : 'block'}">
          {#if loading}
            <div class="p-4 text-center">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p class="mt-2 text-muted-foreground">Loading bus stops...</p>
            </div>
          {:else if filteredStops.length === 0}
            <div class="p-4 text-center text-muted-foreground">
              No bus stops found matching your search.
            </div>
          {:else}
            {#each filteredStops as stop}
              <button
                class="p-4 w-full  text-left border-b border-border hover:bg-accent cursor-pointer transition-all {selectedBusStop?.id === stop.id ? 'bg-primary/10' : ''}"
                onclick={() => selectBusStop(stop)}
              >
                <div class="flex items-start justify-between">
                  <div>
                    <h2 class="text-xl font-semibold">{stop.name}</h2>
                    <p class="text-sm text-muted-foreground mt-1">{stop.address}</p>
                  </div>
                  <ChevronRight class="w-5 h-5 text-muted-foreground" />
                </div>
                <div class="mt-2 flex flex-wrap gap-2">
                  {#each stop.routes as route}
                    <span class="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Route {route}
                    </span>
                  {/each}
                </div>
            </button>
            {/each}
          {/if}
        </div>
  
        <!-- Map and Details -->
        <div class="col-span-2 {currentView === 'list' ? 'hidden md:block' : 'block'}">
          <div class="bg-card rounded-lg shadow-lg p-4">
            <div id="map" class="rounded-lg mb-4"></div>
            
            {#if selectedBusStop}
              <div class="border-t border-border pt-4 mt-4">
                <h2 class="text-2xl font-bold mb-4">{selectedBusStop.name}</h2>
                
                <!-- Next Buses -->
                <div class="mb-6">
                  <div class="flex items-center gap-2 mb-2">
                    <MapPin class="w-5 h-5 text-primary" />
                    <h3 class="text-lg font-semibold">Bus destinations</h3>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {#each selectedBusStop.nextBuses as bus}
                      <div class="bg-accent p-3 rounded-lg">
                        <div class="text-lg font-bold text-primary">Route {bus.route}</div>
                        <div class="text-sm text-gray-200 ">
                          <div>Arriving in {bus.time}</div>
                          <div class="">To: {bus.destination}</div>
                        </div>
                      </div>
                    {/each}
                  </div>
                </div>
  
                <!-- Facilities and Accessibility -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      <Coffee class="w-5 h-5 text-primary" />
                      <h3 class="text-lg font-semibold">Facilities</h3>
                    </div>
                    <ul class="space-y-2">
                      {#each selectedBusStop.facilities as facility}
                        <li class="flex items-center gap-2 text-muted-foreground">
                          <ChevronRight class="w-4 h-4" />
                          {facility}
                        </li>
                      {/each}
                    </ul>
                  </div>
                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      <Accessibility class="w-5 h-5 text-primary" />
                      <h3 class="text-lg font-semibold">Accessibility</h3>
                    </div>
                    <ul class="space-y-2">
                      {#each selectedBusStop.accessibility as feature}
                        <li class="flex items-center gap-2 text-muted-foreground">
                          <ChevronRight class="w-4 h-4" />
                          {feature}
                        </li>
                      {/each}
                    </ul>
                  </div>
                </div>
              </div>
            {:else}
              <div class="text-center text-muted-foreground py-8">
                Select a bus stop to view detailed information
              </div>
            {/if}
          </div>
        </div>
      </div>
    </main>
  </div>
  
  <style>
    :global(body) {
      margin: 0;
    }
  
    #map {
      height: 400px;
      width: 100%;
      border-radius: 0.5rem;
      z-index: 0;
    }
  
    @media (max-width: 768px) {
      #map {
        height: 300px;
      }
    }
  </style>