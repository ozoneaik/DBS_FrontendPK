import Content from "../layouts/Content.jsx";
import '../assets/styles/servieces.css';
import { useState, useEffect } from 'react';
import { fakeData } from "../services/servicesData.jsx";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

function Services() {
    const [filteredData, setFilteredData] = useState(fakeData);
    const [searchTerm, setSearchTerm] = useState('');
    const [dateRange, setDateRange] = useState([null, null]);

    useEffect(() => {
        filterData();
    }, [searchTerm, dateRange]);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDateRangeChange = (selectedDates) => {
        setDateRange(selectedDates);
    };

    const filterData = () => {
        const results = fakeData.filter(item => {
            const matchesSearchTerm =
                item.ticket.includes(searchTerm) ||
                item.store.includes(searchTerm) ||
                item.issue.includes(searchTerm) ||
                item.parts.includes(searchTerm) ||
                item.deliveryNumber.includes(searchTerm);

            const matchesDateRange = () => {
                if (dateRange[0] && dateRange[1]) {
                    const startDate = new Date(item.startRepair);
                    const endDate = new Date(item.endRepair);
                    return (startDate >= dateRange[0] && startDate <= dateRange[1]) ||
                        (endDate >= dateRange[0] && endDate <= dateRange[1]);
                }
                return true;
            };

            return matchesSearchTerm && matchesDateRange();
        });
        setFilteredData(results);
    };

    return (
        <Content>
            <div className={'card'}>
                <div className={'card-body'}>
                    <div className={'row mb-3'}>
                        <div className={'col-8'}>
                            <div className={'form-group'}>
                                <label htmlFor="search">ค้นหา ชื่อลูกค้า / รหัสลูกค้า / serial</label>
                                <input
                                    type="text"
                                    className={'form-control'}
                                    id="search"
                                    value={searchTerm}
                                    onChange={handleSearchTermChange}
                                />
                            </div>
                        </div>
                        <div className={'col-4'}>
                            <div className={'form-group'}>
                                <label htmlFor="date">เลือกวันที่</label>
                                <Flatpickr
                                    options={{ mode: 'range', dateFormat: 'Y-m-d' }}
                                    value={dateRange}
                                    onChange={handleDateRangeChange}
                                    className={'form-control'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'table-responsive'}>
                        <table className={'table table-hover table-striped table-bordered'}>
                            <thead>
                            <tr>
                                <th>TICKET</th>
                                <th>ร้านค้า</th>
                                <th>อาการ</th>
                                <th>อะไหล่</th>
                                <th>เริ่มซ่อม</th>
                                <th>ซ่อมเสร็จ</th>
                                <th>ปิดงานซ่อม</th>
                                <th>เลขที่ส่งของ</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.ticket}</td>
                                    <td>{item.store}</td>
                                    <td>{item.issue}</td>
                                    <td>{item.parts}</td>
                                    <td>{item.startRepair}</td>
                                    <td>{item.endRepair}</td>
                                    <td>{item.closeRepair}</td>
                                    <td>{item.deliveryNumber}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default Services;
