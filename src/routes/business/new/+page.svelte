<script>
    import BusinessReg from "$lib/components/businesses/businessRegistration.svelte";
	import Footer from "$lib/components/footer.svelte";
    import { Card, CardContent } from "$lib/components/ui/card";

</script>

<!-- grid lg:grid-cols-[350px,1fr] gap-8 -->

<div class="max-w-6xl flex flex-col items-center justify-center py-12 mx-auto">

  <div class="max-w-3xl mx-auto text-center space-y-4 pt-6 pb-12">
    <h1 class="text-4xl font-bold tracking-tight bg-primary text-white">Promote your Business</h1>
    <p class="text-muted-foreground">Help the locals discover your business</p>
  </div>
  <div class="grid lg:grid-cols-[350px,1fr] gap-8 container">
    <div class="bg-primary rounded-2xl"></div>
    
      <Card class="h-fit">
        <CardContent class="p-6">
          <BusinessReg />
        </CardContent>
      </Card>
  
      <!-- <BusinessList /> -->
    </div>
</div>
<Footer/>
