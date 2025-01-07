<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
    import * as Carousel from "$lib/components/ui/carousel/index.js";
	import Campaign from '$lib/components/businesses/campaign.svelte';
	import Footer from '$lib/components/footer.svelte';
    
    // Mock data - replace with actual data fetching
    export let data;
    let { business } = data;

     // Placeholder images for the carousel
  const placeholderImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://images.unsplash.com/photo-1556228721-3ef22b64255f",
  ];
  </script>
  
  <svelte:head>
    <title>{business?.name} - Zaria Business Directory</title>
    <meta name="description" content={business?.description} />
  </svelte:head>
  
  {#if !business}
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold">Business not found</h1>
    </div>
  {:else}
    <div class="container mx-auto px-4 py-8 animate-fade-in">
      <div class="max-w-6xl mx-auto space-y-8">
        <div class="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src={business.image}
            alt={business.name}
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" ></div>
          <div class="absolute bottom-0 left-0 p-8 text-white">
            <h1 class="text-4xl font-bold mb-2">{business.name}</h1>
            <p class="text-lg opacity-90">{business.category}</p>
          </div>
        </div>
  

        <div class="relative">
            <Carousel.Root>
              <Carousel.Content>
                {#each placeholderImages as image}
                  <Carousel.Item>
                    <img
                      src={image}
                      alt=""
                      class="w-full h-[400px] object-cover rounded-xl"
                    />
                  </Carousel.Item>
                {/each}
              </Carousel.Content>
              <Carousel.Previous class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 shadow-md" ></Carousel.Previous>
              <Carousel.Next class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 shadow-md" ></Carousel.Next>
            </Carousel.Root>
          </div>
        <div class="grid md:grid-cols-[2fr,1fr] gap-8">
          <div class="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 leading-relaxed">
                  {business.longDescription}
                </p>
              </CardContent>
            </Card>
  
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="grid grid-cols-2 gap-4">
                  {#each business.amenities as amenity}
                    <li class="flex items-center gap-2">
                      <span class="w-2 h-2 bg-primary rounded-full" ></span>
                      {amenity}
                    </li>
                  {/each}
                </ul>
              </CardContent>
            </Card>
  
            <!-- Reviews Section -->
        </div>
        
  
          <div class="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <div>
                  <h3 class="font-medium mb-1">Address</h3>
                  <p class="text-gray-600">{business.address}</p>
                </div>
                <div>
                  <h3 class="font-medium mb-1">Phone</h3>
                  <p class="text-gray-600">{business.contactInfo.phone}</p>
                </div>
                <div>
                  <h3 class="font-medium mb-1">Email</h3>
                  <p class="text-gray-600">{business.contactInfo.email}</p>
                </div>
                <div>
                  <h3 class="font-medium mb-1">Website</h3>
                  <p class="text-gray-600">{business.contactInfo.website}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Card>
            <CardHeader>
              <CardTitle>Reviews</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              {#if business.reviews && business.reviews.length > 0}
                {#each business.reviews as review}
                  <div class="border-b pb-4 last:border-b-0">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="font-medium">{review.user}</span>
                      <span class="text-yellow-500">
                        {#each Array(review.rating) as _}
                          ★
                        {/each}
                      </span>
                    </div>
                    <p class="text-gray-600">{review.comment}</p>
                  </div>
                {/each}
              {:else}
                <p class="text-gray-600">No reviews yet. Be the first to leave one!</p>
              {/if}
            </CardContent>
          </Card>
      </div>
    </div>
  {/if}

<Campaign/>
<Footer/>