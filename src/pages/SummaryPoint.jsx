import Content from "../layouts/Content.jsx";
import DataTable from 'react-data-table-component';
import {data} from "../services/data.jsx";


const columns = [
    { name: 'NO', selector: row => row.no, sortable: true },
    { name: 'MONO', selector: row => row.mono, sortable: true },
    { name: 'SONO', selector: row => row.sono, sortable: true },
    { name: 'DINO', selector: row => row.dino, sortable: true },
    { name: 'CUSTNAME', selector: row => row.custname, sortable: true },
    { name: 'LASTUPDATE', selector: row => row.lastupdate, sortable: true },
    { name: 'STATUS', selector: row => row.status, sortable: true },
];

const customStyles = {
    head : {
        style: {
            fontSize : '16px'
        },
    },
    rows: {
        style: {
            minHeight: '72px',
            fontSize : '16px'
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



function SummaryPoint() {
    return (
        <Content>
            <div className={'row'}>
                <div className={'col-12'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <DataTable
                                       customStyles={customStyles}
                                columns={columns}
                                data={data}
                                selectableRows
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default SummaryPoint;
