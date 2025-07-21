"use client";
import * as React from "react";

interface PropertyCardProps {
    title: string;
    description: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    price: string;
    imageUrl: string;
}

const LocationIcon = () => (
    <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0652 26.355C13.848 26.9591 14.6643 27.5113 15.5 28.0503C16.3375 27.5185 17.1499 26.9529 17.9348 26.355C19.2433 25.3499 20.4747 24.2601 21.6199 23.0937C24.2601 20.393 27.125 16.4781 27.125 12.0833C27.125 10.6552 26.8243 9.24108 26.2401 7.92166C25.6559 6.60224 24.7996 5.40339 23.7201 4.39356C22.6406 3.38372 21.3591 2.58267 19.9487 2.03615C18.5383 1.48963 17.0266 1.20834 15.5 1.20834C13.9734 1.20834 12.4617 1.48963 11.0513 2.03615C9.64089 2.58267 8.35936 3.38372 7.27988 4.39356C6.2004 5.40339 5.34411 6.60224 4.7599 7.92166C4.17569 9.24108 3.875 10.6552 3.875 12.0833C3.875 16.4781 6.73992 20.3918 9.38008 23.0937C10.5253 24.2605 11.7567 25.3495 13.0652 26.355ZM15.5 16.0104C14.3866 16.0104 13.3189 15.5967 12.5316 14.8602C11.7444 14.1237 11.3021 13.1249 11.3021 12.0833C11.3021 11.0418 11.7444 10.0429 12.5316 9.30648C13.3189 8.57 14.3866 8.15626 15.5 8.15626C16.6134 8.15626 17.6811 8.57 18.4684 9.30648C19.2556 10.0429 19.6979 11.0418 19.6979 12.0833C19.6979 13.1249 19.2556 14.1237 18.4684 14.8602C17.6811 15.5967 16.6134 16.0104 15.5 16.0104Z" fill="#4D4D4D"/>
    </svg>
);

const BedroomIcon = () => (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.1875 15.5H5.8125C4.78479 15.5 3.79916 15.9083 3.07246 16.635C2.34576 17.3617 1.9375 18.3473 1.9375 19.375V21.3125C1.9375 21.5694 2.03956 21.8158 2.22124 21.9975C2.40292 22.1792 2.64932 22.2812 2.90625 22.2812H3.875V23.25C3.875 23.7639 4.07913 24.2567 4.44248 24.62C4.80583 24.9834 5.29864 25.1875 5.8125 25.1875C6.32636 25.1875 6.81917 24.9834 7.18252 24.62C7.54587 24.2567 7.75 23.7639 7.75 23.25V22.2812H23.25V23.25C23.25 23.7639 23.4541 24.2567 23.8175 24.62C24.1808 24.9834 24.6736 25.1875 25.1875 25.1875C25.7014 25.1875 26.1942 24.9834 26.5575 24.62C26.9209 24.2567 27.125 23.7639 27.125 23.25V22.2812H28.0938C28.3507 22.2812 28.5971 22.1792 28.7788 21.9975C28.9604 21.8158 29.0625 21.5694 29.0625 21.3125V19.375C29.0625 18.3473 28.6542 17.3617 27.9275 16.635C27.2008 15.9083 26.2152 15.5 25.1875 15.5ZM8.71875 9.6875H13.5625C13.8194 9.6875 14.0658 9.78956 14.2475 9.97124C14.4292 10.1529 14.5312 10.3993 14.5312 10.6562C14.5312 10.9132 14.4292 11.1596 14.2475 11.3413C14.0658 11.5229 13.8194 11.625 13.5625 11.625H8.71875C8.46182 11.625 8.21542 11.5229 8.03374 11.3413C7.85206 11.1596 7.75 10.9132 7.75 10.6562C7.75 10.3993 7.85206 10.1529 8.03374 9.97124C8.21542 9.78956 8.46182 9.6875 8.71875 9.6875ZM17.4375 9.6875H22.2812C22.5382 9.6875 22.7846 9.78956 22.9663 9.97124C23.1479 10.1529 23.25 10.3993 23.25 10.6562C23.25 10.9132 23.1479 11.1596 22.9663 11.3413C22.7846 11.5229 22.5382 11.625 22.2812 11.625H17.4375C17.1806 11.625 16.9342 11.5229 16.7525 11.3413C16.5708 11.1596 16.4688 10.9132 16.4688 10.6562C16.4688 10.3993 16.5708 10.1529 16.7525 9.97124C16.9342 9.78956 17.1806 9.6875 17.4375 9.6875ZM6.78997 13.5625H24.21C24.7506 13.5625 25.1875 13.1256 25.1875 12.585V7.75C25.1875 7.23614 24.9834 6.74333 24.62 6.37998C24.2567 6.01663 23.7639 5.8125 23.25 5.8125H7.75C7.23614 5.8125 6.74333 6.01663 6.37998 6.37998C6.01663 6.74333 5.8125 7.23614 5.8125 7.75V12.585C5.8125 13.1256 6.24941 13.5625 6.78997 13.5625Z" fill="#555555"/>
    </svg>
);

