import {useEffect, useState} from 'react';
import Content from "../layouts/Content.jsx";
import DataTable from "react-data-table-component";
import {data} from "../services/data.jsx";

const customStyles = {
    head: {
        style: {
            fontSize: '16px'
        },
    },
    rows: {
        style: {
            minHeight: '72px',
            fontSize: '16px'
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
}

const columns = [
    {name: 'NO', selector: row => row.no, sortable: true},
    {name: 'MONO', selector: row => row.mono, sortable: true},
    {name: 'SONO', selector: row => row.sono, sortable: true},
    {name: 'DINO', selector: row => row.dino, sortable: true},
    {name: 'CUSTNAME', selector: row => row.custname, sortable: true},
    {name: 'LASTUPDATE', selector: row => row.lastupdate, sortable: true},
    {
        name: 'STATUS',
        selector: row => row.status,
        sortable: true,
        cell: row => (
            <div
                style={{
                    backgroundColor: getStatusBackgroundColor(row.status),
                    color: 'white',
                    padding: '4px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    fontSize : '12px'
                }}
            >
                {row.status}
            </div>
        ),
    },
];
const getStatusBackgroundColor = (status) => {
    switch (status) {
        case 'จัดส่งแล้ว':
            return 'rgba(63, 195, 128, 0.9)';
        case 'รอจัดสินค้า':
            return 'rgba(252, 202, 3, 0.9)';
        default:
            return 'rgba(0, 0, 0, 0.1)';
    }
};

function Point() {
    const months = Array.from({ length: 12 }, (_, i) => i + 1); // สร้าง array 1 ถึง 12 สำหรับเดือน
    const years = Array.from({ length: 21 }, (_, i) => i + 2000); // สร้าง array 2000 ถึง 2020 สำหรับปี
    const [rows, setRows] = useState([]);
    const [pending, setPending] = useState(true);
    useEffect(()=>{
        const timeout = setTimeout(() => {
            setRows(data);
            setPending(false);
        }, 100);
        return () => clearTimeout(timeout);
    },[]);
    return (
        <Content>
            <div className="card">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <span>จากเดือน :</span>
                        </div>
                        <div className="col-auto">
                            <select name="fromMonth" id="fromMonth" className="form-select">
                                {months.map((month) => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-auto">
                            <span>ถึง :</span>
                        </div>
                        <div className="col-auto">
                            <select name="toMonth" id="toMonth" className="form-select">
                                {months.map((month) => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-auto">
                            <span>ปี :</span>
                        </div>
                        <div className="col-auto">
                            <select name="year" id="year" className="form-select">
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-primary">ค้นหา</button>
                        </div>
                    </div>
                    <div className={'row'}>
                        <DataTable
                            customStyles={customStyles}
                            columns={columns}
                            data={rows}
                            selectableRows
                            pagination
                            fixedHeader={true}
                        />
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default Point;
