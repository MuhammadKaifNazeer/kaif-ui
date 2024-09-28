import AllComponents from "@/components/allComponents/allComponents";
import Sidebar from "@/components/Sidebar/Sidebar";


export default function HomePage() {
  return (
    <>
      <div className="bg-background pt-[5rem]">
        <div className="container flex-1 items-start lg:grid  lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <Sidebar />
          <AllComponents />
        </div>
      </div>
    </>
  );
}
