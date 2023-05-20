import { useState } from "react";
import { Dialog } from "@headlessui/react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog
        open={open}
        as="div"
        className="relative z-50"
        onClose={() => setOpen(false)}
      >
        <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm transition-opacity" />

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="min-h-full pt-20 lg:pt-24 px-4 xs:px-6 lg:px-8">
            <Dialog.Panel className="w-full mx-auto max-w-[40rem] will-change-transform">
              <div className="bg-white p-12 rounded-xl">
                <input
                  className="bg-gray-50 border-gray-400 border w-full h-10 rounded-lg px-3"
                  placeholder="Leave empty and hit ESC"
                />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
      <h1 className="text-3xl font-bold underline">
        Dialog with text input scrolls to bottom after closing with ESC in
        Safari
      </h1>
      <button
        onClick={() => setOpen(true)}
        className="my-10 bg-black text-white py-3 px-4 rounded-md"
      >
        Open Dialog
      </button>
      <div className="space-y-40 my-40 text-2xl">
        <p>Some</p>
        <p>text</p>
        <p>to</p>
        <p>have</p>
        <p>some</p>
        <p>scroll</p>
        <p>space</p>
      </div>
    </>
  );
}

export default App;
