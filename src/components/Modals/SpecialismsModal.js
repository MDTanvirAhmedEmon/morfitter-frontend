
function SpecialismsModal ({ setSpecialismsVisible }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="relative bg-white rounded shadow-lg w-[500px]">
          <div className="px-5 py-10">
            <label
              htmlFor="Specialisms-input"
              className="block text-gray-700 text-lg font-medium mb-5"
            >
              Specialisms
            </label>
            <input
              type="text"
              placeholder="Enter Your Specialisms"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0ba593] focus:border-transparent"
            />
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setSpecialismsVisible(false)}
                className="px-4 py-2 bg-white text-[#0ba593] border border-[#0ba593] rounded hover:bg-[#0ba593] hover:text-white transition"
              >
                Cancel
              </button>
  
              <button className="px-5 py-2 bg-[#0ba593] text-white rounded hover:bg-[#088577] transition">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SpecialismsModal;