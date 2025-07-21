"use client";
import * as React from "react";

export default function PriceRangeSlider() {
    return (
        <div className="flex flex-col gap-1 w-[204px] max-sm:w-full">
            <label className="text-xs text-zinc-500">
                Price Range
            </label>
            <div className="flex flex-col gap-1.5">
                <div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                                "<svg id=\"21:326\" width=\"204\" height=\"15\" viewBox=\"0 0 204 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"price-slider\"> <rect y=\"3\" width=\"204\" height=\"9\" rx=\"4.5\" fill=\"#D0D0D0\"></rect> <rect y=\"3\" width=\"104\" height=\"9\" rx=\"4.5\" fill=\"#104FA1\"></rect> <circle cx=\"7.5\" cy=\"7.5\" r=\"7.5\" fill=\"#104FA1\"></circle> <circle cx=\"7.5\" cy=\"7.5\" r=\"4.5\" fill=\"#EFEFEF\"></circle> <circle cx=\"96.5\" cy=\"7.5\" r=\"7.5\" fill=\"#104FA1\"></circle> <circle cx=\"96.5\" cy=\"7.5\" r=\"4.5\" fill=\"#EFEFEF\"></circle> </svg>",
                        }}
                    />
                </div>
                <div className="flex justify-between items-center">
                    <input
                        type="text"
                        placeholder="min"
                        className="px-1.5 py-1.5 w-16 text-xs rounded-md bg-zinc-100 text-zinc-500"
                    />
                    <input
                        type="text"
                        placeholder="max"
                        className="px-1.5 py-1.5 w-16 text-xs rounded-md bg-zinc-100 text-zinc-500"
                    />
                </div>
            </div>
        </div>
    );
}
