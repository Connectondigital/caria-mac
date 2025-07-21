"use client";
import * as React from "react";

interface CheckboxOption {
    id: string;
    label: string;
    checked: boolean;
}

interface CheckboxGroupProps {
    title: string;
    options: CheckboxOption[];
}

export default function CheckboxGroup({ title, options }: CheckboxGroupProps) {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-1">
                <h4 className="text-base text-zinc-800">
                    {title}
                </h4>
                <div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                                "<svg width=\"275\" height=\"2\" viewBox=\"0 0 275 2\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"filter-divider\"> <path d=\"M1 1L274 1.00002\" stroke=\"#EAEAEA\" stroke-linecap=\"round\"></path> </svg>",
                        }}
                    />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1.5 w-40">
                    {options.map((option) => (
                        <div key={option.id} className="flex gap-2 items-center">
                            <div className="flex justify-center items-center rounded border-solid border-[1.5px] border-neutral-400 h-[21px] w-[21px]">
                                {option.checked && (
                                    <div>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    "<svg width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"checkbox-tick\"> <path d=\"M12.0219 4.42785C11.8592 4.33746 11.6804 4.27999 11.4955 4.25873C11.3107 4.23747 11.1234 4.25283 10.9445 4.30394C10.7656 4.35505 10.5985 4.4409 10.4528 4.5566C10.3071 4.67229 10.1856 4.81556 10.0952 4.97823L7.46516 9.71131L5.95995 8.2061C5.82927 8.0708 5.67295 7.96287 5.50011 7.88863C5.32727 7.81438 5.14137 7.7753 4.95327 7.77366C4.76516 7.77203 4.57862 7.80787 4.40452 7.87911C4.23041 7.95034 4.07224 8.05553 3.93922 8.18854C3.80621 8.32156 3.70102 8.47973 3.62979 8.65383C3.55856 8.82794 3.52271 9.01448 3.52435 9.20259C3.52598 9.39069 3.56506 9.57659 3.63931 9.74943C3.71355 9.92227 3.82148 10.0786 3.95678 10.2093L6.79012 13.0426C7.05787 13.3111 7.41912 13.4584 7.7917 13.4584L7.98791 13.4442C8.20505 13.4139 8.41217 13.3335 8.59298 13.2095C8.77379 13.0855 8.92334 12.9212 9.02987 12.7295L12.5715 6.35452C12.662 6.19192 12.7195 6.01311 12.7408 5.82828C12.7621 5.64346 12.7468 5.45625 12.6957 5.27734C12.6447 5.09843 12.5589 4.93133 12.4433 4.78557C12.3277 4.63982 12.1845 4.51826 12.0219 4.42785Z\" fill=\"#104FA1\"></path> </svg>",
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                            <label className="text-sm text-neutral-600">
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="relative w-1.5 h-[129px]">
                    <div className="absolute w-1.5 bg-zinc-100 h-[129px] rounded-[50px]" />
                    <div className="absolute w-1.5 bg-zinc-400 h-[42px] rounded-[50px]" />
                </div>
            </div>
        </div>
    );
}
