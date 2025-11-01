export default function Specification() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-second/10 text-second rounded-md">
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover:bg-base-300">
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
          </tr>
          {/* row 2 */}
          <tr className="hover:bg-base-300">
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
          </tr>
          {/* row 3 */}
          <tr className="hover:bg-base-300">
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
