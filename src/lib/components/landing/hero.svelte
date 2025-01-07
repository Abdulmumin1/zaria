<script>
	import { Search } from 'lucide-svelte';
	import {Input} from '$lib/components/ui/input';
	import {Button} from '$lib/components/ui/button';
</script>

<div class="hero-pattern relative w-full px-4 py-16 sm:px-6 lg:px-8">
<!-- <img src="/image.png" height="300" class="overflow-hidden brightness-50 absolute h-64  object-cover" alt=""> -->

	<div class="mx-auto relative z-40 max-w-7xl text-center">
		<h1 class="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
			Welcome to <span class="text-primary">Zaria</span>
		</h1>
		<p class="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
			Discover the ancient city of learning and culture, where tradition meets progress
		</p>
		<div class="mx-auto flex max-w-2xl flex-col gap-4">
			<div class="flex gap-2">
				<Input placeholder="Search for services, information, and more..." class="h-12" />
				<Button size="lg">
					<Search class="mr-2 h-5 w-5" />
					Search
				</Button>
			</div>
			<a href="/businesses" class="font-medium text-primary transition-colors hover:text-primary/80">
				Explore Local Businesses →
			</a>
		</div>
	</div>
</div>
