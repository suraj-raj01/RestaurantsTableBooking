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
  const {id,id1} = useParams();
  console.log(id)
  const mynav = useNavigate();
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();{
      let url = "http://localhost:3000/Restuarent";
      axios.post(url, input).then((res) => {
        console.log(res.data);
        toast.success("Booking Successfull");
        mynav("/display");
      });
    }
  };
  return (
    <>
    <div id="avl">
      Table Available {id1}
    </div>
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
            <h3>Food Type: " {id} "</h3>
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
