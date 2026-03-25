import React from "react";

const Footer = React.lazy(() => import("@/components/layout/footer"));
const NoiseBg = React.lazy(() => import("@/components/layout/noise-bg"));

const LandingLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NoiseBg />

      <main className="pt-8 sm:pt-20 md:my-10">{children}</main>

      <Footer />
    </>
  );
};

export default LandingLayout;
