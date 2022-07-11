import { useRef, useState } from 'react';
import './App.css';

function App() {
  const fname = useRef(null);
  const lname = useRef(null);
  const [names, setNames] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(fname.current.value, lname.current.value);
    let firstName = fname.current.value
    let lastName = lname.current.value
    setNames([...names, {id:names.length + 1, firstName, lastName}])
    console.log(names);
  }

  // const sorted =(a,b)=>{
  //   return b.id - a.id
  // }
  // names.sort(sorted);


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-5">
          <label htmlFor="exampleInputEmail1" className="form-label">Enter your first name</label>
          <input type="text" className="form-control" ref={fname} id="firstname" name='firstname'  aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Enter your Last name</label>
          <input type="text" className="form-control" ref={lname} id="lastname" name='lastname'  aria-describedby="emailHelp"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {names.map((name)=>{
            return <tr key={name.id}>
            <th scope="row">{name.id}</th>
            <td>{name.firstName}</td>
            <td>{name.lastName}</td>
          </tr>
          })}
        </tbody>
      </table>
      {names.length === 0 && 'No users to display'}
    </div>
  );
}

export default App;
