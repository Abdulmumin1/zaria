<!-- <script>
    import { Card } from "$lib/components/ui/card";
import { Button } from "$lib/components/ui/button";

const news = [
  {
    title: "New Cultural Center Opening Soon",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
  },
  {
    title: "City Launches Green Initiative",
    date: "March 14, 2024",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
  },
  {
    title: "Educational Summit 2024",
    date: "March 13, 2024",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
];
</script>

<div class="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Latest News</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each news as item}
            
          <Card key={item.title} class="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <p class="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 class="font-semibold mb-4">{item.title}</h3>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </div>
          </Card>
          {/each}

      </div>
    </div>
  </div> -->

<script>
	import { ChevronRight } from 'lucide-svelte';

	let images = [
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/zazzau.png',
			title: 'Zazzau Palace ',
			description: 'One of the historic landmarks of Zaria.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/12.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/cool.png',
			title: 'Market Square',
			description: 'A hub of activity and commerce.'
		},
		{ src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/rock.png', title: 'Zaria Hills', description: 'Breathtaking natural beauty.' },
		{ src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/14.png', title: 'Zaria Hills', description: 'Breathtaking natural beauty.' },
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/culture.png',
			title: 'Cultural Festival',
			description: 'Celebrating our rich heritage.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/abu.png',
			title: 'Learning Center',
			description: 'A beacon of knowledge and education.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/13.png',
			title: 'Learning Center',
			description: 'A beacon of knowledge and education.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/11.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/musa_gate.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/1.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/8.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/9.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/2.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/3.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/4.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/5.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/6.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/15.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},

		
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/7.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/10.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},{
			src: 'https://zaariagallery.s3.af-south-1.amazonaws.com/landing/16.png',
			title: 'City Park',
			description: 'Perfect for relaxation and family outings.'
		},
		
	];
</script>

<section class="py-16 max-h-[2000px] overflow-hidden">
	<div class="mx-auto ">
		<div class="text-center">
			<h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Discover Zaria Through Pictures</h2>
			<p class="mt-4 text-lg text-gray-600">
				A visual journey through the stunning landmarks, vibrant culture, and rich history of our
				city.
			</p>
		</div>
		<div class="masonry-grid mt-12 bg-[url('https://zaariagallery.s3.af-south-1.amazonaws.com/landing/16.png')]">
			{#each images as image}
				<div class="masonry-item group relative overflow-hidden shadow-lg">
					<img
						src={image.src}
						alt={image.title}
						class="w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
					<div
						class="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
					<!-- <div class="absolute group-hover:block hidden bottom-4 left-4 z-10 text-white">
						<h3 class="text-lg font-semibold">{image.title}</h3>
						<p class="text-sm">{image.description}</p>
					</div> -->
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="my-8 text-center">
	<a
		href="/gallery"
		class="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary/90"
	>
		View Full Gallery
		<ChevronRight class="ml-2 h-5 w-5" />
	</a>
</div>
<style>
	/* Masonry grid */
	.masonry-grid {
		column-count: 2;
		column-gap: 0rem;
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
			column-count: 5;
		}
	}

	.masonry-item {
		break-inside: avoid;
		/* margin-bottom: 1rem; */
	}
</style>
