const TransactionPage = () => {
  return (
    <div>
      <h1>Total:  KGS</h1>
        <ul className="list-group">
            <li className="list-group-item">
              <div>
                <span></span>
                <span></span>
                <span> KGS</span>
                <button  className="btn btn-danger btn-sm ms-2">Delete</button>
                <button className="btn btn-primary btn-sm ms-2">Edit
                </button>
              </div>
            </li>
        </ul>
    </div>
  )
    ;
};

export default TransactionPage;