import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Display = () => {
    const mynav = useNavigate();
    const [mydata, setMydata] = useState([]);
    const loadData = () => {
        let url = "http://localhost:3000/Restuarent";
        axios.get(url).then((res) => {
            console.log(res.data);
            setMydata(res.data);
        })
    }
    useEffect(() => {
        loadData();
    }, [])

    const billgenerate = (id) => {
        mynav(`/billgenerate/${id}`)
    }

    const myDelete = (myid) => {
        let url = `http://localhost:3000/Restuarent/${myid}`;
        axios.delete(url).then((res)=>{
            loadData();
            toast.warning("Data Deleted!!")
        })
    }
    let ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>{key.name}</td>
                    <td>{key.email}</td>
                    <td>{key.date}</td>
                    <td>{key.time}</td>
                    <td>{key.hour}</td>
                    <td>{key.table}</td>
                    <td>{key.people}</td>
                    <td>
                        <button id="btn" onClick={() => { billgenerate(key.id) }}>Generate Bill</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button id="btn" onClick={() => { myDelete(key.id) }}>Delete</button>
                    </td>
                </tr>
            </>
        )
    })


    return (
        <>
            <div style={
                {
                    height: '80vh',
                    width: '100%',
                    padding: '10px',
                    border: '2px solid',
                    overflowY: 'scroll'
                }
            }>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>For Hour</th>
                            <th>No. of Tables</th>
                            <th>No. of Peoples</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                </Table>
            </div>
            <ToastContainer />
        </>
    )
}
export default Display;