const BathroomIcon = () => (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.8481 17.875H24.247V7.49837C24.2458 6.30584 23.7709 5.16246 22.9265 4.31913C22.082 3.4758 20.9371 3.00139 19.7427 3C17.6037 3 15.816 4.49975 15.3595 6.5H13.7374C13.271 6.5 12.8236 6.68502 12.4938 7.01436C12.164 7.34369 11.9787 7.79037 11.9787 8.25612C11.9787 8.73562 12.3695 9.125 12.8497 9.125H18.9952C19.226 9.12477 19.4472 9.03315 19.6103 8.87026C19.7734 8.70736 19.8652 8.48649 19.8654 8.25612C19.8655 8.02555 19.8202 7.79721 19.7319 7.58415C19.6436 7.37109 19.5141 7.17749 19.3509 7.01441C19.1876 6.85133 18.9938 6.72196 18.7805 6.63369C18.5671 6.54543 18.3385 6.5 18.1076 6.5H17.1857C17.587 5.478 18.579 4.75 19.7427 4.75C20.4724 4.75093 21.1718 5.04081 21.6877 5.55606C22.2035 6.0713 22.4936 6.76983 22.4943 7.49837V17.875H6.12057C5.82056 17.8833 5.53562 18.0081 5.32636 18.2229C5.11709 18.4377 5 18.7255 5 19.0252C5 19.3249 5.11709 19.6127 5.32636 19.8275C5.53562 20.0423 5.82056 20.1671 6.12057 20.1754H6.72084V22.1249C6.72174 23.2931 7.05066 24.4377 7.67025 25.4286C8.28985 26.4196 9.1753 27.2172 10.2261 27.731V29.25C10.2261 29.7141 10.4107 30.1592 10.7394 30.4874C11.0681 30.8156 11.5138 31 11.9787 31C12.4435 31 12.8893 30.8156 13.218 30.4874C13.5466 30.1592 13.7313 29.7141 13.7313 29.25V28.375H17.9884C18.0304 28.375 18.0716 28.3698 18.1128 28.3689V29.25C18.1128 29.7141 18.2975 30.1592 18.6261 30.4874C18.9548 30.8156 19.4006 31 19.8654 31C20.3302 31 20.776 30.8156 21.1047 30.4874C21.4334 30.1592 21.618 29.7141 21.618 29.25V27.2104C22.4308 26.6337 23.0936 25.8711 23.5509 24.9864C24.0083 24.1017 24.2469 23.1205 24.247 22.1249V20.1754H24.8481C25.1536 20.1754 25.4466 20.0542 25.6626 19.8385C25.8786 19.6228 26 19.3302 26 19.0252C26 18.7201 25.8786 18.4276 25.6626 18.2119C25.4466 17.9962 25.1536 17.875 24.8481 17.875Z" fill="#555555"/>
    </svg>
);

const AreaIcon = () => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.375 27.7083C4.375 28.4819 4.68229 29.2237 5.22927 29.7707C5.77625 30.3177 6.51812 30.625 7.29167 30.625H27.7083C28.4819 30.625 29.2237 30.3177 29.7707 29.7707C30.3177 29.2237 30.625 28.4819 30.625 27.7083V7.29167C30.625 6.51812 30.3177 5.77625 29.7707 5.22927C29.2237 4.68229 28.4819 4.375 27.7083 4.375H7.29167C6.51812 4.375 5.77625 4.68229 5.22927 5.22927C4.68229 5.77625 4.375 6.51812 4.375 7.29167V27.7083ZM17.5 8.75H26.25V17.5H23.3333V11.6667H17.5V8.75ZM8.75 17.5H11.6667V23.3333H17.5V26.25H8.75V17.5Z" fill="#555555"/>
    </svg>
);

const HeartIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9999 19.5708L9.67075 18.3608C4.94992 14.08 1.83325 11.2475 1.83325 7.79167C1.83325 4.95917 4.05159 2.75 6.87492 2.75C8.46992 2.75 10.0008 3.4925 10.9999 4.65667C11.9991 3.4925 13.5299 2.75 15.1249 2.75C17.9483 2.75 20.1666 4.95917 20.1666 7.79167C20.1666 11.2475 17.0499 14.08 12.3291 18.3608L10.9999 19.5708Z" fill="#B1B1B1"/>
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.31002 6.71002C9.21732 6.80254 9.14377 6.91242 9.09359 7.0334C9.04341 7.15437 9.01758 7.28405 9.01758 7.41502C9.01758 7.54599 9.04341 7.67567 9.09359 7.79665C9.14377 7.91762 9.21732 8.02751 9.31002 8.12002L13.19 12L9.31002 15.88C9.12304 16.067 9.018 16.3206 9.018 16.585C9.018 16.8494 9.12304 17.103 9.31002 17.29C9.497 17.477 9.7506 17.582 10.015 17.582C10.2794 17.582 10.533 17.477 10.72 17.29L15.31 12.7C15.4027 12.6075 15.4763 12.4976 15.5265 12.3766C15.5766 12.2557 15.6025 12.126 15.6025 11.995C15.6025 11.8641 15.5766 11.7344 15.5265 11.6134C15.4763 11.4924 15.4027 11.3825 15.31 11.29L10.72 6.70002C10.34 6.32002 9.70002 6.32002 9.31002 6.71002Z" fill="white"/>
    </svg>
);

