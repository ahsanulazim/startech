export default function Section({ className, children }) {
  return (
    <section
      className={`max-w-xxl w-full mx-auto px-4 py-5 ${className && className}`}
    >
      {children}
    </section>
  );
}
