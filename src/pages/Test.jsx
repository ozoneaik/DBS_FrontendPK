import {Doughnut} from 'react-chartjs-2';
import {ArcElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip} from 'chart.js';
import {useEffect, useState} from "react";
import Content from "../layouts/Content.jsx";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

// ฟังก์ชันเพื่อสร้างข้อมูลจำลองจำนวนมาก
const generateLargeDataSet = (size) => {
    const data = [];
    for (let i = 0; i < size; i++) {
        data.push({
            id: i + 1,
            year: 2000 + i,
            userGain: Math.floor(Math.random() * 100000), // สร้างค่าผู้ใช้ที่เพิ่มขึ้นแบบสุ่ม
            userLost: Math.floor(Math.random() * 10000)  // สร้างค่าผู้ใช้ที่สูญเสียแบบสุ่ม
        });
    }
    return data;
};

function Test() {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Users Gained",
                data: [],
                backgroundColor: "rgba(75,192,192,1)",
            }
        ]
    });

    useEffect(() => {
        const largeDataSet = generateLargeDataSet(4);
        setChartData({
            labels: largeDataSet.map((data) => data.year.toString()),
            datasets: [
                {
                    label: "Users Gained",
                    data: largeDataSet.map((data) => data.userGain),
                    backgroundColor: "rgba(75,192,192,1)",
                }
            ]
        });
    }, []);

    return (
        <Content>
            <div className={'card'}>
                <div className={'card-body'}>
                    <div className={'row'}>
                        <div className={'col-md-6 col-sm-12'}>
                            <Doughnut data={chartData}/>
                        </div>
                        <div className={'col-md-6 col-sm-12'}>
                            <Doughnut data={chartData}/>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default Test;
