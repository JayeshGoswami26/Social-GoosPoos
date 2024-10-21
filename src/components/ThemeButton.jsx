function ThemeButton({ className, children  }) {
  return (
    <>
      <button className={`${className} overflow-hidden relative min-w-32 p-2 h-12 bg-black text-white border-white/20 border rounded-md text-xl font-bold cursor-pointer z-10 group`}>
        {children}
        <span className="absolute min-w-36  h-32 -top-8 -left-2 bg-yellow-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-200 duration-1000 origin-right"></span>
        <span className="absolute min-w-36 h-32 -top-8 -left-2 bg-pink-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-300 duration-700 origin-right"></span>
        <span className="absolute min-w-36 h-32 -top-8 -left-2 bg-[#af5ffa] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-500 origin-right"></span>
        <span className="group-hover:opacity-100 w-full text-center group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-0 z-10">
          {children}
        </span>
      </button>
    </>
  );
}

export default ThemeButton;
