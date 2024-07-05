import {useEffect, useState} from "react";
import {data} from "../../services/data.jsx";
import DataTable from "react-data-table-component";

const brands = ["ARCA", "ARCA ES", "ASAHI", "BIGBOSS", "FUJITSU", "HYBRID",];

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
        style: {},
    },
}

const SearchComponent = () => {
    const [rows, setRows] = useState([]);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(data);
            setPending(false);
        }, 100);
        return () => clearTimeout(timeout);
    }, []);
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className={'row'}>
                <div className={'col-lg-2 col-md-4 col-sm-6 form-group mb-3'}>
                    <label htmlFor="">แบร์น</label>
                    <select name="" id="" className={'form-select'}>
                        {
                            brands.map((item, index) => (
                                <option value="item" key={index}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={'col-lg-2 col-md-4 col-sm-6 form-group mb-3'}>
                    <label htmlFor="">หมวดหมู่</label>
                    <select name="" id="" className={'form-select'}>
                        {
                            brands.map((item, index) => (
                                <option value="item" key={index}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={'col-lg-2 col-md-4 col-sm-6 form-group mb-3'}>
                    <label htmlFor="">หมวดหมู่ย่อย</label>
                    <select name="" id="" className={'form-select'}>
                        {
                            brands.map((item, index) => (
                                <option value="item" key={index}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={'col-lg-2 col-md-4 col-sm-6 form-group mb-3'}>
                    <label htmlFor="">โปรโมชั่น</label>
                    <select name="" id="" className={'form-select'}>
                        {
                            brands.map((item, index) => (
                                <option value="item" key={index}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={'col-lg-2 col-md-4 col-sm-6 form-group mb-3'}>
                    <label htmlFor="">แนะนำ</label>
                    <select name="" id="" className={'form-select'}>
                        {
                            brands.map((item, index) => (
                                <option value="item" key={index}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={'col-lg-2 col-md-4 col-sm-6 form-group mb-3'}>
                    <label htmlFor="">ระยะห่างการซื้อ</label>
                    <select name="" id="" className={'form-select'}>
                        {
                            brands.map((item, index) => (
                                <option value="item" key={index}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={'col-12 mb-3'}>
                    <button className={'btn btn-sm btn-primary me-2'}>ค้นหา</button>
                    <button className={'btn btn-sm btn-primary me-2'}>ค้นหา</button>
                    <button className={'btn btn-sm btn-primary'}>ค้นหา</button>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-12'}>

                    <ul className="nav nav-tabs" id="custom-content-below-tab" role="tablist">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                                id="custom-content-below-home-tab"
                                data-toggle="pill"
                                href="#custom-content-below-home"
                                role="tab"
                                aria-controls="custom-content-below-home"
                                aria-selected={activeTab === 'home'}
                                onClick={() => handleTabClick('home')}
                            >
                                สินค้าเคยซื้อ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                                id="custom-content-below-profile-tab"
                                data-toggle="pill"
                                href="#custom-content-below-profile"
                                role="tab"
                                aria-controls="custom-content-below-profile"
                                aria-selected={activeTab === 'profile'}
                                onClick={() => handleTabClick('profile')}
                            >
                                สินค้าเคยซื้อ สินค้าแนะนำสำหรับธุรกิจ สินค้าใหม่
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content" id="custom-content-below-tabContent">
                        <div
                            className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}
                            id="custom-content-below-home"
                            role="tabpanel"
                            aria-labelledby="custom-content-below-home-tab"
                        >
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
                        <div
                            className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`}
                            id="custom-content-below-profile"
                            role="tabpanel"
                            aria-labelledby="custom-content-below-profile-tab"
                        >
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
                    </div>

                </div>
            </div>
        </>
    )
};

export default SearchComponent;