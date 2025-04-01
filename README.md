
# Zaria City Portal

A **SvelteKit-based** web platform that serves as an informational and interactive portal for the city of **Zaria**. This application showcases the city's landmarks, culture, and history through various features, including an image gallery, business directory, and informational sections.

## Purpose

The Zaria City Portal aims to:

* **Create a visual archive** of the city through a community-contributed gallery
* **Support local businesses** through a comprehensive business directory
* **Provide residents and visitors** with up-to-date information about events and news

## Features

### Gallery System

* Browse beautiful images of Zaria in a responsive masonry grid layout
* View featured images in an auto-playing carousel
* Submit new images to the gallery through a user-friendly form

### Business Directory

* Comprehensive listing of local businesses categorized by type
* Business registration system for local entrepreneurs
* Detailed business profiles with contact information and images

## Technology Stack

* **Frontend**: SvelteKit, Tailwind CSS
* **Backend**: SvelteKit server endpoints
* **Storage**: Amazon S3 (image storage)
* **Database**: PocketBase

## Getting Started

### Prerequisites

* **Node.js** (v16 or later)
* **npm** or **yarn**
* **PocketBase instance** (for development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Abdulmumin1/zaria.git  
   cd zaria
   ```

2. **Install dependencies**

   ```bash
   npm install  
   # or  
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   PUBLIC_POCKETBASE_URL=your_pocketbase_url  
   S3_BUCKET_NAME=your_s3_bucket_name  
   S3_REGION=your_s3_region  
   S3_ACCESS_KEY=your_s3_access_key  
   S3_SECRET_KEY=your_s3_secret_key  
   ```

4. **Start the development server**

   ```bash
   npm run dev  
   # or  
   yarn dev
   ```

   Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

### Deployment

The application can be deployed to any platform that supports SvelteKit applications, such as **Vercel**, **Netlify**, or a traditional server setup.

**Build for production**

```bash
npm run build  
# or  
yarn build
```

## Contributing

Contributions are welcome! Please feel free to submit a **Pull Request**.

1. **Fork the repository**
2. **Create your feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**

   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**

   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

* The people of Zaria for their contributions to the gallery
* All local businesses that have registered on the platform
* Contributors and maintainers of this project

