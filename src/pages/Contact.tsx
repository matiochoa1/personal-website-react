export default function Contact() {
  return (
    <>
      <div className="container mx-auto ">
        <h2 className="mb-10 text-3xl font-black text-center text-white uppercase">
          Contact Form
        </h2>

        <form className="px-5 py-10 mx-56 mb-10 rounded-lg shadow-lg bg-zinc-500">
          <div className="mb-5">
            <label htmlFor="name" className="text-sm font-bold uppercase">
              Name
            </label>

            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300"
              placeholder="Name"
            />
          </div>
        </form>
      </div>
    </>
  );
}
