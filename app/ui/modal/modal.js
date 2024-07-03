import * as React from "react";

function Modal({ isOpen, onClose, onSave, existingCategories }) {
  const [newCategory, setNewCategory] = React.useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (newCategory) {
      onSave(newCategory);
    }
    setNewCategory("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-black">Add to Session</h2>
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
              <option key={index} value={category}>
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
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
