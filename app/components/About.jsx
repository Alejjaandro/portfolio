import React from "react";
import AboutImage from '../../public/assets/about.jpg';
import Image from "next/image";

export default function About() {
    return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">

                <div className="col-span-2">
                    <p className="py-4 uppercase text-xl tracking-widest text-violet-600">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">{"// I Am not your normal developer"}</p>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                        veniam alias ullam dignissimos quae odio ea iusto officiis aut
                        magni, saepe blanditiis non incidunt quas sit totam voluptatibus?
                        Laborum, maiores?
                    </p>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                        voluptatem aliquam repellat neque, ea reprehenderit iure provident
                        modi debitis accusantium vero autem vitae est blanditiis reiciendis
                        necessitatibus ex dolorum dicta. A sint vero beatae autem qui,
                        dolorum tenetur! Sed quas officia reiciendis cupiditate totam
                        deleniti vitae dolor molestiae libero sapiente quibusdam veritatis
                        est eaque, suscipit velit quis cumque magnam ut?
                    </p>

                    <p className="py-2 text-gray-600 underline cursor-pointer">
                        Checkout my lastest projects
                    </p>
                </div>

                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image src={AboutImage} alt="/" className="rounded-xl" />
                </div>

            </div>
        </div>
    );
}
