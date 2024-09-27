import vscode from "../assets/vscode.svg";

function TopBar() {
  return (
    <>
      <div className="border-gray-700 w-full border-2 h-fit py-2 px-3 flex flex-wrap justify-between items-center">
        <div className="flex flex-row gap-3 md:gap-7 items-center">
          <img src={vscode} className="h-5 w-5" alt="VS Code Logo" />
          <ul className="hidden md:flex text-white flex-row gap-3 text-xs md:text-sm">
            <li className="hover:cursor-pointer">File</li>
            <li className="hover:cursor-pointer">Edit</li>
            <li className="hover:cursor-pointer">View</li>
            <li className="hover:cursor-pointer">Go</li>
            <li className="hover:cursor-pointer">Run</li>
            <li className="hover:cursor-pointer">Terminal</li>
            <li className="hover:cursor-pointer">Help</li>
          </ul>
        </div>

        <p className="text-white text-xs md:text-sm mt-2 md:mt-0 text-center flex-grow">
          Sameer Vohra - Visual Studio Code
        </p>

        {/* Hide the span elements on mobile and show them from the 'md' breakpoint onwards */}
        <div className="hidden md:flex flex-row gap-1 mt-2 md:mt-0">
          <span className="border-1 border-white bg-yellow-500 h-3 w-3 rounded-full hover:cursor-pointer"></span>
          <span className="border-1 border-white bg-green-400 h-3 w-3 rounded-full hover:cursor-pointer"></span>
          <span className="border-1 border-white bg-red-600 h-3 w-3 rounded-full hover:cursor-pointer"></span>
        </div>
      </div>
    </>
  );
}

export default TopBar;
