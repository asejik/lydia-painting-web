export default function Map() {
  return (
    <section className="w-full h-[400px] sm:h-[500px] relative border-t border-slate-200 bg-slate-100">
      <iframe
        title="Lydia Painting Office Location"
        src="https://www.google.com/maps?q=12015+Hesse+Drive,+Farmers+Branch,+TX+75234&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 pointer-events-auto"
      />

      {/* Optional: Add a subtle inner shadow to blend the map edges into the page */}
      <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />
    </section>
  );
}