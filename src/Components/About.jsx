import { Link } from "react-router-dom";


const About = () => {
    return (
        <div>
            <div className=" text-center mx-40 space-y-8">

                <h1 className="text-5xl font-semibold">Welcome to Book Vibe</h1>
                <hr />
                <p className="text-2xl"> We are dedicated to enriching your reading experience. At Book Vibe, we believe that books have the power to transport us to new worlds, expand our horizons, and ignite our imagination. Our mission is simple: to connect readers with the stories that resonate with them on a personal level.</p>
                <p className="text-2xl">Our user-centric design ensures that navigating through our website is a breeze. With intuitive search functionality, personalized recommendations, and detailed book pages, finding your next favorite book has never been easier. We also believe in supporting authors and giving them the recognition they deserve. That is why we shine a spotlight on talented writers, providing them with a platform to showcase their work and engage with their readers.</p>
                <p></p>
                <p className="text-2xl">At Book Vibe, we are committed to continuous improvement. We are always listening to your feedback and striving to make our platform even better, so you can enjoy an exceptional reading experience every time you visit. So whether you are looking for your next literary adventure or simply seeking inspiration, join us at Book Vibe and let the journey begin.</p>
            </div>
            <div className="mx-40 text-center text-2xl mt-10">
                <hr />
                <p className="mt-5">Contact us</p>
                
                <div className="flex justify-center items-center mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <p className="ml-2">01775348910</p>
                    

                </div>
                <hr />
                
            </div>
            <div className="flex mx-40 justify-center gap-20 mb-10 mt-5">
                <Link to={"https://www.facebook.com/ittihad.hasnat.CSE.PUST/"} target="_blank">
                    <svg className="w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="facebook"><path fill="#1976D2" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path><path fill="#FAFAFA" fillRule="evenodd" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z" clipRule="evenodd"></path>
                    </svg>
                </Link>
                <Link to={"https://github.com/tayesh"} target="_blank"><svg className="w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg></Link>
            </div>
        </div>
    );
};

export default About;