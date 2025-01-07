<script>
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger,
		SelectValue
	} from '$lib/components/ui/select';
	import * as Pagination from '$lib/components/ui/pagination';
	import { mockBusinesses } from '$lib';
	import Button from '../ui/button/button.svelte';
	import { flip } from 'svelte/animate';

	const categories = [
		'All',
		'Retail',
		'Food & Beverage',
		'Services',
		'Education',
		'Healthcare',
		'Technology',
		'Manufacturing',
		'Agriculture',
		'Others'
	];

	let selectedCategory = $state('All');
	let currentPage = $state(1); // Track the current page
	const perPage = 30; // Number of items per page
	let filteredBusinesses = $state(mockBusinesses);
	// Filter businesses based on the selected category
	$effect(() => {
		if (selectedCategory == 'All') {
			filteredBusinesses = mockBusinesses;
		} else if (selectedCategory == 'Others'){
      // console.log(selectedCategory, categories)
			filteredBusinesses = mockBusinesses.filter((business) => categories.includes(business.category) == false);

    }
     else {
			filteredBusinesses = mockBusinesses.filter((business) => business.category === selectedCategory);
		}
    // console.log(selectedCategory)
	});

	// Slice the businesses array based on the current page
	let paginatedBusinesses = $derived(
		filteredBusinesses.slice((currentPage - 1) * perPage, currentPage * perPage)
	);

	// Total number of pages for pagination
	let totalPages = $derived(Math.ceil(filteredBusinesses.length / perPage));

	// Handle page change
	function handlePageChange(page) {
		currentPage = page;
	}
	function handleSelectChange(v) {
		selectedCategory = v;
		currentPage = 1; // Reset to the first page when the category changes
  
	
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<h2 class="text-2xl font-semibold">Listed Businesses</h2>
		<Select selected={selectedCategory} onSelectedChange={(v) => handleSelectChange(v.value)}>
			<SelectTrigger class="w-[180px]">
				<SelectValue placeholder="Select category" />
			</SelectTrigger>
			<SelectContent>
				{#each categories as category}
					<SelectItem value={category}>
						{category}
					</SelectItem>
				{/each}
			</SelectContent>
		</Select>
	</div>

	<!-- Business Cards Grid -->

	<div class="grid gap-8 lg:grid-cols-[350px,1fr]">
		<div class="flex h-fit flex-col items-start gap-2 rounded-2xl bg-primary/5 p-3 text-left">
			<h4 class="">Categories</h4>
			{#each categories as category}
				<Button
					value={category}
          on:click={()=>handleSelectChange(category)}
          
					class="flex w-full items-start justify-start bg-white text-black hover:text-white hover:bg-accent {selectedCategory == category ? 'bg-accent text-white':''} "
          >
					{category}
				</Button>
			{/each}
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each paginatedBusinesses as business (business.id)}
				<a animate:flip={{ duration: 150 }} href="/business/{business.id}" class="block">
					<Card class="group h-full overflow-hidden transition-shadow hover:shadow-lg">
						<div class="aspect-video overflow-hidden">
							<img
								src={business.image}
								alt={business.name}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>
						<CardHeader>
							<CardTitle class="flex items-start justify-between">
								<span>{business.name}</span>
								<span class="text-sm text-muted-foreground">{business.category}</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p class="mb-2 text-muted-foreground">{business.description}</p>
							<p class="text-sm">{business.address}</p>
						</CardContent>
					</Card>
				</a>
			{/each}
		</div>

		<!-- <BusinessList /> -->
	</div>

	<!-- Pagination -->
	<Pagination.Root
		count={filteredBusinesses.length}
		{perPage}
		let:pages
		let:currentPage
		onPageChange={handlePageChange}
	>
		<Pagination.Content>
			<Pagination.Item>
				<Pagination.PrevButton />
			</Pagination.Item>
			{#each pages as page (page.key)}
				{#if page.type === 'ellipsis'}
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
