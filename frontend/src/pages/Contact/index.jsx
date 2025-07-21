import * as React from "react";
import { Footer } from "../components/Footer";
import "../../index.css";
import NavigationBar from "../components/NavigationBar";
import {Navbar} from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import {FilterSidebar} from "../components/FilterSidebar";
import {PropertyList} from "../components/PropertyList";

function Contact() {
    return (
        <div className="relative w-full min-h-screen bg-white max-md:overflow-x-hidden flex flex-col justify-between">
            <Navbar/>

            <img
                src="/caria-images/8b91db30f71abbd5df3e268b9764909883dc5163.png"
                alt=""
                className="absolute left-0 w-full h-[145px] top-[77px]"
            />

            <SearchForm/>

            <main
                className="flex gap-6 items-start px-24 py-0 mt-60 flex-grow max-md:flex-col max-md:gap-5 max-md:px-5 max-md:py-0 max-md:mt-36 max-sm:gap-4 max-sm:px-4 max-sm:py-0 max-sm:mt-24">
                <FilterSidebar />
                <PropertyList/>
            </main>

            <Footer variant="contact" />
        </div>
    );
}

export default Contact;
