import {useEffect, useState} from "react";
import {data} from "../../services/data.jsx";
import DataTable from "react-data-table-component";

const columns = [
    {name: 'รหัสลูกค้า', selector: row => row.no, sortable: true},
    {name: 'ชื่อลูกค้า', selector: row => row.mono, sortable: true},
    {name: 'เกรด', selector: row => row.sono, sortable: true},
    {name: 'ประเภทธุรกิจ', selector: row => row.dino, sortable: true},
    {name: '2022', selector: row => row.custname, sortable: true},
    {name: '2023', selector: row => row.lastupdate, sortable: true},
    {name: '2024', selector: row => row.lastupdate, sortable: true},
    {name: 'เป้า', selector: row => row.lastupdate, sortable: true},
    {name: 'เดือนปัจจุบัน', selector: row => row.lastupdate, sortable: true},
    {name: 'คิดเป็น', selector: row => row.lastupdate, sortable: true},

];

const customStyles = {
    head: {
        style: {
            fontSize: '16px',
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
            backgroundColor: '#7fa644',
        },
    },
    cells: {
        style: {
        },
    },
}

const CustListComponent = () => {
    const [rows, setRows] = useState([]);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(data);
            setPending(false);
        }, 100);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div>
            <div className={'d-flex justify-content-end'}>
                <div>
                    <input type="text" placeholder={'search'} className={'form-control mb-3'}/>
                </div>
            </div>
            <DataTable
                customStyles={customStyles}
                columns={columns}
                data={rows}
                selectableRows
                pagination
                fixedHeader={true}
                fixedHeaderScrollHeight="70dvh"
                progressPending={pending}
            />
        </div>

    )
};

export default CustListComponent;