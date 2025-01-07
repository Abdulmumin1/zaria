<script>
    // Get the current hour
    const hour = new Date().getHours();
  
    // Determine the time of the day
    let timeOfDay;
    let bgColor;
  
    if (hour >= 6 && hour < 12) {
      timeOfDay = "Morning";
      bgColor = "text-yellow-200"; // Light yellow for morning
    } else if (hour >= 12 && hour < 18) {
      timeOfDay = "Afternoon";
      bgColor = "text-orange-300"; // Light orange for afternoon
    } else if (hour >= 18 && hour < 21) {
      timeOfDay = "Evening";
      bgColor = "bg-purple-300"; // Light purple for evening
    } else {
      timeOfDay = "Night";
      bgColor = "bg-blue-900"; // Dark blue for night
    }
  </script>
  
  <div class=" {bgColor} mb-6">
    <h1 class="text-4xl font-bold text-white">Good {timeOfDay} <span class="bg-white text-primary">Zaria</span></h1>
  </div>