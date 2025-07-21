"use client";
import * as React from "react";

export const Footer = ({ variant }) => {
  const footerColumns = [
    {
      title: "Caria Estates",
      links: ["Lorem İpsum", "Lorem İpsum", "Lorem İpsum", "Lorem İpsum"]
    },
    {
      title: "Caria Estates",
      links: ["Lorem İpsum", "Lorem İpsum", "Lorem İpsum", "Lorem İpsum"]
    },
    {
      title: "Caria Estates",
      links: ["Lorem İpsum", "Lorem İpsum", "Lorem İpsum", "Lorem İpsum"]
    },
    {
      title: "Caria Estates",
      links: ["Lorem İpsum", "Lorem İpsum", "Lorem İpsum", "Lorem İpsum"]
    },
    {
      title: "Caria Estates",
      links: ["Lorem İpsum", "Lorem İpsum", "Lorem İpsum", "Lorem İpsum"]
    },
    {
      title: "Caria Estates",
      links: ["Lorem İpsum", "Lorem İpsum", "Lorem İpsum", "Lorem İpsum"]
    }
  ];

  return (
    <footer
      className={
        variant === "home"
          ? "absolute left-0 w-full bg-neutral-500 h-[419px] top-[4462px] max-md:top-[4600px] max-sm:pb-24 max-sm:h-auto max-sm:top-[4700px]"
          : "w-full bg-neutral-500 h-[419px] relative max-sm:pb-24 max-sm:h-auto"
      }
    >
      <div className="absolute left-0 w-full bg-blue-800 h-[67px] top-[352px] max-sm:top-[450px]" />

      <div className="absolute text-sm leading-5 text-white left-[101px] top-[377px] max-sm:top-[475px]">
        © 2025 Movely. All Rights Reserved.
      </div>

      <div className="absolute text-sm leading-5 text-white underline left-[350px] top-[377px] max-sm:relative max-sm:mx-0 max-sm:my-1.5 max-sm:top-[475px]">
        Term of Service
      </div>

      <div className="absolute text-sm leading-5 text-white underline left-[480px] top-[377px] max-sm:relative max-sm:mx-0 max-sm:my-1.5 max-sm:top-[475px]">
        Privacy Policy
      </div>

      <div className="absolute text-sm leading-5 text-white underline left-[610px] top-[377px] max-sm:relative max-sm:mx-0 max-sm:my-1.5 max-sm:top-[475px]">
        Cookies
      </div>

      <img
        src="/caria-images/5e118ba5bd0b8bbae78c7de5d72eadc6e98d9fde.png"
        alt=""
        className="absolute h-[54px] left-[101px] top-[26px] w-[297px]"
      />

      <div className="flex absolute gap-6 items-center left-[101px] top-[100px]">
        <img
          src="/caria-images/0418de9d166f54735bc17c8a03aca6ef0331889f.png"
          alt="mdi:linkedin"
          className="w-10 h-10"
        />
        <img
          src="/caria-images/9d4293e03807a371190a70eb1ef70fe04f5288cf.png"
          alt="ic:outline-facebook"
          className="w-10 h-10"
        />
      </div>

      <div className="flex absolute gap-3.5 items-center left-[101px] top-[150px] w-[355px] max-sm:w-[90%]">
        <img
          src="/caria-images/f96bde84122a1a1e089809afb8f08bf2b5b242b1.png"
          alt="carbon:location-filled"
          className="h-[30px] w-[30px]"
        />
        <div className="flex flex-col gap-1 items-start w-[311px]">
          <div className="self-stretch text-sm leading-5 text-zinc-400">
            Location
          </div>
          <div className="self-stretch text-sm leading-5 text-white">
            Lorem ipsum dolor sit amet consectetur. Nunc id ullamcorper ac egestas aenean sit varius.
          </div>
        </div>
      </div>

      <div className="flex absolute flex-wrap gap-8 content-start items-start left-[738px] top-[26px] w-[492px] max-md:gap-5 max-md:left-[5%] max-md:w-[90%] max-sm:flex-col max-sm:gap-5 max-sm:top-[100px]">
        {footerColumns.map((column, index) => (
          <div key={index} className="flex flex-col gap-3 items-start w-[120px] max-sm:w-full">
            <h4 className="self-stretch text-base leading-5 text-white font-semibold">
              {column.title}
            </h4>
            <div className="flex flex-col gap-2 items-start w-[110px]">
              {column.links.map((link, linkIndex) => (
                <div key={linkIndex} className="self-stretch text-sm leading-5 text-zinc-400 hover:text-white cursor-pointer">
                  {link}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex absolute gap-3.5 items-center left-[101px] top-[220px] w-[355px] max-sm:w-[90%]">
        <img
          src="/caria-images/f51c2b31718b65e246e3d993279e50be18d1512e.png"
          alt="ion:mail"
          className="h-[30px] w-[30px]"
        />
        <div className="flex flex-col gap-1 items-start w-[311px]">
          <div className="self-stretch text-sm leading-5 text-zinc-400">
            Mail Address
          </div>
          <div className="self-stretch text-sm leading-5 text-white">
            dashadgroup@mail.com
          </div>
        </div>
      </div>
    </footer>
  );
};
