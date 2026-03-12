import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const HeroScrollSection = () => (
  <div className="flex flex-col overflow-hidden bg-background">
    <ContainerScroll
      titleComponent={
        <div className="mb-4">
          <span className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-mono font-medium text-muted-foreground mb-6">
            Daxor ERP · Live Dashboard
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Your entire business
            <br />
            <span className="text-muted-foreground">in one intelligent view</span>
          </h2>
        </div>
      }
    >
      <img
        src="/dashboard.jpeg"
        alt="Daxor ERP Dashboard"
        className="mx-auto rounded-2xl object-contain w-full"
        draggable={false}
      />
    </ContainerScroll>
  </div>
);

export default HeroScrollSection;
