export default function Header() {
  return (
    <>
      <div
        id="header"
        className="top-1/2 left-1/2 absolute flex flex-col justify-center items-center w-full -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] w-full [font-family:Saans-Trial-Heavy] text-[7vw] text-white text-center uppercase leading-[0.85] -tracking-[0.075rem]">
          <span className="block relative translate-y-[120%] will-change-transform">
            Full Production
          </span>
        </h1>
        <h1 className="[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] [font-family:Saans-Trial-Heavy] text-[7vw] text-white text-center uppercase leading-[0.85] -tracking-[0.075rem]">
          <span className="block relative translate-y-[120%] will-change-transform">
            Services studio
          </span>
        </h1>
        <h1 className="[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] [font-family:Saans-Trial-Heavy] text-[7vw] text-white text-center uppercase leading-[0.85] -tracking-[0.075rem]">
          <span className="block relative translate-y-[120%] will-change-transform">
            based in paris
          </span>
        </h1>
      </div>

      <div
        id="coordinates"
        className="top-1/2 left-0 absolute flex justify-between items-center p-[1.5em] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] w-screen text-[#ffbb00] -translate-y-1/2"
      >
        <p className="relative [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] font-bold text-sm uppercase">
          <span className="block relative translate-y-full will-change-transform">
            23° 33' 30.745" S
          </span>
        </p>

        <p className="relative [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] font-bold text-sm uppercase">
          <span className="block relative translate-y-full will-change-transform">
            46° 38' 37.108" W
          </span>
        </p>
      </div>
    </>
  );
}
