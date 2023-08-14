
import axios from "axios";
import "./styles.css";
import { toast } from "react-toastify";

// axios.defaults.baseURL = 'http://localhost:8080/Persons'
export default function Delete(props) {
  const DeleteId = props.delete.map((del, i) => {
    function remove(id) {
      axios
        .delete(`http://localhost:8080/Persons/delete/${id}`)
        .then((res) => {
          toast.success(res.data.name + " data is deleted")
          props.removeData(res.data);
          console.log("delete", res.data);
        })
        .catch((e) => console.log(e));
    }
    return (
      <tr key={i}>
        <td>{del.name}</td>
        <td>{del.class}</td>
        <td>{del.sub1}</td>
        <td>{del.sub2}</td>
       
        <td>
          <i
            class="fa fa-pencil"
            aria-hidden="true"
            onClick={() => {
              props.EditInfo(del);
              props.showPopup();
            }}
          ></i>
        </td>
        <td>
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={() => remove(del._id)}
          ></i>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>sub1</th>
          <th>sub2</th>
          
          <th>Edit</th>
          <th>delete</th>
        </tr>
        {DeleteId}
      </table>
    </div>
  );
}
