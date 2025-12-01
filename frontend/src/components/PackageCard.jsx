import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ImageWithSkeleton from "./ImageWithSkeleton"; // import skeleton image component

export default function PackageCard({ pkg }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 bg-white">
      
      {/* Image with overlay */}
      <div className="relative overflow-hidden rounded-t-2xl h-52">
        <ImageWithSkeleton
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Price Badge */}
      <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
        {pkg.price === 0 ? "Custom Pricing" : `₹${pkg.price}`}
      </span>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {pkg.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{pkg.short}</p>

        {/* CTA Button */}
        <Link
          to={`/packages/${pkg.slug}`}
          className="inline-flex items-center gap-2 px-5 py-2 mt-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          View Details <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </article>
  );
}
