"use client";

import * as React from "react";
import { PropertyCard } from "./PropertyCards";

export function PropertyGrid() {
    const properties = [
        {
            title: "Exclusive Offer",
            description: "Lorem ipsum dolor sit amet consectetur. Et turpis sodales suspendisse non vel sit.",
            backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cccb82a50e543df9f1ba2d0432410d1e8c085a6?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            readMoreIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e59e277d0096be6d48fd379ca24fa29a96a58abb?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2"
        },
        {
            title: "Stylish Homes",
            description: "Lorem ipsum dolor sit amet consectetur. Et turpis sodales suspendisse non vel sit.",
            backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cccb82a50e543df9f1ba2d0432410d1e8c085a6?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            readMoreIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47d7607ef847d0ab6846fe2dd0b7d8f2799e005?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2"
        },
        {
            title: "Beach Front",
            description: "Lorem ipsum dolor sit amet consectetur. Et turpis sodales suspendisse non vel sit.",
            backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cccb82a50e543df9f1ba2d0432410d1e8c085a6?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            readMoreIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b47d7607ef847d0ab6846fe2dd0b7d8f2799e005?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2"
        },
        {
            title: "Romantic Gateway",
            description: "Lorem ipsum dolor sit amet consectetur. Et turpis sodales suspendisse non vel sit.",
            backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cccb82a50e543df9f1ba2d0432410d1e8c085a6?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            readMoreIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b55517b9b639a2b0b883e27ce60e049c904ac980?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2"
        },
        {
            title: "Special Offer",
            description: "Lorem ipsum dolor sit amet consectetur. Et turpis sodales suspendisse non vel sit.",
            backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cccb82a50e543df9f1ba2d0432410d1e8c085a6?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            readMoreIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff7fcbf67f3fc4efaa1d852b84cbcaafbcd7cd13?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2"
        },
        {
            title: "New Addition",
            description: "Lorem ipsum dolor sit amet consectetur. Et turpis sodales suspendisse non vel sit.",
            backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cccb82a50e543df9f1ba2d0432410d1e8c085a6?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2",
            readMoreIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff7fcbf67f3fc4efaa1d852b84cbcaafbcd7cd13?placeholderIfAbsent=true&apiKey=b936db41593d4a54a664e08e84e404b2"
        }
    ];

    return (
        <section className="flex flex-wrap gap-6 items-start mt-16 w-full max-w-[1243px] max-md:mt-10 max-md:max-w-full">
            {properties.map((property, index) => (
                <PropertyCard
                    key={index}
                    title={property.title}
                    description={property.description}
                    backgroundImage={property.backgroundImage}
                    readMoreIcon={property.readMoreIcon}
                />
            ))}
        </section>
    );
}
