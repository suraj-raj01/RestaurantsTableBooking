import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const {id} = useParams();
  console.log(id)
  const mynav = useNavigate();
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  let a = input.tables;
  const handleSubmit = (e) => {
    e.preventDefault();
    a -= input.table;
    console.log(a);
    if (a > 0) {
      let url = "http://localhost:3000/Restuarent";
      axios.post(url, input).then((res) => {
        console.log(res.data);
        toast.success("Booking Successfull");
        mynav("/display");
      });
    } else {
      alert("Table full");
    }
  };
  return (
    <>
      <div
        style={{
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form id="form">
          <center>
            <p>Your Table Number : {id}</p>
            <h2>Book Your Table Here</h2>
          </center>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              type="text"
              required
              placeholder="Enter name"
              name="name"
              value={input.name}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="email"
              required
              placeholder="Enter email"
              name="email"
              value={input.email}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control
              type="date"
              placeholder="enter date"
              name="date"
              required
              value={input.date}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control
              type="time"
              placeholder="Enter time"
              name="time"
              required
              value={input.time}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control
              type="text"
              placeholder="Enter hour (HH)"
              name="hour"
              required
              value={input.hour}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Control
              name="table"
              value={input.table}
              required
              placeholder="Enter number of table"
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState" style={{display:'none'}}>
            <Form.Control
              name="tables"
              value={input.tables=20}
              required
              placeholder="Enter number of table"
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control
              name="people"
              placeholder="Enter number of people"
              value={input.people}
              required
              onChange={handleInput}
            />
          </Form.Group>

          <Button variant="success" onClick={handleSubmit}>
            Book Table
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </>
  );
};
export default Booking;
