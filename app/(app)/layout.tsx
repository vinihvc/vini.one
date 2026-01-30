import React from "react";

const NoiseBg = React.lazy(() => import("@/components/layout/noise-bg"));
const Footer = React.lazy(() => import("@/components/layout/footer"));

const LandingLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NoiseBg />

      <main className="pt-8 sm:pt-32 md:my-10">{children}</main>

      <Footer />
    </>
  );
};

export default LandingLayout;
