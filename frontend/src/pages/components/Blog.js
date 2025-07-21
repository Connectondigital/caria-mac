import blogImg from "../../assets/images/blog-img.png";

export default function BlogSection() {
    return (
        <section className="flex flex-col max-w-5xl mx-auto px-5 md:px-10 mt-16 max-md:mt-10">
            <div className="flex flex-col md:flex-row items-stretch gap-8">

                {/* Sol görsel */}
                <div className="flex-shrink-0 w-full md:w-1/2">
                    <img
                        src={blogImg}
                        alt="Northern Cyprus Real Estate"
                        className="w-full h-full rounded-lg object-cover"
                        style={{ minHeight: '400px' }} // minimum yükseklik ekleyebilirsin
                    />
                </div>

                {/* Sağ metin */}
                <div className="w-full md:w-1/2 text-gray-900 dark:text-white flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4 max-md:text-3xl text-white">
                        Northern Cyprus Real Estate
                    </h2>
                    <p className="text-base leading-relaxed whitespace-pre-line">
                        With its stunning coastline, growing tourism sector, and attractive property prices, Northern Cyprus is becoming a hotspot for property investment. Known for its year-round mild climate and breathtaking Mediterranean views, the region attracts both local and international buyers looking to secure their own piece of paradise. The island’s unique cultural blend, combining Turkish and Greek influences, adds to its charm and appeal.
                        {"\n\n"}
                        One of the key drivers behind the booming property market in Northern Cyprus is the influx of foreign investors, particularly from Europe and the Middle East. The comparatively low cost of living, coupled with a favorable tax environment, makes it an attractive choice for retirees and digital nomads alike. In addition, the government has introduced various incentives to encourage property purchases, such as residency permits for buyers and simplified legal procedures.
                    </p>
                </div>
            </div>
        </section>
    );
}
