"use client";

import React from "react";

const Footer = () => {
  const handleSave = () => {};

  return (
    <div className="h-[50px] w-full border-[1px] border-gray-200">
      <div className="grid grid-cols-12 items-center h-full">
        <div className="col-span-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              Print Barcode
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r rounded-r-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              F5
            </button>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex gap-3 justify-around">
            <div
              className="inline-flex rounded-md shadow-sm bg-[#3B82F6] text-white"
              role="group"
              onClick={handleSave}
            >
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium rounded-l-lg border-r-[1px] border-r-gray-200"
              >
                Save & New
              </button>
              <button
                type="button"
                className="px-2 text-sm font-medium focus:z-10"
              >
                <div className="flex gap-1 items-center">
                  <img src="/icons/windows.svg" />
                  <span>S</span>
                </div>
              </button>
            </div>
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                Print Barcode
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r rounded-r-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                F5
              </button>
            </div>
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                Print Barcode
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r rounded-r-lg border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                F5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
