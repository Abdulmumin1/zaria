<script>
	import { Siren } from "lucide-svelte";


const stats = [
    { label: "Population", value: "820k+" },
    { label: "Universities", value: "2" },
    { label: "Historical Sites", value: "15+" },
    { label: "Land Area", value: "300km²" },
  ];
  
</script>
<div class="bg-primary/5 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        {#each stats as stat}
            
        <div key={stat.label} class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">{stat.value}</div>
          <div class="text-gray-600">{stat.label}</div>
        </div>
        {/each}
        
      </div>
    </div>
  </div>

  <div class="bg-primary text-white py-10">
    <div class="container mx-auto space-y-8">
      <!-- Title -->
      <div class="text-center">
        <div class="flex justify-center items-center space-x-2">
          <Siren/>
          <h2 class="text-3xl font-bold uppercase tracking-wide">
            Emergency Lines
          </h2>
          <Siren/>

        </div>
        <p class="mt-4 text-lg text-gray-200">
          Contact the appropriate service immediately in case of an emergency.
        </p>
      </div>
  
      <!-- Emergency Numbers -->
      <div class="grid grid-cols-3 md:grid-cols-3 gap-8">
        <!-- Fire Service -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-yellow-400 text-green-900 w-16 h-16 flex items-center shadow-inner justify-center rounded-lg text-2xl font-bold">
            767
          </div>
          <h3 class="mt-4 text-xl font-semibold">Fire Service</h3>
          <!-- <p class="mt-2 text-sm text-gray-200">
            For fire emergencies, contact this service for immediate response.
          </p> -->
        </div>
  
        <!-- Health Care -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-yellow-400 text-green-900 w-16 h-16 flex items-center justify-center rounded-lg text-2xl font-bold">
            112
          </div>
          <h3 class="mt-4 text-xl font-semibold">Health Care</h3>
          <!-- <p class="mt-2 text-sm text-gray-200">
            Reach out for urgent medical assistance and ambulance services.
          </p> -->
        </div>
  
        <!-- Police -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-yellow-400 text-green-900 w-16 h-16 flex items-center justify-center rounded-lg text-2xl font-bold">
            112
          </div>
          <h3 class="mt-4 text-xl font-semibold">Police</h3>
          <!-- <p class="mt-2 text-sm text-gray-200">
            For law enforcement and security emergencies, call the police.
          </p> -->
        </div>
      </div>
    </div>
  </div>
  