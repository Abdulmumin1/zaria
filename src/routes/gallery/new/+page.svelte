<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
	import { Loader } from 'lucide-svelte';
	import Footer from '$lib/components/footer.svelte';

	// Use $state() for reactive form data
	let form = $state({
		location: '',
		description: '',
		images: []
	});

	// Use $state() for reactive errors
	let errors = $state({});

	// Track the selected thumbnail index
	let selectedThumbnailIndex = $state(0);

	// Handle file input change
	function handleFileChange(e) {
		const files = e.target.files;
		if (files) {
			form.images = Array.from(files);
		}
	}

	// Remove an image by index
	function removeImage(index) {
		form.images.splice(index, 1);
		if (selectedThumbnailIndex >= form.images.length) {
			selectedThumbnailIndex = Math.max(0, form.images.length - 1);
		}
	}

	// Set the selected thumbnail and move it to the first position
	function setThumbnail(index) {
		if (index >= 0 && index < form.images.length) {
			const selectedImage = form.images.splice(index, 1)[0];
			form.images.unshift(selectedImage);
			selectedThumbnailIndex = 0;
		}
	}

	// Validate the form
	function validateForm() {
		errors = {};

		if (form.location.length < 2) {
			errors.location = 'Location must be at least 2 characters';
		}
		if (form.description.length < 10) {
			errors.description = 'Description must be at least 10 characters';
		}
		if (form.images.length === 0) {
			errors.images = 'Please upload at least one image';
		}

		return Object.keys(errors).length === 0;
	}

	let loading = $state(false);
	let completed = $state(false);

	// Handle form submission
	async function handleSubmit(e) {
		e.preventDefault();

		loading = true;
		if (!validateForm()) {
			loading = false;
			return; // Stop submission if validation fails
		}

		// Prepare form data for submission
		const data = new FormData();
		data.append('location', form.location);
		data.append('info', form.description);
		form.images.forEach((file) => {
			data.append('images[]', file); // Use 'images[]' to indicate an array
		});

		try {
			const response = await fetch('?/new', {
				method: 'POST',
				body: data
			});

			if (response.ok) {
				alert('Form submitted successfully!');
				// Reset the form
				form = {
					location: '',
					description: '',
					images: []
				};
				errors = {};
				completed = true;
			} else {
				const result = await response.json();
				alert(`Error: ${result.message}`);
			}
		} catch (error) {
			console.error(error);
		}

		loading = false;
	}
</script>

<div class="container min-h-screen flex justify-center  flex-col mx-auto mb-12">
    <div class="max-w-3xl w-fit mx-auto text-center space-y-4 pt-6 pb-12">
        <h1 class="text-4xl font-bold tracking-tight bg-primary text-white">Add to Zaria gallery</h1>
        <p class="text-muted-foreground">Blessed us with amazing images of our blessed city</p>
      </div>
    {#if !completed}
	<form onsubmit={handleSubmit} action="?/new" class="space-y-6 max-w-4xl mx-auto w-full">
		<div class="space-y-2">
			<Label for="location">Location</Label>
			<Input
				id="location"
				type="text"
				bind:value={form.location}
				placeholder="Enter the location of the image"
			/>
			{#if errors.location}
				<p class="text-sm text-destructive">{errors.location}</p>
			{/if}
		</div>

		<div class="space-y-2">
			<Label for="description">Description</Label>
			<Textarea
				id="description"
				bind:value={form.description}
				placeholder="Describe the image (e.g., landmarks, events, etc.)"
				class="resize-none"
			/>
			{#if errors.description}
				<p class="text-sm text-destructive">{errors.description}</p>
			{/if}
		</div>

		<div class="space-y-2">
			<Label for="images">Images</Label>
			<Input id="images" type="file" accept="image/*" multiple on:change={handleFileChange} />
			<p class="text-sm text-muted-foreground">Upload images of Zaria (max 5 images)</p>
			{#if errors.images}
				<p class="text-sm text-destructive">{errors.images}</p>
			{/if}
		</div>

		<!-- Image Previews -->
		<div class="space-y-4">
			{#if form.images && form.images.length > 0}
				<div class="masonry-grid px-4">
					{#each form.images as image, index}
						<div class="masonry-item group relative">
							<img
								src={URL.createObjectURL(image)}
								alt="Preview"
								class=" w-full rounded-lg object-cover"
							/>
							<div
								class="absolute inset-0 flex items-center justify-center space-x-2 rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100"
							>
								
								<Button
									type="button"
									on:click={() => removeImage(index)}
									class="bg-white text-sm text-black hover:bg-gray-200"
								>
									Remove
								</Button>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<Button disabled={loading} type="submit" class="flex w-full items-center justify-center gap-2">
			Submit Contribution
			{#if loading}
				<Loader class="animate-spin" />
			{/if}
		</Button>
	</form>
{:else}
	<div>
		Thank you for contributing to the Zaria City Gallery! Your submission will be reviewed and added
		to the gallery soon.
	</div>
{/if}
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
</style>