import * as React from "react";

function Modal({ isOpen, onClose, onSave, existingCategories, selectedPhotoCategories, onRemove }) {
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
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        {selectedPhotoCategories.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-700">Already in Sessions:</h3>
            <ul className="list-disc list-inside">
              {selectedPhotoCategories.map((category, index) => (
                <li key={index} className="flex justify-between items-center text-gray-700 bg-gray-300 p-2 mb-1 font-bold rounded-lg">
                  {category}
                  <button
                    onClick={() => onRemove(category)}
                    className="ml-2 bg-red-500 text-white text-xs rounded-full p-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
                  >
                    X
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
