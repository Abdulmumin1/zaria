<script>
	import { Navigation } from "lucide-svelte";

    // Placeholder bus stop data for the preview map
    const busStops = [
      { id: 1, name: 'Main Station', lat: 51.505, lng: -0.09 },
      { id: 2, name: 'Central Park', lat: 51.51, lng: -0.1 },
      { id: 3, name: 'Downtown Terminal', lat: 51.515, lng: -0.08 },
    ];
  
    // Initialize the preview map
  </script>
  

  <div class="bus-stop-section text-center py-12 bg-primary text-white ">
    <div class="container mx-auto px-4">
        <div class="flex justify-center  space-x-2">
            <h2 class="text-3xl font-bold uppercase tracking-wide mb-6">Navigate our Blessed city with ease</h2>
        </div>
      <p class="text-lg mb-6">
        Explore our recorded  bus stops in zaria with our interactive map.
      </p>
  
      <!-- CTA Button -->
            <a href="/transportation" class=" bg-yellow-400 text-green-900 p-3 rounded-lg inline-flex gap-2 items-center">View Bus Stops
                <Navigation size={15}/> 
            
            </a>
  
      <!-- Preview Map -->
    
    </div>
  </div>

  <style>
    
  </style>