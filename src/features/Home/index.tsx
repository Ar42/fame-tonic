import Image from "next/image";

import Button from "@/components/Button";
import ChevronRight from "@/icons/ChevronRight";

const instructionsData: string[] = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content ",
  "Learn from expert-led courses designed for aspiring influencers",
];

const Home = () => {
  return (
    <section className="flex flex-col lg:flex-row-reverse items-start">
      <div className="w-full lg:w-1/2 transform lg:-translate-y-20 lg:-translate-x-8.5 -z-10">
        <Image
          src="/images/mobile-mockup.png"
          alt="logo"
          height={619}
          width={666}
          className="w-full max-w-100 lg:max-w-150 h-80 lg:h-164.75 cursor-pointer mx-auto"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <h2 className="text-xl-plus-line-height lg:text-4xl-minus font-extrabold font-urbanist lg:font-bold text-white text-center lg:text-left">
          Want to Turn Social Media Into a Profitable Career?
        </h2>

        <h3 className="text-xl-plus-line-height lg:text-4xl-minus font-extrabold font-urbanist lg:font-bold text-accent-100 text-shadow-4xs text-shadow-danger-100 text-center lg:text-left mb-5.5 lg:mb-4">
          Discover your way to success with Fametonic:
        </h3>

        <ul className="mb-5.5 lg:mb-7.5">
          {instructionsData.map((item) => (
            <li
              key={item}
              className="flex gap-x-2.5 items-center lg:items-start mb-2.5 lg:mb-3.25"
            >
              <p>✨</p>
              <p className="text-base font-medium leading-snug text-white font-figtree">
                {item}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col lg:flex-col-reverse gap-9 lg:gap-7.5">
          <div>
            <p className="text-sm leading-none font-medium text-gray-100 font-figtree text-center lg:text-left mb-6.25 lg:mb-3">
              By clicking {"Get Started"}, you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
            </p>
            <p className="text-xxs leading-none font-medium text-gray-100 font-figtree text-center lg:text-left">
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>

          <div>
            <Button
              label="GET STARTED"
              buttonShadow="sm"
              variant="danger"
              icon={<ChevronRight />}
              containerClassName="!w-full lg:!min-w-78.25 mb-2.5"
            />
            <p className="text-xs leading-tight text-white font-figtree text-center">
              1-minute quiz for personalized Insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
