export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="text-white font-semibold">[Full Name]</p>
          <p className="text-sm">Head of State's Commendation Recipient</p>
        </div>

        <p className="text-sm">
          &copy; {year} [Full Name]. All rights reserved.
        </p>
      </div>
    </footer>
  );
}