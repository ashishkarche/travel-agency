import { useEffect, useState } from "react";
import axios from "axios";
import PackageCard from "../components/PackageCard";
import SeoHead from "../components/SeoHead";

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/packages")
      .then(res => {
        const data = res.data;

        // Ensure result becomes an array ALWAYS
        const normalized = Array.isArray(data)
          ? data
          : Array.isArray(data?.packages)
            ? data.packages
            : [];

        setPackages(normalized.length > 0 ? normalized : fallbackData);
      })
      .catch(() => setPackages(fallbackData))
      .finally(() => setLoading(false));
  }, []);

  const fallbackData = [
    {
      title: "Pune → Mumbai One-Day Trip",
      slug: "pune-to-mumbai",
      price: 2500,
      short: "Drop/pickup, guided Mumbai Darshan, meals optional",
      image: "/assets/pune-mumbai.webp"
    },
    {
      title: "Pune → Lonavala Sightseeing",
      slug: "pune-to-lonavala",
      price: 1800,
      short: "Scenic stopovers, Bhushi Dam, Tiger's Leap",
      image: "/assets/lonavala.webp"
    },
    {
      title: "Mumbai Darshan Package",
      slug: "mumbai-darshan",
      price: 2600,
      short: "Key Mumbai spots with experienced driver-guide",
      image: "/assets/mumbai.webp"
    },
    {
      title: "Custom Outstation Cab",
      slug: "custom-cab",
      price: 0,
      short: "Customizable outstation cab services from Pune",
      image: "/assets/custom.webp"
    }
  ];

  return (
    <>
      <SeoHead
        title="Packages | Shravni Tourist & Travels"
        description="Browse Pune to Mumbai and Lonavala packages."
        url="https://yourdomain.com/packages"
      />

      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-6">Our Popular Packages</h2>

        {loading && <p className="text-gray-500">Loading packages...</p>}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.slug} pkg={p} />
          ))}
        </div>
      </section>
    </>
  );
}
