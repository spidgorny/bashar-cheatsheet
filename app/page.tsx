import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-3 py-3 gap-3 text-black">
      <div className="bg-lime-500 rounded p-3">
        <div className="flex justify-between">
          <h1 className="text-3xl mb-3">
            <span>The Formula</span>
          </h1>
          <span>
            <Link
              className="underline"
              href="https://d11n7da8rpqbjy.cloudfront.net/basharet/1832_1708988558001Formula.pdf?kuid=04106a28-b725-4166-8f6a-14986af68a9f&kref=dHfjznGvImXc"
            >
              Details
            </Link>
          </span>
        </div>
        <p className="mb-3">
          Bashar&apos;s follow your excitement formula is the key to being your
          True Self and living your dreams!
        </p>
        <ol className="my-3 list-decimal list-inside space-y-3">
          <li>
            Act on your excitement, your passion, whatever is most exciting to
            you, in the moment. Do this every moment that you can.
          </li>
          <li>
            Do this to the best of your ability. Take it as far as you can go
            until you cannot take it any further.
          </li>
          <li>
            Act on your excitement/passion with absolutely no insistence,
            assumption or expectation of what the outcome should be.
          </li>
          <li>
            Choose to remain in a positive state regardless of what happens.
          </li>
          <li>
            Constantly investigate your belief systems. Release & replace the
            un-preferred beliefs: fear-based beliefs, and the beliefs not in
            alignment with who you prefer to be.
          </li>
        </ol>
      </div>
      <div className="bg-pink-500 rounded p-3">
        <h1 className="text-3xl mb3">The Five Laws of Creation</h1>

        <ol className="my-3 list-decimal list-inside space-y-3">
          <li>You exist</li>
          <li>Everything is here and now</li>
          <li>The One is the All and the All are the One</li>
          <li>What you put out is what you get back</li>
          <li>Everything changes, except the first 4 Laws</li>
        </ol>
      </div>
      <div className="bg-sky-500 rounded p-3">
        <h1 className="text-3xl mb-3">Sacred Circuitry</h1>
        <p className="mb-3">
          Directions: Look at each one for 1 minute (In order from left to
          right, top to bottom) and allow yourself to feel the different states
          of each symbol, feel the activation of these states, observe and
          absorb each symbol and the concept attached as you go through them. It
          only takes 15 minutes to reprogram your brain to be more sensitive to
          higher vibrational energy and function as a more loving, holistic,
          multidimensional being with a broader view than just the physical. The
          brain is like plastic and can be rewired/remolded after only 15
          minutes. You are this flexible and this powerful!
        </p>
        <p>
          Do this for 3 days in a row (in order for 1 min each) for a stronger
          and deeper initial impact and after that you can go out of order or
          just focus on 1 or a few symbols you are attracted to. If you wish to
          still go in order every time, that works. Always keep it to 15
          minutes, even if you are using a few symbols and you can do it up to 3
          times per day. Do not go over 15 minutes or over 3x/day as the brain
          needs time to fully absorb and process the info, any more may burn you
          out or just waste time.{" "}
        </p>
      </div>
      <div className="bg-emerald-500 rounded p-3">
        <h1 className="text-4xl mb-3 font-serif">
          Circumstances don&apos;t matter, only your state of being matters!
        </h1>
      </div>
      <div className="bg-orange-500 rounded p-3">
        <div className="flex justify-between">
          <h1 className="text-3xl mb-3">Sacred Circuits</h1>
          <div>
            <div>
              <Link href="https://d11n7da8rpqbjy.cloudfront.net/basharet/1847_1708989106891Sacred_Circuitry.pdf?kuid=04106a28-b725-4166-8f6a-14986af68a9f&kref=dHfjznGvImXc">
                Details
              </Link>
            </div>
            <div>
              <Link href="https://www.pinterest.com/pin/709528116296260473/">
                Pinterest
              </Link>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <figure>
              <Image src="/1.png" width={300} height={300} alt="" />
              <caption className="text-center">Center</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/2.png" width={300} height={300} alt="" />
              <caption className="text-center">Expand</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/3.png" width={300} height={300} alt="" />
              <caption className="text-center">Balance</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/4.png" width={300} height={300} alt="" />
              <caption className="text-center">Prepare</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/5.png" width={300} height={300} alt="" />
              <caption className="text-center">Express</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/6.png" width={300} height={300} alt="" />
              <caption className="text-center">Extend</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/7.png" width={300} height={300} alt="" />
              <caption className="text-center">Unlock</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/8.png" width={300} height={300} alt="" />
              <caption className="text-center">Flow</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/9.png" width={300} height={300} alt="" />
              <caption className="text-center">Receive</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/10.png" width={300} height={300} alt="" />
              <caption className="text-center">Relate</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/11.png" width={300} height={300} alt="" />
              <caption className="text-center">Realize</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/12.png" width={300} height={300} alt="" />
              <caption className="text-center">Act</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/13.png" width={300} height={300} alt="" />
              <caption className="text-center">Transform</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/14.png" width={300} height={300} alt="" />
              <caption className="text-center">Connect</caption>
            </figure>
          </li>
          <li>
            <figure>
              <Image src="/15.png" width={300} height={300} alt="" />
              <caption className="text-center">Manifest</caption>
            </figure>
          </li>
        </ul>
      </div>
    </main>
  );
}
