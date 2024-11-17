import Link from "next/link";

const Table = ({ data }) => {
  const handleDeleted = async (id) => {
    const res = await fetch(`/api/portfolio/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <>
      <div>
        {data.length === 0 ? (
          // Pesan jika data kosong
          <div className="py-10 text-center">
            <p className="text-lg font-semibold text-gray-500">
              Tidak ada data projek
            </p>
          </div>
        ) : (
          // Tabel jika data tersedia
          <div>
            <table className="w-3/5 mx-auto border border-collapse border-gray-300 table-fixed">
              <thead className="text-white bg-gray-800">
                <tr>
                  <th className="w-10 px-4 py-2 border border-gray-300">No</th>
                  <th className="w-20 px-4 py-2 border border-gray-300">
                    Judul Projek
                  </th>
                  <th className="w-24 px-4 py-2 border border-gray-300">
                    Deskripsi
                  </th>
                  <th className="w-24 px-4 py-2 border border-gray-300">
                    Link Github
                  </th>
                  <th className="w-24 px-4 py-2 border border-gray-300">
                    Link View
                  </th>
                  <th className="w-24 px-4 py-2 border border-gray-300">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="">
                    <td className="px-4 py-2 text-center border border-gray-300">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.title}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.description}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#e2e2b6] text-black rounded-md"
                      >
                        Github
                      </a>
                    </td>
                    <td className="px-4 py-2 border border-gray-300 ">
                      <a
                        href={item.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#e2e2b6] text-black rounded-md"
                      >
                        View
                      </a>
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <div className="flex justify-center gap-2">
                        <button
                          className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                          onClick={() => handleDeleted(item.id)}
                        >
                          Hapus
                        </button>
                        <Link
                          className="px-4 py-2 text-black bg-yellow-300 rounded-md hover:bg-yellow-400"
                          href={`/dashboard/${item.id}/edit`}
                        >
                          Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Table;
