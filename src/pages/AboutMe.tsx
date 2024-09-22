import { useEffect, useState } from "react";
import { useAppStore } from "../stores/useAppStore";
import WorkExperience from "../components/WorkExperience";

export default function AboutMe() {
  const [content, setContent] = useState({ title: "", paragraphs: [] });
  const showModal = useAppStore((state) => state.showModal);

  useEffect(() => {
    fetch("/content/aboutMe.json")
      .then((response) => response.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <>
      <div>
        <div className="container flex flex-col items-center m-10 mx-auto sm:mt-20 sm:flex-row">
          <div>
            <img
              src="/public/me.png"
              alt="My photo"
              className="h-auto max-w-full shadow-lg cursor-pointer gradient-mask-t-[transparent,rgba(0,0,0)_90%] hover:scale-105 transition-transform duration-300"
              onClick={showModal}
            />
          </div>

          <div className="container h-full p-6 mx-auto">
            <h2 className="text-5xl font-bold text-center text-white sm:text-6xl bounce-once sm:text-start">
              {content.title}
            </h2>
            <div className="mt-10 text-center sm:text-start">
              {content.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "text-lg leading-8 text-white"
                      : index === 1
                      ? "text-lg leading-8 text-orange-400"
                      : "text-lg leading-8 text-teal-400"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <WorkExperience />
      </div>
    </>
  );
}
