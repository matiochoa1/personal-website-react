import { IconBriefcase } from "@tabler/icons-react";

export default function WorkExperience() {
  return (
    <>
      <div className="container mx-auto">
        <section className="flex items-center justify-center gap-4 border-b-2 border-white mt-52 border-opacity-70 border-">
          <IconBriefcase stroke={2} color="white" size={50} />
          <h2 className="text-6xl text-white">Work Experience</h2>
        </section>

        <section className="flex flex-col gap-4 pl-4 mt-10 border-l-2 border-red-700 border-opacity-80">
          <h2 className="text-4xl text-white">
            <span>Microsoft</span>: Sr. Technical Support Engineer
          </h2>
          <span className="text-lg font-bold text-red-500">2024 - Now</span>

          <div>
            <p className="w-1/2 font-bold text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates tempora quo adipisci hic corporis delectus repellendus
              debitis inventore! Sequi, assumenda! Minus delectus natus illo
              cumque voluptas! Ipsum cum molestias beatae!
            </p>
          </div>
        </section>

        <section className="flex flex-col items-end gap-4 pr-4 mt-10 border-r-2 border-red-700 border-opacity-80">
          <h2 className="text-4xl text-white">
            <span>Microsoft</span>: Technical Support Engineer
          </h2>
          <span className="text-lg font-bold text-red-500">2022 - 2024</span>

          <div className="flex flex-col items-end">
            <p className="w-1/2 font-bold text-white text-end">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates tempora quo adipisci hic corporis delectus repellendus
              debitis inventore! Sequi, assumenda! Minus delectus natus illo
              cumque voluptas! Ipsum cum molestias beatae!
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4 pl-4 mt-10 border-l-2 border-red-700 border-opacity-80">
          <h2 className="text-4xl text-white">
            <span>Xandr</span>: Sr Analyst - Product Support
          </h2>
          <span className="text-lg font-bold text-red-500">2021 - 2022</span>

          <div>
            <p className="w-1/2 font-bold text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates tempora quo adipisci hic corporis delectus repellendus
              debitis inventore! Sequi, assumenda! Minus delectus natus illo
              cumque voluptas! Ipsum cum molestias beatae!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
