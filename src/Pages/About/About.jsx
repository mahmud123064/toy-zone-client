import img from "../../../public/truck-4.png"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-12">
            <div className="hero-content flex-col lg:flex-row-reverse rounded-lg">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl w-96" />
                <div className="w-1/2 space-y-5 p-4 rounded-lg">
                    <h1 className="text-5xl font-bold ">About Us</h1>
                    <p className="py-6"> We are passionate about toy trucks and dedicated to providing high-quality, fun, and engaging toys for children of all ages. Our goal is to bring joy and excitement to kids through the world of toy trucks, fostering imagination, creativity, and hours of playtime.</p>

                    <p> <span className="font-bold">Our Mission : </span>
                        Our mission is to inspire young minds and encourage their love for vehicles and adventure. We believe that playing with toy trucks not only entertains children but also helps develop their motor skills, hand-eye coordination, and problem-solving abilities. We strive to offer a diverse range of toy trucks that cater to different interests and preferences, ensuring there's something for every child.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>

        </div>
    );
};

export default About;