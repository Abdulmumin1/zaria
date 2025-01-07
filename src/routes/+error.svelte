<script>
    import { onMount } from 'svelte';
  
    // Optional: Add a smooth fade-in animation
    onMount(() => {
      const container = document.querySelector('.error-container');
      if (container) {
        container.classList.add('fade-in');
      }
    });
  </script>
   <div class="error-container">
    <!-- Error Code -->
    <h1>404</h1>
  
    <!-- Error Message -->
    <h2>Oops! The page you're looking for doesn't exist.</h2>
  
    <!-- Home Button -->
    <a href="/" class="home-button">Go Back Home</a>
  </div>
  
  <style>
    /* Fade-in animation */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    .fade-in {
      animation: fadeIn 0.8s ease-out;
    }
  
    /* Center the content */
    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
      background-color: #f9fafb;
      padding: 2rem;
    }
  
    /* Stylish heading */
    h1 {
      font-size: 6rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0;
      line-height: 1;
    }
  
    /* Subheading */
    h2 {
      font-size: 1.5rem;
      font-weight: 500;
      color: #4b5563;
      margin-top: 1rem;
    }
  
    /* Button styling */
    .home-button {
      margin-top: 2rem;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      color: white;
      background-color: #3b82f6;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .home-button:hover {
      background-color: #2563eb;
    }
  </style>
  
 