import React from "react";

export default function Logo() {
  return (
    <div
      id="logo"
      className="bottom-0 left-1/2 z-[10000] absolute flex p-[1.5em] text-white -translate-x-1/2 will-change-transform mix-blend-difference"
    >
      <div
        id="char anim-out"
        className="[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]"
      >
        <h1 className="relative [font-family:Saans-Trial-Heavy] text-xl will-change-transform">
          BLOOM.
        </h1>
      </div>
      {/* <div className="logo">
        <div className="char">
          <h1>C</h1>
        </div>
        <div className="char anim-out">
          <h1>l</h1>
        </div>
        <div className="char anim-out">
          <h1>a</h1>
        </div>
        <div className="char anim-out">
          <h1>s</h1>
        </div>
        <div className="char anim-out">
          <h1>h</h1>
        </div>
        <div className="char anim-out">
          <h1>o</h1>
        </div>
        <div className="char anim-out">
          <h1>n</h1>
        </div>
        <div className="char anim-in">
          <h1>.</h1>
        </div>
      </div> */}
    </div>
  );
}
