import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// First Hello world --> (Basic componets)
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1> Home Page </h1>

      <div>
        <h3>Welcome to MultiDeal!</h3>
      </div>

      {/* Using componets multiple times */}
      <User />
      <User />
      <User />
      <User />
    </main>
  );
}


// Another componnets example
const User = () => {
  return (
    <div>
      <h1> Good morning User!!!</h1>
    </div>
  );
};
