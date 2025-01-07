<script>
  import { onMount } from 'svelte';
  import * as Pagination from "$lib/components/ui/pagination";

	import Footer from '$lib/components/footer.svelte';
  // Fetch placeholder images from Unsplash
  let images = $state(

  [
  "/temp/1.jpg",
  "/temp/2.jpg",
  "/temp/3.jpg",
  "/temp/4.jpg",
  "/temp/5.jpg",
  "/temp/6.jpg",
  "/temp/7.jpg",
  "/temp/8.jpg",
  "/temp/9.jpg",
  "/temp/10.jpg",
  "/temp/11.jpg",
  "/temp/12.jpg",
  "/temp/13.jpg",
  "/temp/14.jpg",
  "/temp/15.jpg",
  "/temp/16.jpg",
  "/temp/17.jpg",
  "/temp/18.jpg",
  "/temp/19.jpg",
  "/temp/20.jpg",
  "/temp/21.jpg",
  "/temp/22.jpg",
  "/temp/23.jpg",
  "/temp/24.jpg",
  "/temp/25.jpg",
  "/temp/26.jpg",
  "/temp/27.jpg",
  "/temp/28.jpg",
  "/temp/29.jpg",
  "/temp/30.jpg",
  "/temp/31.jpg",
  "/temp/32.jpg",
  "/temp/33.jpg",
  "/temp/34.jpg",
  "/temp/35.jpg",
  "/temp/36.jpg",
  "/temp/37.jpg",
  "/temp/38.jpg",
  "/temp/39.jpg",
  "/temp/40.jpg",
  "/temp/41.jpg",
  "/temp/42.jpg",
  "/temp/43.jpg",
  "/temp/44.jpg",
  "/temp/45.jpg",
  "/temp/46.jpg",
  "/temp/47.jpg",
  "/temp/48.jpg",
  "/temp/49.jpg",
  "/temp/50.jpg",
  "/temp/51.jpg",
  "/temp/52.jpg",
  "/temp/53.jpg",
  "/temp/54.jpg",
  "/temp/55.jpg",
  "/temp/56.jpg",
  "/temp/57.jpg",
  "/temp/58.jpg",
  "/temp/59.jpg",
  "/temp/60.jpg",
  "/temp/61.jpg",
  "/temp/62.jpg",
  "/temp/63.jpg",
  "/temp/64.jpg",
  "/temp/65.jpg",
  "/temp/66.jpg",
  "/temp/67.jpg",
  "/temp/68.jpg",
  "/temp/69.jpg",
  "/temp/70.jpg",
  "/temp/71.jpg",
  "/temp/72.jpg",
  "/temp/73.jpg",
  "/temp/74.jpg",
  "/temp/75.jpg",
  "/temp/76.jpg",
  "/temp/77.jpg",
  "/temp/78.jpg",
  "/temp/79.jpg",
  "/temp/80.jpg",
  "/temp/81.jpg",
  "/temp/82.jpg",
  "/temp/83.jpg",
  "/temp/84.jpg",
  "/temp/85.jpg",
  "/temp/86.jpg",
  "/temp/87.jpg",
  "/temp/88.jpg",
  "/temp/89.jpg",
  "/temp/90.jpg",
  "/temp/91.jpg",
  "/temp/92.jpg",
  "/temp/93.jpg",
  "/temp/94.jpg",
  "/temp/95.jpg",
  "/temp/96.jpg",
  "/temp/97.jpg",
  "/temp/98.jpg",
  "/temp/99.jpg",
  "/temp/100.jpg",
  "/temp/101.jpg",
  "/temp/102.jpg",
  "/temp/103.jpg",
  "/temp/104.jpg",
  "/temp/105.jpg",
  "/temp/106.jpg",
  "/temp/107.jpg",
  "/temp/108.jpg",
  "/temp/109.jpg",
  "/temp/110.jpg",
  "/temp/111.jpg",
  "/temp/112.jpg",
  "/temp/113.jpg",
  "/temp/114.jpg",
  "/temp/115.jpg",
  "/temp/116.jpg",
  "/temp/117.jpg",
  "/temp/118.jpg",
  "/temp/119.jpg",
  "/temp/120.jpg",
  "/temp/121.jpg"
]
// [
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/1.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/2.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/3.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/4.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/5.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/6.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/7.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/8.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/9.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/10.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/11.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/12.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/13.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/14.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/15.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/16.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/17.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/18.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/19.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/20.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/21.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/22.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/23.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/24.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/25.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/26.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/27.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/28.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/29.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/30.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/31.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/32.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/33.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/34.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/35.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/36.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/37.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/38.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/39.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/40.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/41.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/42.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/43.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/44.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/45.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/46.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/47.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/48.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/49.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/50.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/51.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/52.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/53.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/54.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/55.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/56.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/57.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/58.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/59.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/60.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/61.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/62.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/63.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/64.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/65.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/66.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/67.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/68.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/69.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/70.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/71.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/72.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/73.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/74.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/75.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/76.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/77.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/78.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/79.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/80.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/81.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/82.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/83.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/84.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/85.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/86.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/87.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/88.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/89.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/90.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/91.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/92.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/93.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/94.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/95.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/96.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/97.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/98.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/99.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/100.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/101.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/102.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/103.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/104.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/105.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/106.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/107.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/108.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/109.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/110.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/111.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/112.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/113.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/114.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/115.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/116.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/117.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/118.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/119.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/120.jpg",
//   "https://zaariagallery.s3.af-south-1.amazonaws.com/gallery/121.jpg"
// ]
  );

 
  

  // Carousel state
  let currentSlide = $state(0);
  const carouselImages = [...images].splice(20, 80);
  let currentPage = $state(1); // Track the current page
  const perPage = 10; // Number of items per page
  let filteredImages = $state(images)
  // Filter businesses based on the selected category
  // $effect(()=>{
  //   if (selectedCategory == 'All'){
  //     filteredImages = images
  //   }else{

  //     images.filter((business) => business.category === selectedCategory);
  //   }
  // })
  let paginatedImages = $derived(filteredImages.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage))
  

  // Total number of pages for pagination
  let totalPages = $derived(Math.ceil(filteredImages.length / perPage));

  // Handle page change
  function handlePageChange(page) {
    currentPage = page;
  }
  // Auto-play carousel
  onMount(() => {
    const interval = setInterval(() => {
      currentSlide = (currentSlide + 1) % carouselImages.length;
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  });
</script>

<div class="container flex flex-col gap-12">
  
<!-- Carousel Section -->
<div class="carousel-container mb-12">
  {#each carouselImages as image, index}
    <div
      class="carousel-slide {index === currentSlide ? 'active' : ''}"
      style="background-image: url('{image}'); background-size: cover; background-position: center;"
    ></div>
  {/each}
</div>

<!-- Gallery Section -->
<div class="masonry-grid px-4">
  {#each paginatedImages as image}
    <div class="masonry-item">
      <img
        src={image}
        class="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      />
    </div>
  {/each}
</div>
<div class="py-12">
  <Pagination.Root
count={filteredImages.length}
perPage={perPage}
let:pages
let:currentPage={currentPage}
onPageChange={handlePageChange}
>
<Pagination.Content>
  <Pagination.Item>
    <Pagination.PrevButton />
  </Pagination.Item>
  {#each pages as page (page.key)}
    {#if page.type === "ellipsis"}
      <Pagination.Item>
        <Pagination.Ellipsis />
      </Pagination.Item>
    {:else}
      <Pagination.Item isVisible={currentPage === page.value}>
        <Pagination.Link {page} isActive={currentPage === page.value}>
          {page.value}
        </Pagination.Link>
      </Pagination.Item>
    {/if}
  {/each}
  <Pagination.Item>
    <Pagination.NextButton />
  </Pagination.Item>
</Pagination.Content>
</Pagination.Root>

</div>
</div>

<Footer/>
<style>
  /* Masonry grid */
  .masonry-grid {
    column-count: 1;
    column-gap: 1rem;
  }

  @media (min-width: 640px) {
    .masonry-grid {
      column-count: 2;
    }
  }

  @media (min-width: 1024px) {
    .masonry-grid {
      column-count: 3;
    }
  }

  @media (min-width: 1280px) {
    .masonry-grid {
      column-count: 4;
    }
  }

  .masonry-item {
    break-inside: avoid;
    margin-bottom: 1rem;
  }

  /* Carousel */
  .carousel-container {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 1rem;
  }

  .carousel-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .carousel-slide.active {
    opacity: 1;
  }
</style>