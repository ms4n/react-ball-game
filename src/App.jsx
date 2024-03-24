import Button from "./components/button";

export default function App() {
  return (
    <div className="flex flex-col m-10 justify-between h-[700px]">
      <div className="border border-8 border-gray-400 rounded-lg h-96 ">
        <div className="h-[25px] w-[25px] bg-green-500 rounded-full"></div>
        <div className="h-[125px] w-[125px] border-dashed border-4 rounded-lg border-blue-400"></div>
      </div>

      <div className="flex items-center justify-center gap-10">
        <Button direction={"left"} />
        <div className="flex flex-col items-center gap-20">
          <Button direction={"up"} />
          <Button direction={"down"} />
        </div>
        <Button direction={"right"} />
      </div>
    </div>
  );
}
