<script>

	import { Rocket, TrendingUp, Wallet } from "lucide-svelte";

</script>
<div class="bg-gradient-to-r from-primary  to-secondary text-white py-16">
    <div class="container mx-auto text-center px-4 space-y-8">
      <!-- Headline -->
      <h1 class="text-4xl md:text-5xl font-bold tracking-wide">
        Get Discovered. Grow Your Business.
      </h1>
      <p class="text-xs md:text-sm max-w-2xl mx-auto">
        Join our business directory and connect with thousands of potential customers daily.
      </p>
  
      <!-- Benefits Section -->
      <div class="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 justify-center">
        <div class="flex items-center space-x-4">
          <div class="bg-white text-primary p-4 rounded-full">
            <TrendingUp/>
          </div>
          <span class="text-lg font-medium">Increase Visibility</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="bg-white text-primary p-4 rounded-full">
            <Wallet/>
          </div>
          <span class="text-lg font-medium">Attract More Customers</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="bg-white text-primary p-4 rounded-full">
            <Rocket/>
          </div>
          <span class="text-lg font-medium">Boost Credibility</span>
        </div>
      </div>
  
      <!-- Call to Action -->
      <div class="pt-12">
        <a
          href="/business/new"
          class="bg-white  text-primary font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-secondary hover:text-white transition duration-300"
        >
          Add Your Business Now
        </a>
      </div>
    </div>
  </div>
  
  