<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger,
		SelectValue
	} from '$lib/components/ui/select';
	import { preventDefault } from 'svelte/legacy';
	import { Loader } from 'lucide-svelte';

	const businessCategories = [
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

	// Use $state() for reactive form data
	let form = $state({
		name: '',
		category: '',
		description: '',
		address: '',
		phone: '',
		email: '',
		website: '',
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

		if (form.name.length < 2) {
			errors.name = 'Business name must be at least 2 characters';
		}
		if (!businessCategories.includes(form.category)) {
			errors.category = 'Please select a business category';
		}
		if (form.description.length < 10) {
			errors.description = 'Description must be at least 10 characters';
		}
		if (form.address.length < 5) {
			errors.address = 'Address must be at least 5 characters';
		}
		if (form.phone.length < 11) {
			errors.phone = 'Phone number must be at least 11 characters';
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			errors.email = 'Invalid email address';
		}
		if (form.website && !/^https?:\/\/\S+$/.test(form.website)) {
			errors.website = 'Invalid website URL';
		}
		console.log(errors);

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
		data.append('name', form.name);
		data.append('category', form.category);
		data.append('description', form.description);
		data.append('location', form.address);
		data.append('phone', form.phone);
		data.append('email', form.email);
		data.append('website', form.website);
		// data.append('images', form.images);
		form.images.forEach((file) => {
			data.append('images[]', file); // Use 'images[]' to indicate an array
		});
		// form.images.forEach((file, index) => {
		//   data.append(`images`, file);
		// });

		try {
			const response = await fetch('?/new', {
				method: 'POST',
				body: data
			});

			if (response.ok) {
				alert('Form submitted successfully!');
				// Reset the form
				form = {
					name: '',
					category: '',
					description: '',
					address: '',
					phone: '',
					email: '',
					website: '',
					images: []
				};
				errors = {};
			} else {
				const result = await response.json();
				alert(`Error: ${result.message}`);
			}
		} catch (error) {
			completed = true;
			// alert('An error occurred while submitting the form.');
			console.error(error);
		}

		loading = false;
	}
</script>

{#if !completed}
<form onsubmit={handleSubmit} action="?/new" class="space-y-6">
	<div class="space-y-2">
		<Label for="name">Business Name</Label>
		<Input id="name" type="text" bind:value={form.name} placeholder="Enter business name" />
		{#if errors.name}
			<p class="text-sm text-destructive">{errors.name}</p>
		{/if}
	</div>

	<div class="space-y-2">
		<Label for="category">Category</Label>
		<Select
			onSelectedChange={({ value }) => {
				form.category = value;
			}}
		>
			<SelectTrigger>
				<SelectValue placeholder="Select a category" />
			</SelectTrigger>
			<SelectContent>
				{#each businessCategories as category}
					<SelectItem value={category}>{category}</SelectItem>
				{/each}
			</SelectContent>
		</Select>
		{#if errors.category}
			<p class="text-sm text-destructive">{errors.category}</p>
		{/if}
	</div>

	<div class="space-y-2">
		<Label for="description">Description</Label>
		<Textarea
			id="description"
			bind:value={form.description}
			placeholder="Describe your business"
			class="resize-none"
		/>
		{#if errors.description}
			<p class="text-sm text-destructive">{errors.description}</p>
		{/if}
	</div>

	<div class="space-y-2">
		<Label for="address">Address</Label>
		<Input id="address" type="text" bind:value={form.address} placeholder="Business address" />
		{#if errors.address}
			<p class="text-sm text-destructive">{errors.address}</p>
		{/if}
	</div>

	<div class="space-y-2">
		<Label for="phone">Phone</Label>
		<Input id="phone" type="text" bind:value={form.phone} placeholder="Phone number" />
		{#if errors.phone}
			<p class="text-sm text-destructive">{errors.phone}</p>
		{/if}
	</div>

	<div class="space-y-2">
		<Label for="email">Email</Label>
		<Input id="email" type="email" bind:value={form.email} placeholder="Business email" />
		{#if errors.email}
			<p class="text-sm text-destructive">{errors.email}</p>
		{/if}
	</div>

	<div class="space-y-2">
		<Label for="website">Website (Optional)</Label>
		<Input id="website" type="url" bind:value={form.website} placeholder="https://example.com" />
		{#if errors.website}
			<p class="text-sm text-destructive">{errors.website}</p>
		{/if}
	</div>

	<div class="space-y-2">
		<Label for="images">Images</Label>
		<Input id="images" type="file" accept="image/*" multiple on:change={handleFileChange} />
		<p class="text-sm text-muted-foreground">Upload images of your business (max 5 images)</p>
		{#if errors.images}
			<p class="text-sm text-destructive">{errors.images}</p>
		{/if}
	</div>

	<!-- Image Previews -->
	<div class="space-y-4">
		{#if form.images && form.images.length > 0}
			<div class="grid grid-cols-3 gap-4">
				{#each form.images as image, index}
					<div class="group relative">
						<img
							src={URL.createObjectURL(image)}
							alt="Preview"
							class="h-32 w-full rounded-lg object-cover"
						/>
						<div
							class="absolute inset-0 flex items-center justify-center space-x-2 rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100"
						>
							<Button
								type="button"
								on:click={() => setThumbnail(index)}
								class="bg-white text-sm text-black hover:bg-gray-200"
							>
								{index === selectedThumbnailIndex ? 'Thumbnail' : 'Set as Thumbnail'}
							</Button>
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

	<Button disabled={loading} type="submit" class="flex w-full items-center justify-center gap-2"
		>Register Business
		{#if loading}
			<Loader class="animate-spin" />
		{/if}
	</Button>
</form>
{:else}
<div>
	Thank you for submiting your business. we will reach out to you via email to complete the process!
</div>
{/if}

<!-- Image Previews -->
<!-- <div class="space-y-4">
    {#if $form.images && $form.images.length > 0}
      <div class="grid grid-cols-3 gap-4">
        {#each $form.images as image, index}
          <div class="relative group  {index == 0? 'border-2':''}">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              class="w-full h-32 object-cover rounded-lg"
            />
            {#if index == 0}
            <Label>Thumbnail</Label>
            {/if}
            <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 text-xs group-hover:opacity-100 flex items-center justify-center space-x-2 rounded-lg transition-opacity">
              <Button
                type="button"
                on:click={() => setThumbnail(index)}
                class="text-xs bg-white text-black hover:bg-gray-200 p-1"
              >
                {index === selectedThumbnailIndex ? 'Thumbnail' : 'Set as Thumbnail'}
              </Button>
              <Button
                type="button"
                on:click={() => removeImage(index)}
                class="text-xs bg-destructive"
              >
                <Trash/>
              </Button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div> -->
