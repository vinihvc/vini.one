const TripsLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <style>
        {`
          @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
        `}
      </style>

      <main>{children}</main>
    </>
  );
};

export default TripsLayout;
