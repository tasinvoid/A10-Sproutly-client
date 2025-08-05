// SoilGuide.jsx
import React from "react";

const SoilGuide = () => {
  return (
    <div className="bg-gray rounded-lg shadow-xl p-8 max-w-[1500px] mx-auto my-8">
      <h2 className="text-4xl font-extrabold text-green-400 mb-6 text-center">
        Understanding Your Soil
      </h2>
      <p className="text-lg text-green-900 mb-8 leading-relaxed">
        Healthy soil is the foundation of a thriving garden. It provides
        essential nutrients, water, and anchorage for plant roots, transforming
        your gardening efforts into abundant yields.
      </p>
      <div className="flex flex-col lg:flex-row">
        <section className="mb-10 p-6 bg-gray rounded-lg shadow-inner">
          <h3 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-green-300 pb-2">
            Soil Types
          </h3>
          <ul className="list-disc pl-5 text-green-900 space-y-2 text-lg">
            <li>
              <strong>Sandy Soil:</strong> Drains quickly, warms fast, but
              struggles with nutrient retention. Great for root vegetables, but
              needs frequent watering and organic matter.
            </li>
            <li>
              <strong>Clay Soil:</strong> Rich in nutrients and retains water
              well, but can be heavy and compact easily, leading to poor
              drainage. Improve with ample organic matter.
            </li>
            <li>
              <strong>Loamy Soil:</strong> The gardener's dream! A balanced mix
              of sand, silt, and clay, offering excellent drainage, aeration,
              and nutrient retention.
            </li>
            <li>
              <strong>Siltty Soil:</strong> Fine particles, feels smooth,
              retains moisture well, but can compact and impede drainage if not
              managed.
            </li>
          </ul>
          <p className="mt-5 text-gray-700 text-base italic">
            Knowing your soil type is the crucial first step to understanding
            its needs and improving its quality.
          </p>
        </section>

        <section className="mb-10 p-6 bg-gray rounded-lg shadow-inner">
          <h3 className="text-3xl font-bold text-green-700 mb-4 border-b-2 border-blue-300 pb-2">
            Improving Soil Health
          </h3>
          <div className="space-y-6 text-lg text-green-900">
            <div>
              <h4 className="text-2xl font-semibold text-green-600 mb-2">
                1. Enrich with Organic Matter
              </h4>
              <p>
                Compost, well-rotted manure, and shredded leaves are your best
                friends. These additions dramatically improve soil structure,
                boost water retention in sandy soils, enhance drainage in heavy
                clay, and provide a feast for beneficial microbes.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-green-600 mb-2">
                2. Get a Soil Test
              </h4>
              <p>
                A professional soil test provides invaluable insights into your
                soil's nutrient levels and pH. This scientific approach helps
                you apply precise amendments, preventing costly
                over-fertilization or frustrating nutrient deficiencies.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-green-600 mb-2">
                3. Minimize Tillage
              </h4>
              <p>
                Excessive digging and tilling can disrupt the delicate soil
                structure and harm the vital microbial life beneath the surface.
                Embrace no-till or minimal-till practices to cultivate a
                healthier, more resilient soil ecosystem.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SoilGuide;
