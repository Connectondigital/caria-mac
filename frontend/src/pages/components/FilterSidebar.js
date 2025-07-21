"use client";
import * as React from "react";

export const FilterSidebar = () => {
  const [priceRange, setPriceRange] = React.useState({ min: 4000, max: 8000 });
  const [filters, setFilters] = React.useState({
    category1: [false, true, true, false, false],
    category2: [false, true, true, false, false],
    category3: [false, true, true, false, false],
  });

  const handleFilterChange = (category, index) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].map((item, i) => i === index ? !item : item)
    }));
  };

  const handlePriceChange = (type, value) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <aside className="flex flex-col gap-4 w-[293px] max-md:order-2 max-md:w-full">
      <div className="box-border relative px-2.5 py-3.5 bg-white rounded-xl border border-solid border-zinc-100 h-[731px]">
        <h2 className="mb-14 text-2xl text-zinc-800">
          Filter
        </h2>

        <div className="flex flex-col gap-4">
          {/* Price Range Filter */}
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-1">
              <h3 className="text-base text-zinc-800">
                Price Range
              </h3>
              <hr className="border-t border-gray-200" />
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="relative h-[30px] w-[273px]">
                <div className="absolute h-[15px] top-[15px] w-[273px]">
                  <div className="absolute top-1 bg-zinc-100 h-[7px] rounded-[50px] w-[273px]" />
                  <div
                    className="absolute top-1 bg-blue-800 h-[7px] rounded-[50px]"
                    style={{
                      left: `${(priceRange.min / 1000000) * 273}px`,
                      width: `${((priceRange.max - priceRange.min) / 1000000) * 273}px`
                    }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    value={priceRange.min}
                    onChange={(e) => handlePriceChange('min', Number(e.target.value))}
                    className="absolute top-0 w-full h-[15px] opacity-0 cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    value={priceRange.max}
                    onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                    className="absolute top-0 w-full h-[15px] opacity-0 cursor-pointer"
                  />
                </div>
                <div className="absolute top-0 left-0 text-xs text-zinc-500">
                  $0
                </div>
                <div className="absolute top-0 right-0 text-xs text-zinc-500">
                  $1.000.000
                </div>
              </div>

              <div className="flex gap-2 justify-center items-end">
                <div className="flex flex-col w-[95px]">
                  <label className="mb-1 text-sm text-zinc-500">
                    Min
                  </label>
                  <input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) => handlePriceChange('min', Number(e.target.value))}
                    className="flex items-center px-1.5 py-2 rounded-md border border-solid border-neutral-200 text-sm text-zinc-800"
                  />
                </div>
                <div className="flex flex-col w-[95px]">
                  <label className="mb-1 text-sm text-zinc-500">
                    Max
                  </label>
                  <input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                    className="flex items-center px-1.5 py-2 rounded-md border border-solid border-neutral-200 text-sm text-zinc-800"
                  />
                </div>
                <button className="flex bg-blue-800 rounded-md w-[69px] hover:bg-blue-700 transition-colors">
                  <div className="flex justify-center items-center px-6 pt-2 pb-1.5 rounded-md w-[69px]">
                    <span className="text-sm font-bold text-slate-50">
                      Ara
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Filter sections */}
          {(['category1', 'category2', 'category3']).map((category, sectionIndex) => (
            <div key={category} className="flex flex-col gap-2.5">
              <div className="flex flex-col gap-1">
                <h3 className="text-base text-zinc-800">
                  Lorem İpsum Dolar
                </h3>
                <hr className="border-t border-gray-200" />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1.5 w-40">
                  {filters[category].map((isChecked, index) => (
                    <label key={index} className="flex gap-2 items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleFilterChange(category, index)}
                        className="w-[21px] h-[21px] rounded border-[1.5px] border-neutral-400 accent-blue-800"
                      />
                      <span className="text-sm text-neutral-600">
                        Lorem ipsum dolor sit
                      </span>
                    </label>
                  ))}
                </div>

                <div className="relative w-1.5 h-[129px]">
                  <div className="absolute w-1.5 bg-zinc-100 h-[129px] rounded-[50px]" />
                  <div className="absolute top-0 w-1.5 bg-zinc-400 h-[42px] rounded-[50px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