export const PropertyCard: React.FC<PropertyCardProps> = ({
                                                              title,
                                                              description,
                                                              location,
                                                              bedrooms,
                                                              bathrooms,
                                                              area,
                                                              price,
                                                              imageUrl,
                                                          }) => {
    const [isFavorited, setIsFavorited] = React.useState(false);

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
    };

    const handleDetailsClick = () => {
        console.log('View details for property:', title);
    };

    return (
        <article className="box-border relative px-2.5 py-3 bg-white rounded-3xl shadow-xl h-[321px] max-md:flex-col max-md:p-5 max-md:h-auto">
            <img
                src={imageUrl}
                alt="Property"
                className="absolute left-2.5 top-3 rounded-xl h-[297px] w-[351px] max-md:relative max-md:top-0 max-md:left-0 max-md:mb-5 max-md:w-full max-md:h-[200px]"
            />

            <div className="flex absolute top-2.5 flex-col gap-4 left-[381px] w-[436px] max-md:relative max-md:top-0 max-md:left-0 max-md:mb-5 max-md:w-full">
                <h3 className="text-xl text-zinc-800">
                    {title}
                </h3>
                <p className="text-sm text-zinc-500">
                    {description}
                </p>
            </div>

            <div className="flex absolute gap-4 justify-center items-center h-16 left-[381px] top-[134px] w-[298px] max-md:relative max-md:top-0 max-md:left-0 max-md:mb-5 max-md:w-full max-sm:flex-wrap max-sm:gap-2.5">
                <div className="flex flex-col gap-2.5 items-center max-sm:min-w-[60px]">
                    <LocationIcon />
                    <span className="text-base text-neutral-600">
            {location}
          </span>
                </div>

                <div className="w-px h-[42px] bg-gray-300" />

                <div className="flex flex-col gap-2.5 items-center max-sm:min-w-[60px]">
                    <BedroomIcon />
                    <span className="text-base text-neutral-600">
            {bedrooms}
          </span>
                </div>

                <div className="w-px h-[42px] bg-gray-300" />

                <div className="flex flex-col gap-2.5 items-center max-sm:min-w-[60px]">
                    <BathroomIcon />
                    <span className="text-base text-neutral-600">
            {bathrooms}
          </span>
                </div>

                <div className="w-px h-[42px] bg-gray-300" />

                <div className="flex flex-col gap-2.5 items-center max-sm:min-w-[60px]">
                    <AreaIcon />
                    <div className="text-base text-neutral-600">
                        {area}<span className="text-xs">2</span>
                    </div>
                </div>
            </div>

            <hr className="absolute left-[382px] top-[226px] w-[536px] border-gray-300 max-md:relative max-md:left-0 max-md:top-0 max-md:w-full max-md:mb-4" />

            <div className="flex absolute flex-col gap-2 left-[381px] top-[243px] w-[125px] max-md:relative max-md:top-0 max-md:left-0 max-md:mb-5 max-md:w-full">
        <span className="text-xs text-zinc-500">
          From
        </span>
                <span className="text-3xl text-zinc-800">
          {price}
        </span>
            </div>

            <button
                onClick={handleDetailsClick}
                className="flex absolute justify-center items-center px-6 py-3 bg-blue-800 rounded-xl h-[46px] right-[29px] top-[253px] w-[123px] max-md:relative max-md:top-0 max-md:right-auto max-md:mb-2.5 max-md:w-full hover:bg-blue-700 transition-colors"
            >
                <div className="flex gap-2 justify-center items-center">
          <span className="text-base text-white">
            Details
          </span>
                    <ArrowRightIcon />
                </div>
            </button>

            <button
                onClick={handleFavoriteClick}
                className={`flex absolute top-2.5 justify-center items-center p-3.5 rounded-xl h-[50px] right-[50px] w-[50px] max-md:absolute max-md:top-5 max-md:right-5 transition-colors ${
                    isFavorited ? 'bg-red-50' : 'bg-zinc-50'
                } hover:bg-gray-100`}
            >
                <div className={isFavorited ? 'text-red-500' : ''}>
                    <HeartIcon />
                </div>
            </button>
        </article>
    );
};
