import React from "react";
import { InfiniteMovingCardsDemo } from "../ui/MovingCards";
import { section } from "motion/react-client";

function Trafic() {
  return (
    <section className="pt-[1rem]">
      <div className="mx-auto">
        <h2 className="text-white text-center text-[1.8rem] md:text-[2.5rem] leading-[1.2em] font-bold">
          We receive nothing but praise from our <br />
          partners—and its easy to see why.
        </h2>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <InfiniteMovingCardsDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trafic;
