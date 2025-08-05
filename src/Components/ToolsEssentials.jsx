// ToolsEssentials.jsx
import React from "react";

const ToolsEssentials = () => {
  return (
    <div>
      <h2 className="text-2xl lg:text-4xl font-extrabold text-green-400 mb-6 text-center">
        Essential Gardening Tools & Gear
      </h2>
      <p className="text-sm lg:text-lg text-gray-300 mb-8 leading-relaxed">
        Equipping yourself with the right tools makes gardening easier, more
        efficient, and much more enjoyable. Here's a rundown of the must-have
        items for every gardener.
      </p>
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-[1500px] mx-auto my-8 border border-gray-700 gap-5 flex flex-col lg:flex-row ">
        <section className="mb-10 p-6 bg-gray-700 rounded-lg shadow-inner border border-gray-600">
          <h3 className="text-3xl font-bold text-green-300 mb-4 border-b-2 border-gray-500 pb-2">
            Hand Tools for Everyday Tasks
          </h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2 text-lg">
            <li>
              <strong>Hand Trowel:</strong> Indispensable for digging small
              holes, transplanting seedlings, and breaking up clumps of soil.
              Look for a sturdy stainless steel one.
            </li>
            <li>
              <strong>Pruning Shears (Secateurs):</strong> Essential for clean
              cuts on small branches, deadheading flowers, and trimming herbs.
              Bypass pruners are best for living plants.
            </li>
            <li>
              <strong>Weeding Fork:</strong> Perfect for tackling stubborn weeds
              by loosening their roots without disturbing surrounding plants.
            </li>
            <li>
              <strong>Hand Cultivator:</strong> Great for aerating soil, mixing
              in amendments, and light weeding between plants.
            </li>
          </ul>
        </section>

        <section className="mb-10 p-6 bg-gray-700 rounded-lg shadow-inner border border-gray-600">
          <h3 className="text-3xl font-bold text-green-300 mb-4 border-b-2 border-gray-500 pb-2">
            Larger Tools & Equipment
          </h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2 text-lg">
            <li>
              <strong>Shovel or Spade:</strong> For digging larger holes,
              turning soil, and moving materials. A spade (flat edge) is good
              for edging, a shovel (pointed) for digging.
            </li>
            <li>
              <strong>Garden Rake:</strong> Ideal for leveling soil, clearing
              debris, and spreading mulch.
            </li>
            <li>
              <strong>Garden Hoe:</strong> Highly effective for weeding larger
              areas and preparing garden beds.
            </li>
            <li>
              <strong>Watering Can or Hose:</strong> Essential for consistent
              and adequate watering. Choose a watering can with a 'rose'
              attachment for gentle watering of seedlings.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ToolsEssentials;
