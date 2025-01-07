<script>

import { Card, CardContent } from "$lib/components/ui/card";
import BusinessReg from "$lib/components/businesses/businessRegistration.svelte";
import BusinessList from "$lib/components/businesses/businessList.svelte";
import { ArrowRight, Search } from 'lucide-svelte';
	import {Input} from '$lib/components/ui/input';
	import {Button} from '$lib/components/ui/button';
	import Footer from "$lib/components/footer.svelte";
</script>

<svelte:head>

<title>Zaria Businesses - Discover Local Enterprises</title>
<meta name="description" content="Explore and register businesses in Zaria. Find local enterprises, shops, and services categorized by industry." />
<meta name="keywords" content="Zaria businesses, local enterprises, business registration, Nigerian businesses" />

</svelte:head>
<div class="container mx-auto px-4 py-8 space-y-8 animate-fade-in">
    
  <div class="max-w-3xl mx-auto text-center space-y-4 pt-24">
    <h1 class="text-4xl font-bold tracking-tight">Zaria Business Directory</h1>
    <p class="text-muted-foreground">Discover and connect with local businesses in Zaria</p>
  </div>

  <div class="relative flex flex-col items-center justify-center w-full h-64">
    <!-- Background Image -->
    <img
      src="/image.png"
      alt="Background"
      class="absolute inset-0 w-full h-64 object-cover rounded-2xl brightness-50"
    />
  
    <!-- Search Container -->
    <div class="relative z-20 flex flex-col md:flex-row items-center gap-4 p-1 md:p-4 md:bg-white bg-opacity-90 rounded-lg shadow-lg">
      <!-- Search Input -->
      <Input
        placeholder="Search for businesses, schools, services, and more..."
        class="h-12 lg:w-96"
      />
  
      <!-- Search Button -->
      <Button size="lg" class="h-12 px-6 bg-primary hover:bg-secondary text-white rounded-lg">
        <Search class="mr-2 h-5 w-5" />
        Search
      </Button>
    </div>
    <a href="/business/new" class="text-gray-100 relative z-20 flex items-center mt-3">Promote your business <ArrowRight/></a>
  </div>

<!-- grid lg:grid-cols-[350px,1fr] gap-8 -->
    <div class="">
      <!-- <Card class="h-fit">
        <CardContent class="p-6">
          <BusinessReg />
        </CardContent>
      </Card> -->

      <BusinessList />
    </div>
  </div>
  <Footer/>