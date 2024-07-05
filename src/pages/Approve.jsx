import Content from "../layouts/Content.jsx";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import {useState} from "react";
import ApproveNowComponent from "../components/Approve/ApproveNowComponent.jsx";
import ApprovePendingComponent from "../components/Approve/ApprovePendingComponent.jsx";

function Approve() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleDateRangeChange = (selectedDates) => {
        setDateRange(selectedDates);
    };
    return (
        <Content>
            <div className={'card'}>
                <div className={'card-body'}>
                    <div className={'row'}>
                        <div className={'col-lg-8 col-sm-6'}>
                            <div className={'form-group'}>
                                <label htmlFor="">ค้นหา ชื่อลูกค้า / รหัสลูกค้า / serial</label>
                                <input type="text" className={'form-control'}
                                       value={searchTerm}
                                       onChange={handleSearchTermChange}/>
                            </div>
                        </div>
                        <div className={'col-lg-4 col-sm-6'}>
                            <div className={'form-group'}>
                                <label htmlFor="">เลือกวันที่</label>
                                <Flatpickr
                                    options={{mode: 'range', dateFormat: 'Y-m-d'}}
                                    value={dateRange}
                                    onChange={handleDateRangeChange}
                                    className={'form-control'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'my-2 d-flex justify-content-start'}>
                        <div className={'me-5'}>
                            <input type="checkbox" id={'cus-pending'} className={'me-2'}/>
                            <label htmlFor={'cus-pending'}>รอลูกค้า</label>
                        </div>
                        <div className={''}>
                            <input type="checkbox" id={'cus-spares'} className={'me-2'}/>
                            <label htmlFor={'cus-spares'}>รออะไหล่</label>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <ApproveNowComponent/>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <ApprovePendingComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default Approve;