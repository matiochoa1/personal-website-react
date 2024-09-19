import { useEffect, useState } from "react";

export default function AboutMe() {
  const [content, setContent] = useState({ title: "", paragraphs: [] });

  useEffect(() => {
    fetch("/content/aboutMe.json")
      .then((response) => response.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <>
      <div>
        <div className="container flex items-center mx-auto mt-20">
          <div>
            <img
              src="/public/me.png"
              alt="My photo"
              className="h-auto max-w-full shadow-lg cursor-pointer gradient-mask-t-[transparent,rgba(0,0,0)_90%] hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="h-full">
            <h2 className="text-6xl font-bold text-white bounce-once">
              {content.title}
            </h2>
            <div className="mt-10">
              {content.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-8 text-white">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}