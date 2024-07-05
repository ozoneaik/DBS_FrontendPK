import Content from "../layouts/Content.jsx";
import DataTable from 'react-data-table-component';
import {data} from "../services/data.jsx";
import {useEffect, useState} from "react";


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


function SummaryPoint() {
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
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <DataTable
                                customStyles={customStyles}
                                columns={columns}
                                data={rows}
                                selectableRows
                                pagination
                                fixedHeader={true}
                                fixedHeaderScrollHeight="70dvh"
                                progressPending={pending}
                                title={'ORDER LIST'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default SummaryPoint;
