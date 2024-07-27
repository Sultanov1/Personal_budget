const MainPage = () => {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5>Add category</h5>
            <button type="button" className="btn-close">x</button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="type" className="form-label">Type</label>
                <select className="form-select" value="type">
                  <option value="income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select className="form-select" value="category">
                  <option>Salary</option>
                  <option>Food</option>
                </select>
              </div>
              <button type="button" className="btn btn-outline-danger">Cancel</button>
              <button type="submit" className="btn btn-outline-success">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;