<script>
    import {
  Building2,
  GraduationCap,
  Landmark,
  LibraryBig,
  Bus,
  Heart,
  Trees,
  Users,
} from "lucide-svelte";
import { Card } from "$lib/components/ui/card";

const services = [
  {
    title: "Education",
    description: "Access educational resources and information",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    description: "Find healthcare facilities and services",
    icon: Heart,
  },
  {
    title: "Transportation",
    description: "Public transport information and routes",
    icon: Bus,
  },
  {
    title: "Culture & Tourism",
    description: "Explore our rich cultural heritage",
    icon: Landmark,
  },
  {
    title: "Business",
    description: "Business registration and support",
    icon: Building2,
  },
  {
    title: "Library Services",
    description: "Access public libraries and resources",
    icon: LibraryBig,
  },
  {
    title: "Environment",
    description: "Environmental services and initiatives",
    icon: Trees,
  },
  {
    title: "Community",
    description: "Community programs and events",
    icon: Users,
  },
];

</script>

<div class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Find City Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       {#each services as service}
        
       <Card key={service.title} class="p-6 hover:shadow-lg transition-shadow">
         <service.icon class="h-8 w-8 text-primary mb-4" />
         <h3 class="font-semibold mb-2">{service.title}</h3>
         <p class="text-gray-600 text-sm">{service.description}</p>
       </Card>
       {/each}
        
      </div>
    </div>
  </div>


