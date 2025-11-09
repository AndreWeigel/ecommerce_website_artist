import { stripe } from "@/lib/stripe";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  const backgroundUrl = "/background.jpg"; // ensure this exists in /public
  const gifUrl = "/center.gif";            // ensure this exists in /public

  return (
    <>
      {/* Full-viewport background (ignores container due to fixed + inset-0) */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
        aria-hidden
      />

      {/* Optional overlay for contrast */}
      {/* <div className="fixed inset-0 -z-10 bg-black/20" aria-hidden /> */}

      {/* Centered GIF over everything */}
      <div className="fixed inset-0 grid place-items-left">
        <img
          src={gifUrl}
          alt="Centered animation"
          className="max-w-[40vw] max-h-[40vh] select-none"
        />
      </div>

      {/* Spacer so the document has height for the fixed layers to sit on */}
      <div className="h-screen" />
    </>
  );
}
