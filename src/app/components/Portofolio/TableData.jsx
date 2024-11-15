import Link from "next/link";

const Table = ({ data }) => {

  const handleDeleted = async (id) => {
    const res = await fetch(`/api/portofolio/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      window.location.reload();
    }
  }
  return (
    <>
      <div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="text-white">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Judul Projek</th>
                <th className="px-4 py-2">Deskripsi</th>
                <th className="px-4 py-2">Link Github</th>
                <th className="px-4 py-2">Link View</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="px-4 py-2">{item.githubLink}</td>
                  <td className="px-4 py-2">{item.liveLink}</td>
                  <td className="flex gap-2">
                    <button
                      className="px-4 py-2 text-white bg-red-600 rounded-md"
                      onClick={() => handleDeleted(item.id)}
                    >
                      Hapus
                    </button>

                    <Link className="px-4 py-2 text-black bg-yellow-300 rounded-md" href={`/dashboard/${item.id}/edit`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
