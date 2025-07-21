"use client";
import * as React from "react";

export const Navbar = () => {
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = React.useState(false);
    const [selectedLanguage, setSelectedLanguage] = React.useState("EN");

    const languages = [
        { code: "EN", name: "English", flag: "🇺🇸" },
        { code: "TR", name: "Türkçe", flag: "🇹🇷" },
        { code: "DE", name: "Deutsch", flag: "🇩🇪" },
        { code: "FR", name: "Français", flag: "🇫🇷" },
        { code: "ES", name: "Español", flag: "🇪🇸" },
        { code: "IT", name: "Italiano", flag: "🇮🇹" },
        { code: "RU", name: "Русский", flag: "🇷🇺" },
        { code: "AR", name: "العربية", flag: "🇸🇦" }
    ];

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language.code);
        setIsLanguageDropdownOpen(false);
    };

    const toggleLanguageDropdown = () => {
        setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    return (
        <header className="flex absolute top-0 left-0 justify-between items-center px-24 py-0 w-full bg-stone-900 bg-opacity-40 h-[78px] max-md:px-12 max-md:py-0 max-sm:px-5 max-sm:py-0">
            {/* Logo - Left */}
            <div className="flex items-center">
                <img
                    src="/caria-images/ef9f0e8740c10e21570b471972de158fa2c16125.png"
                    alt=""
                    className="w-44 h-8 max-sm:h-[22px] max-sm:w-[120px]"
                />
            </div>

            {/* Navigation Menu - Center */}
            <nav className="flex gap-8 items-center max-md:gap-5 max-sm:hidden">
                <div className="text-base text-center text-gray-200 cursor-pointer max-md:text-sm hover:text-white transition-colors">
                    Home Page
                </div>
                <div className="text-base text-center text-gray-200 cursor-pointer max-md:text-sm hover:text-white transition-colors">
                    Properties
                </div>
                <div className="text-base text-center text-gray-200 cursor-pointer max-md:text-sm hover:text-white transition-colors">
                    Why Cyprus
                </div>
                <div className="text-base text-center text-gray-200 cursor-pointer max-md:text-sm hover:text-white transition-colors">
                    How To Buy
                </div>
                <div className="text-base text-center text-gray-200 cursor-pointer max-md:text-sm hover:text-white transition-colors">
                    Services
                </div>
                <div className="text-base text-center text-gray-200 cursor-pointer max-md:text-sm hover:text-white transition-colors">
                    Viewing Trip
                </div>
                <div className="text-base text-center text-gray-200 cursor-pointer max-md:text-sm hover:text-white transition-colors">
                    About Us
                </div>
                <div className="text-base text-center text-gray-200 cursor-pointer max-md:text-sm hover:text-white transition-colors">
                    Contact Us
                </div>
            </nav>

            {/* Icons - Right */}
            <div className="flex gap-4 items-center">
                <img
                    src="/caria-images/80d11174bb4c63005d43147aee7d5a1efb307a14.png"
                    alt="favourite"
                    className="w-7 h-[30px] cursor-pointer hover:opacity-80 transition-opacity"
                />
                
                {/* Language Selector */}
                <div className="relative">
                    <div 
                        className="flex gap-2.5 items-center cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={toggleLanguageDropdown}
                    >
                        <div className="relative h-[34px] w-[34px]">
                            <div className="absolute top-0 left-0 w-[34px] h-[34px] bg-amber-800 rounded-full"></div>
                            <div className="absolute top-[7px] left-[7px] w-[21px] h-[21px] rounded-full overflow-hidden">
                                <div className="w-full h-1/3 bg-white"></div>
                                <div className="w-full h-1/3 bg-blue-600"></div>
                                <div className="w-full h-1/3 bg-red-600"></div>
                            </div>
                        </div>
                        <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`transform transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : 'rotate-90'}`}
                        >
                            <path d="M17.29 9.31C17.1975 9.2173 17.0876 9.14375 16.9666 9.09357C16.8456 9.04339 16.7159 9.01756 16.585 9.01756C16.454 9.01756 16.3243 9.04339 16.2034 9.09357C16.0824 9.14375 15.9725 9.2173 15.88 9.31L12 13.19L8.11998 9.31C7.933 9.12302 7.67941 9.01798 7.41498 9.01798C7.15055 9.01798 6.89695 9.12302 6.70998 9.31C6.523 9.49698 6.41796 9.75057 6.41796 10.015C6.41796 10.2794 6.523 10.533 6.70998 10.72L11.3 15.31C11.3925 15.4027 11.5024 15.4763 11.6234 15.5264C11.7443 15.5766 11.874 15.6024 12.005 15.6024C12.1359 15.6024 12.2656 15.5766 12.3866 15.5264C12.5076 15.4763 12.6175 15.4027 12.71 15.31L17.3 10.72C17.68 10.34 17.68 9.7 17.29 9.31Z" fill="#E3E3E3"/>
                        </svg>
                    </div>

                    {/* Dropdown Menu */}
                    {isLanguageDropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <div className="py-2">
                                {languages.map((language) => (
                                    <div
                                        key={language.code}
                                        className={`flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors ${
                                            selectedLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                        }`}
                                        onClick={() => handleLanguageChange(language)}
                                    >
                                        <span className="text-lg">{language.flag}</span>
                                        <span className="text-sm font-medium">{language.name}</span>
                                        {selectedLanguage === language.code && (
                                            <svg className="w-4 h-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Click outside to close dropdown */}
            {isLanguageDropdownOpen && (
                <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsLanguageDropdownOpen(false)}
                />
            )}
        </header>
    );
};
