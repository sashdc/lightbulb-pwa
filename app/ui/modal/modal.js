import * as React from "react";
import { dosis } from "../../fonts";

function Modal({
  isOpen,
  onClose,
  onSave,
  existingCategories,
  selectedPhotoCategories,
  onRemove,
}) {
  const [newCategory, setNewCategory] = React.useState("");
  const modalRef = React.useRef();

  const handleAdd = () => {
    if (newCategory) {
      onSave(newCategory);
    }
    setNewCategory("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    } else if (event.key === "Enter") {
      handleAdd();
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleAdd, onClose]);

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  if (!isOpen) return null;

  return (
    <div
      className={`${dosis.className} fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-in fade-in duration-300`}
    >
      <div ref={modalRef} className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-black">Add to Session(s)</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Select an existing shoot{" "}
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
            onChange={(e) => onSave(e.target.value)}
          >
            <option value="">Select an existing shoot</option>
            {existingCategories.map((category, index) => (
              <option
                key={index}
                value={category}
                disabled={selectedPhotoCategories.includes(category)}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Or Create New shoot
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-black"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Exit
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        {selectedPhotoCategories.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-700">
              Already in Sessions:
            </h3>
            <ul className="list-disc list-inside">
              {selectedPhotoCategories.map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-gray-700 bg-gray-300 p-2 mb-1 font-bold rounded-lg"
                >
                  {category}
                  <button
                    onClick={() => onRemove(category)}
                    className="ml-2 bg-red-500 text-white text-xs rounded-full p-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
