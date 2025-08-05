import React from "react";
import {
  MdOutlineInsertDriveFile,
  MdOutlineAddCircleOutline,
  MdOutlineInfo,
} from "react-icons/md";
import { Link } from "react-router";

const NoDataFound = ({
  icon: Icon = MdOutlineInsertDriveFile, // Default icon
  title = "No Data Available",
  description = "It looks like there's no data to display here yet. To get started, please add some new entries.",
  primaryButtonText = "Enter Data",
  onPrimaryButtonClick,
  secondaryButtonText, // Optional secondary button text
  onSecondaryButtonClick, // Optional secondary button click handler
  illustration: IllustrationComponent, // Optional component for an illustration
}) => {
  return (
    <div
      className="
      flex flex-col items-center justify-center
      p-8 sm:p-10 md:p-12
      max-w-md mx-auto
      bg-gradient-to-br from-green-50 to-green-100
      rounded-2xl shadow-xl border border-green-200
      text-center font-sans
      transform hover:scale-105 transition-transform duration-300 ease-out
      relative overflow-hidden
    "
    >
      {/* Background patterns or subtle design elements */}
      <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>

      {IllustrationComponent ? (
        <div className="mb-6">
          <IllustrationComponent className="w-24 h-24 text-green-400" />
        </div>
      ) : (
        <Icon className="w-16 h-16 text-green-500 mb-6" />
      )}

      <h2 className="text-3xl font-bold text-green-800 mb-3 leading-tight">
        {title}
      </h2>

      <p className="text-green-700 text-base sm:text-lg mb-8 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        {onPrimaryButtonClick && primaryButtonText && (
          <button
            onClick={onPrimaryButtonClick}
            className="
              flex items-center justify-center
              bg-green-600 text-white
              py-3 px-8 rounded-full
              text-lg font-medium tracking-wide
              shadow-md
              hover:bg-green-700 hover:shadow-lg
              focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-70
              transition duration-300 ease-in-out transform hover:-translate-y-0.5
              w-full sm:w-auto
            "
          >
            <MdOutlineAddCircleOutline className="mr-2 text-xl" />{" "}
            {primaryButtonText}
          </button>
        )}

        <Link to={'/shareTip'}><button className="btn btn-success">Add Tips</button></Link>
      </div>
    </div>
  );
};

export default NoDataFound;
