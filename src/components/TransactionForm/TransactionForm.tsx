const TransactionForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="type" className="form-label">Type</label>
        <select
          className="form-select"
          id="type"
          name="type"
          required
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select
          className="form-select"
          id="category"
          name="category"
          required>
          <option value="">Select</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="createdAt" className="form-label">Date</label>
        <input
          type="datetime-local"
          className="form-control"
          id="createdAt"
          name="createdAt"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
       Save
      </button>
    </form>
  );
};

export default TransactionForm;