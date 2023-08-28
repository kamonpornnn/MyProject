import "./AddForm.css";
export default function AddForm({ title, setTitle,addTask }) {
  return (
    <>
      <h2>แอพบริหารจัดการ</h2>
      <form onSubmit={addTask}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn" >
            เพิ่ม
          </button>
        </div>
      </form>
    </>
  );
}
