export default function Contact() {
  return (
    <>
      <div className="container mt-10 sm:mx-auto">
        <h2 className="mb-10 text-3xl font-black text-center text-white uppercase">
          Contact Form
        </h2>

        <form className="px-5 py-10 mx-6 mb-10 bg-opacity-75 rounded-lg shadow-lg sm:mx-60 bg-slate-900">
          <div className="gap-6 mb-5 sm:grid sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="text-lg font-bold text-white uppercase"
              >
                Full Name
              </label>

              <input
                type="text"
                id="fullName"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Full Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-lg font-bold text-white uppercase"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Email"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-lg font-bold text-white uppercase"
              >
                Message
              </label>

              <textarea
                name="message"
                id="message"
                maxLength={120}
                minLength={1}
                rows={5}
                className="h-full p-2 font-bold border border-gray-300 rounded-lg text-md"
              ></textarea>
            </div>
          </div>
          <button className="w-full p-2 mt-6 text-white bg-red-800 rounded-lg shadow-lg opacity-75 hover:bg-red-700 text-md">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
