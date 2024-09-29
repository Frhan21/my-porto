import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({currentPage, totalPages, goToPreviousPage, goToNextPage}) => {
  return (
    <div className="flex justify-center items-center mt-10 gap-5">
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 font-bold ${
          currentPage === 1 ? "text-gray-400" : "text-blue-500"
        }`}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <span className="flex items-center justify-center font-bold text-white gap-2">
        <span className="px-4 py-2 bg-[#e2e2b6] text-[#021526] rounded-md">{currentPage}</span> of <span className="px-4 py-2 bg-[#e2e2b6] text-[#021526] rounded-md">{totalPages}</span>
      </span>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 font-bold ${
          currentPage === totalPages ? "text-gray-400" : "text-blue-500"
        }`}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};


export default Pagination;