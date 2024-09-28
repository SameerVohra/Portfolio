import { useNavigate } from "react-router";

function SideBar() {
  const navigate = useNavigate();
  return (
    <div className='hidden md:flex border-gray-800 border-r min-h-screen w-20 flex-col justify-between items-center bg-gray-900'>
      <div className='flex flex-col justify-center gap-4 p-4'>
        <button onClick={() => navigate("/")}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(225, 228, 232)"
            className="Sidebar_icon__czDJe"
          >
            <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"></path>
          </svg>
        </button>
        <button onClick={() => navigate("/github")}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(225, 228, 232)"
            className="Sidebar_icon__czDJe"
          >
            <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 01-.728-.728v-3.73a2.497 2.497 0 00-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 00.09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 00-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 01-.728.728.718.718 0 01-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 016.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
          </svg>
        </button>
        <button onClick={() => navigate("/projects")}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(225, 228, 232)"
            className="Sidebar_icon__czDJe"
          >
            <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"></path>
          </svg>
        </button>
        <button onClick={() => navigate("/connect")}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(225, 228, 232)"
            className="Sidebar_icon__czDJe"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"
            ></path>
          </svg>
        </button>
        <button onClick={() => navigate("/skills")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="rgb(255, 228, 232)"
            viewBox="0 0 24 24"
          >
            <path d="M12 0l3.093 9.527h10.107l-8.176 5.918 3.093 9.527L12 15.453 5.883 21.972l3.093-9.527-8.176-5.918h10.107z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col justify-center p-4">
        <button onClick={() => navigate("/")}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(225, 228, 232)"
            className="Sidebar_icon__czDJe"
          >
            <path d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 008.016 16a7.98 7.98 0 004.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.384-1.599 1.84-2.751 3.536-2.751.912 0 1.744.336 2.392.895l-1.04 1.04.001-.001c-.4-.384-.944-.624-1.544-.624-1.144 0-2.079.855-2.208 1.959C4.864 13.664 3.84 12.888 3.36 11.8c.944.16 1.776-.08 2.448-.656l1.039 1.039c-1.2.752-2.752.8-4.08.16 1.119-1.92 2.528-3.68 3.888-5.28.336-.367.784-.656 1.296-.656s.96.32 1.36.672c1.392 1.44 2.624 3.12 3.856 4.799.672 1.008 1.264 2.047 1.904 3.071-1.44.976-3.136 1.648-5.008 1.648z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
