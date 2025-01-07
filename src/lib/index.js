export const mockBusinesses = [
    {
      id: 1,
      name: "Zaria Tech Hub",
      category: "Technology",
      description: "A modern co-working space and technology innovation center.",
      address: "123 Tech Street, Zaria",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      longDescription:
        "Zaria Tech Hub is a state-of-the-art facility designed to foster innovation and collaboration in the technology sector. Our space provides entrepreneurs and tech enthusiasts with the resources they need to build successful ventures.",
      amenities: ["High-speed Internet", "Meeting Rooms", "24/7 Access", "Event Space"],
      contactInfo: {
        phone: "+234 123 456 7890",
        email: "contact@zariatechhub.com",
        website: "www.zariatechhub.com",
      },
      reviews: [
        { user: "John Doe", rating: 5, comment: "Fantastic place to work and network!" },
        { user: "Jane Smith", rating: 4, comment: "Great facilities, but parking is limited." },
      ],
    },
    {
      id: 2,
      name: "Green Fields Farm",
      category: "Agriculture",
      description: "Sustainable farming practices with modern techniques.",
      address: "456 Farm Road, Zaria",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      longDescription:
        "Green Fields Farm is committed to sustainable agriculture, combining traditional farming wisdom with modern techniques. We produce high-quality organic crops while maintaining ecological balance.",
      amenities: ["Organic Certification", "Farm Tours", "Local Produce Store"],
      contactInfo: {
        phone: "+234 098 765 4321",
        email: "info@greenfieldsfarm.com",
        website: "www.greenfieldsfarm.com",
      },
      reviews: [
        { user: "Alice Brown", rating: 5, comment: "Fresh produce and eco-friendly practices!" },
        { user: "Tom Lee", rating: 4, comment: "Loved the farm tour!" },
      ],
    },
    {
      id: 3,
      name: "Urban Threads",
      category: "Retail",
      description: "Trendy and affordable clothing for all seasons.",
      address: "77 Fashion Boulevard, Abuja",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      longDescription:
        "Urban Threads is your go-to fashion destination, offering a wide variety of stylish and affordable clothing for all seasons. Our collections are curated to keep you on trend without breaking the bank.",
      amenities: ["Changing Rooms", "Tailoring Services", "Online Store"],
      contactInfo: {
        phone: "+234 876 543 2109",
        email: "support@urbanthreads.com",
        website: "www.urbanthreads.com",
      },
      reviews: [
        { user: "Rachel Green", rating: 5, comment: "Love their trendy outfits!" },
        { user: "Ross Geller", rating: 3, comment: "Prices are good, but the store gets crowded." },
      ],
    },
    {
      id: 4,
      name: "Soul Spa",
      category: "Health & Wellness",
      description: "Relaxation and rejuvenation with world-class spa services.",
      address: "15 Relaxation Way, Jos",
      image: "https://images.unsplash.com/photo-1556228721-3ef22b64255f",
      longDescription:
        "Soul Spa offers a luxurious experience with a variety of treatments designed to relax your mind, body, and soul. From massages to facials, our expert staff ensures you leave feeling rejuvenated.",
      amenities: ["Jacuzzi", "Steam Room", "Private Massage Rooms"],
      contactInfo: {
        phone: "+234 654 321 0987",
        email: "bookings@soulspa.com",
        website: "www.soulspa.com",
      },
      reviews: [
        { user: "Emily Davis", rating: 5, comment: "The best spa experience I've ever had!" },
        { user: "Michael Scott", rating: 4, comment: "Excellent service, but slightly pricey." },
      ],
    },
    {
      id: 5,
      name: "Future Minds Academy",
      category: "Education",
      description: "Empowering young minds with top-notch education.",
      address: "34 Learning Crescent, Ibadan",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1cd2cda",
      longDescription:
        "Future Minds Academy is dedicated to providing a holistic education that prepares students for success in the modern world. Our curriculum focuses on academics, creativity, and character building.",
      amenities: ["Science Labs", "Sports Facilities", "Library"],
      contactInfo: {
        phone: "+234 222 333 4444",
        email: "info@futuremindsacademy.com",
        website: "www.futuremindsacademy.com",
      },
      reviews: [
        { user: "Sarah Connor", rating: 5, comment: "My kids love it here!" },
        { user: "John Wick", rating: 4, comment: "Great education, but fees are on the higher side." },
      ],
    },
    {
      id: 6,
      name: "Skyline Apartments",
      category: "Real Estate",
      description: "Luxurious living spaces with stunning city views.",
      address: "88 Skyline Drive, Lagos",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      longDescription:
        "Skyline Apartments offers premium living spaces with breathtaking views of the city. Our apartments are designed with modern amenities and a focus on comfort and style.",
      amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking"],
      contactInfo: {
        phone: "+234 555 666 7777",
        email: "info@skylineapartments.com",
        website: "www.skylineapartments.com",
      },
      reviews: [
        { user: "Laura Palmer", rating: 5, comment: "Absolutely love the view and amenities!" },
        { user: "Dale Cooper", rating: 4, comment: "Great place, but the rent is high." },
      ],
    },
    {
      id: 7,
      name: "Golden Bites Restaurant",
      category: "Food & Dining",
      description: "A culinary journey through global cuisines.",
      address: "22 Flavor Street, Port Harcourt",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      longDescription:
        "Golden Bites Restaurant offers a diverse menu inspired by cuisines from around the world. Our chefs use fresh, locally-sourced ingredients to create unforgettable dining experiences.",
      amenities: ["Outdoor Seating", "Private Dining", "Live Music"],
      contactInfo: {
        phone: "+234 888 999 0000",
        email: "reservations@goldenbites.com",
        website: "www.goldenbites.com",
      },
      reviews: [
        { user: "Gordon Ramsay", rating: 5, comment: "Exceptional food and service!" },
        { user: "Jamie Oliver", rating: 4, comment: "Great atmosphere, but a bit noisy." },
      ],
    },
    {
      id: 8,
      name: "FitLife Gym",
      category: "Fitness",
      description: "Your destination for health and fitness.",
      address: "45 Fitness Avenue, Enugu",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
      longDescription:
        "FitLife Gym is equipped with state-of-the-art fitness equipment and offers a variety of classes to help you achieve your health goals. Our trainers are dedicated to helping you stay fit and healthy.",
      amenities: ["Cardio Machines", "Weight Training", "Group Classes", "Sauna"],
      contactInfo: {
        phone: "+234 777 888 9999",
        email: "info@fitlifegym.com",
        website: "www.fitlifegym.com",
      },
      reviews: [
        { user: "Arnold Schwarzenegger", rating: 5, comment: "Best gym in town!" },
        { user: "Dwayne Johnson", rating: 4, comment: "Great equipment, but crowded during peak hours." },
      ],
    },
    {
      id: 9,
      name: "Book Haven",
      category: "Retail",
      description: "A paradise for book lovers.",
      address: "33 Literature Lane, Kano",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
      longDescription:
        "Book Haven is a cozy bookstore offering a wide selection of books across various genres. Whether you're a fan of fiction, non-fiction, or academic texts, we have something for everyone.",
      amenities: ["Reading Lounge", "Café", "Author Events"],
      contactInfo: {
        phone: "+234 444 555 6666",
        email: "info@bookhaven.com",
        website: "www.bookhaven.com",
      },
      reviews: [
        { user: "J.K. Rowling", rating: 5, comment: "A magical place for book lovers!" },
        { user: "Stephen King", rating: 4, comment: "Great selection, but could use more seating." },
      ],
    },
    {
      id: 10,
      name: "Tech Innovators",
      category: "Technology",
      description: "Driving innovation through cutting-edge technology.",
      address: "10 Innovation Road, Abuja",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
      longDescription:
        "Tech Innovators is a leading technology company specializing in software development, AI, and IoT solutions. We help businesses transform their operations with innovative technology.",
      amenities: ["R&D Labs", "Training Programs", "Consulting Services"],
      contactInfo: {
        phone: "+234 111 222 3333",
        email: "info@techinnovators.com",
        website: "www.techinnovators.com",
      },
      reviews: [
        { user: "Elon Musk", rating: 5, comment: "Incredible innovation and expertise!" },
        { user: "Bill Gates", rating: 4, comment: "Great company, but could improve customer support." },
      ],
    },
     {
    id: 11,
    name: "Ocean View Resort",
    category: "Hospitality",
    description: "A luxurious beachfront resort offering world-class amenities.",
    address: "12 Coastal Road, Calabar",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    longDescription:
      "Ocean View Resort is the perfect getaway for those seeking relaxation and luxury. With stunning ocean views, gourmet dining, and a range of recreational activities, your stay will be unforgettable.",
    amenities: ["Private Beach", "Spa", "Fine Dining", "Water Sports"],
    contactInfo: {
      phone: "+234 333 444 5555",
      email: "bookings@oceanviewresort.com",
      website: "www.oceanviewresort.com",
    },
    reviews: [
      { user: "Beyoncé Knowles", rating: 5, comment: "Absolutely breathtaking views and service!" },
      { user: "Jay-Z", rating: 4, comment: "Great resort, but the Wi-Fi could be better." },
    ],
  },
  {
    id: 12,
    name: "Nature's Trail Hiking",
    category: "Outdoor Activities",
    description: "Explore the beauty of nature with guided hiking tours.",
    address: "78 Forest Lane, Obudu",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
    longDescription:
      "Nature's Trail Hiking offers guided tours through some of the most scenic trails in the region. Whether you're a beginner or an experienced hiker, we have something for everyone.",
    amenities: ["Guided Tours", "Equipment Rental", "Picnic Areas"],
    contactInfo: {
      phone: "+234 666 777 8888",
      email: "info@naturestrail.com",
      website: "www.naturestrail.com",
    },
    reviews: [
      { user: "Bear Grylls", rating: 5, comment: "An amazing experience for nature lovers!" },
      { user: "Les Stroud", rating: 4, comment: "Great trails, but bring your own water." },
    ],
  },
  {
    id: 13,
    name: "Artisan Bakery",
    category: "Food & Dining",
    description: "Handcrafted bread and pastries made with love.",
    address: "56 Baker's Street, Ilorin",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    longDescription:
      "Artisan Bakery specializes in handcrafted bread, pastries, and desserts made with the finest ingredients. Our bakers are passionate about creating delicious treats for our customers.",
    amenities: ["Fresh Daily", "Custom Cakes", "Coffee Bar"],
    contactInfo: {
      phone: "+234 999 000 1111",
      email: "orders@artisanbakery.com",
      website: "www.artisanbakery.com",
    },
    reviews: [
      { user: "Paul Hollywood", rating: 5, comment: "The best croissants I've ever had!" },
      { user: "Mary Berry", rating: 4, comment: "Delicious pastries, but a bit pricey." },
    ],
  },
  {
    id: 14,
    name: "Tech Solutions Ltd.",
    category: "Technology",
    description: "Innovative IT solutions for businesses.",
    address: "99 Tech Park, Kaduna",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    longDescription:
      "Tech Solutions Ltd. provides cutting-edge IT services, including software development, cloud computing, and cybersecurity. We help businesses stay ahead in the digital age.",
    amenities: ["Consulting", "Training", "24/7 Support"],
    contactInfo: {
      phone: "+234 222 333 4444",
      email: "info@techsolutions.com",
      website: "www.techsolutions.com",
    },
    reviews: [
      { user: "Mark Zuckerberg", rating: 5, comment: "Top-notch IT solutions!" },
      { user: "Sundar Pichai", rating: 4, comment: "Great company, but response times could improve." },
    ],
  },
  {
    id: 15,
    name: "Serene Yoga Studio",
    category: "Health & Wellness",
    description: "Find peace and balance through yoga.",
    address: "23 Zen Lane, Benin City",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    longDescription:
      "Serene Yoga Studio offers a variety of yoga classes for all levels. Our experienced instructors guide you through each session, helping you achieve physical and mental well-being.",
    amenities: ["Group Classes", "Private Sessions", "Meditation Room"],
    contactInfo: {
      phone: "+234 777 888 9999",
      email: "info@sereneyoga.com",
      website: "www.sereneyoga.com",
    },
    reviews: [
      { user: "Deepak Chopra", rating: 5, comment: "A truly transformative experience!" },
      { user: "Eckhart Tolle", rating: 4, comment: "Great classes, but the studio is small." },
    ],
  },
  {
    id: 16,
    name: "AutoFix Garage",
    category: "Automotive",
    description: "Your trusted partner for car repairs and maintenance.",
    address: "34 Mechanic Road, Owerri",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    longDescription:
      "AutoFix Garage provides reliable and affordable car repair services. Our skilled mechanics use the latest tools and technology to keep your vehicle running smoothly.",
    amenities: ["Oil Change", "Brake Repair", "Engine Diagnostics"],
    contactInfo: {
      phone: "+234 555 666 7777",
      email: "service@autofixgarage.com",
      website: "www.autofixgarage.com",
    },
    reviews: [
      { user: "Jeremy Clarkson", rating: 5, comment: "Honest and efficient service!" },
      { user: "Richard Hammond", rating: 4, comment: "Good work, but a bit slow." },
    ],
  },
  {
    id: 17,
    name: "Pet Paradise",
    category: "Pet Care",
    description: "Premium care for your furry friends.",
    address: "67 Pet Lane, Uyo",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    longDescription:
      "Pet Paradise offers grooming, boarding, and veterinary services for your pets. We treat your pets like family, ensuring they receive the best care possible.",
    amenities: ["Grooming", "Boarding", "Veterinary Services"],
    contactInfo: {
      phone: "+234 888 999 0000",
      email: "info@petparadise.com",
      website: "www.petparadise.com",
    },
    reviews: [
      { user: "Cesar Millan", rating: 5, comment: "Amazing care for pets!" },
      { user: "Ellen DeGeneres", rating: 4, comment: "Great service, but a bit expensive." },
    ],
  },
  {
    id: 18,
    name: "Creative Minds School",
    category: "Education",
    description: "Nurturing creativity and academic excellence.",
    address: "45 Learning Avenue, Abeokuta",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    longDescription:
      "Creative Minds School focuses on fostering creativity and critical thinking in students. Our curriculum integrates arts, sciences, and technology to prepare students for the future.",
    amenities: ["Art Studio", "Science Lab", "Sports Field"],
    contactInfo: {
      phone: "+234 111 222 3333",
      email: "info@creativeminds.com",
      website: "www.creativeminds.com",
    },
    reviews: [
      { user: "Ken Robinson", rating: 5, comment: "A school that truly values creativity!" },
      { user: "Sal Khan", rating: 4, comment: "Great approach, but needs more resources." },
    ],
  },
  {
    id: 19,
    name: "EcoClean Laundry",
    category: "Services",
    description: "Eco-friendly laundry services for your home and office.",
    address: "89 Green Street, Jos",
    image: "https://images.unsplash.com/photo-1582730147924-d92f4da00252",
    longDescription:
      "EcoClean Laundry uses environmentally friendly detergents and energy-efficient machines to provide high-quality laundry services. We care for your clothes and the planet.",
    amenities: ["Pickup & Delivery", "Dry Cleaning", "Eco-Friendly Products"],
    contactInfo: {
      phone: "+234 444 555 6666",
      email: "service@ecoclean.com",
      website: "www.ecoclean.com",
    },
    reviews: [
      { user: "Greta Thunberg", rating: 5, comment: "Love their commitment to the environment!" },
      { user: "Leonardo DiCaprio", rating: 4, comment: "Great service, but a bit slow." },
    ],
  },
  {
    id: 20,
    name: "Golden Harvest Farms",
    category: "Agriculture",
    description: "Organic produce grown with care.",
    address: "101 Farm Road, Ibadan",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    longDescription:
      "Golden Harvest Farms specializes in organic farming, producing fresh and healthy fruits and vegetables. We are committed to sustainable agriculture and environmental stewardship.",
    amenities: ["Farm Tours", "Organic Certification", "Farm-to-Table Sales"],
    contactInfo: {
      phone: "+234 777 888 9999",
      email: "info@goldenharvest.com",
      website: "www.goldenharvest.com",
    },
    reviews: [
      { user: "Alice Waters", rating: 5, comment: "The best organic produce I've ever tasted!" },
      { user: "Michael Pollan", rating: 4, comment: "Great farm, but delivery times could improve." },
    ],
  },
  ];
  
  // Continue adding entries up to 40...