import ZoomParallax from "@/components/kaif-ui/ui/zoom-parallax";

const ZoomParallaxComponent = () => {
  return (
    <div>
      <ZoomParallax />
      <div className="h-[40vh] w-full flex items-start justify-center">
        <h1 className="text-4xl text-center capitalize">Your content goes here.</h1>
      </div>
    </div>
  );
};

export default ZoomParallaxComponent;
