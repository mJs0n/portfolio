const Contact = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-slate-800 border border-slate-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-slate-800 border border-slate-700"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded bg-slate-800 border border-slate-700"
        />

        <button className="bg-sky-500 py-3 rounded-2xl hover:bg-sky-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;