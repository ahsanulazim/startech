# Star Tech Clone - Frontend

This project is a high-fidelity frontend clone of **Star Tech**, a renowned computer and computer parts store in Bangladesh. The application replicates the core shopping experience with a modern, responsive, and performance-optimized user interface.

## 🚀 Features

- **Modern E-commerce UI**: A clean and responsive interface inspired by Star Tech's original design.
- **Product Showcase**: Dynamic product listings with rich details and specifications.
- **Interactive Carousels**: Smooth product sliders and banner carousels using `react-slick` and `react-multi-carousel`.
- **Authentication**: Secure user authentication powered by **Firebase**.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices using **Tailwind CSS 4** and **DaisyUI**.
- **Loading States**: Seamless loading experiences with `react-spinners`.

## 🛠️ Tech Stack

This project is built using the latest web technologies to ensure performance and scalability:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: 
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [DaisyUI](https://daisyui.com/)
- **Backend / Auth**: [Firebase](https://firebase.google.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Components**:
  - `react-multi-carousel` & `react-slick` for sliders
  - `react-spinners` for loading indicators

## 🏃‍♂️ Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ahsanulazim/startech
   cd startech-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up Environment Variables:**
   
   Create a `.env.local` file in the root directory and add your Firebase configuration:
   
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components.
- `public/`: Static assets.
- `styles/`: Global styles and Tailwind configuration.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please feel free to fork the repository and submit a pull request.

## 📜 License

This project is for educational purposes as a clone of the original Star Tech website.

---

*Note: This is a clone project created for learning and demonstration purposes and is not affiliated with the official Star Tech & Engineering Ltd.*
