"use client";
import * as React from "react";

export const PropertyCards = () => {
    const cardImages = [
        "/caria-images/9be510e4e597cff6724e1a62f3dce95a847cda61.png",
        "/caria-images/cd89ef9400eede09d5a3ca8a0b746c00facf3339.png",
        "/caria-images/631896956e99ed613c027106cc733beb2df4d70b.png",
        "/caria-images/dfc24ed8a888068b97f268ff6406d12696d4716a.png",
        "/caria-images/b81e74c3d479f43e04a832a6c9b727fb5e0d88c6.png",
        "/caria-images/0dd0cfec8872ed864ffb035892c55c1f14dfd65e.png"
    ];

    return (
        <section className="grid absolute grid-cols-3 gap-6 left-[98px] top-[589px] w-[1243px] max-md:grid-cols-2 max-md:left-[5%] max-md:w-[90%] max-sm:grid-cols-1 max-sm:top-[650px]">
            {cardImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="card"
                    className="object-cover rounded-md h-[258px] w-full max-md:h-[200px] max-sm:h-[200px]"
                />
            ))}
        </section>
    );
};
