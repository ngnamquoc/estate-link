# Estate Link

A modern real estate platform built with Next.js and Firebase, allowing users to browse, list, and manage property listings.

## Features

- 🔐 User Authentication (Email/Password & OAuth)
- 👤 User Profile Management
- 🏠 Property Listings
- 🔍 Property Search
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 15
- **Authentication:** Firebase Auth
- **Database:** Firebase Firestore
- **Styling:** Tailwind CSS
- **UI Components:** React Icons, React Toastify
- **Package Manager:** pnpm

## Prerequisites

- Node.js 18+ 
- pnpm
- Firebase account and project

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ngnamquoc/estate-link.git
   cd estate-link
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   pnpm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
