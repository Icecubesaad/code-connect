import Header from "@/components/Header";
import Main from "@/components/Main";
export default function HomePage() {
  return (
    <div className="flex h-screen flex-col bg-[#111111] w-full">
      <Header />
      <div className="flex flex-col justify-center h-[60%] pl-10">
        <h1 className="nunito  font-[500] text-white text-[5rem]">
          Code Connect
        </h1>
        <p className="nunito  font-[500] text-white text-[1.5rem]">
          Build, Share, Engage with fellow programmers.
        </p>
        <div>
          <button className="w-[150px] h-[50px] hover:bg-white hover:text-black pl-4 pr-4 mt-8 border-white border-[1px] rounded-lg nunito text-white">Explore</button>
        </div>
      </div>
    </div>
  );
}
