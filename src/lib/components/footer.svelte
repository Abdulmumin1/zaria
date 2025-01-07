<script>
    import { Facebook, Twitter, Instagram } from "lucide-svelte";
	import Greet from "./landing/greet.svelte";

</script>


<footer class="bg-primary text-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Greet/>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Eulogy</h3>
          <p class="text-primary-foreground/80">
            A historic city known for its rich cultural heritage, educational institutions, and vibrant community.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-primary-foreground/80">Contact</a></li>
            <li><a href="/businesses" class="hover:text-primary-foreground/80">Businesses</a></li>
            <li><a href="/business/new" class="hover:text-primary-foreground/80">Add Business</a></li>
            <!-- <li><a href="#" class="hover:text-primary-foreground/80">Contact</a></li> -->
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <ul class="space-y-2">
            <li>Zaria Front,</li>
            <li>Kaduna State, Nigeria</li>
            <li>info@zariah.com.ng</li>
            <li>+234 XXX XXX XXXX</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-primary-foreground/80">
              <Facebook class="h-6 w-6" />
            </a>
            <a href="#" class="hover:text-primary-foreground/80">
              <Twitter class="h-6 w-6" />
            </a>
            <a href="#" class="hover:text-primary-foreground/80">
              <Instagram class="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
        <p>&copy; {new Date().getFullYear()} City of Zaria. All rights reserved.</p>
      </div>
    </div>
  </footer>