<script>
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
  </div>