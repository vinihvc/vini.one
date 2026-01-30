export const MediaQueriesIndicator = () => {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        bottom: 8,
        left: 8,
        zIndex: 50,
      }}
    >
      <div className="flex items-center justify-center text-xs opacity-40">
        <div className="block sm:hidden">XS</div>
        <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          SM
        </div>
        <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">MD</div>
        <div className="hidden lg:block xl:hidden 2xl:hidden">LG</div>
        <div className="hidden xl:block 2xl:hidden">XL</div>
        <div className="hidden 2xl:block">2XL</div>
      </div>
    </div>
  );
};
