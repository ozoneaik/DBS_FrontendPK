import ProgressBar from "./ProgressBar.jsx";

const SalesByCategory = (props) => (
    <>
        <p className={'m-0'}>เครื่องใช้ไฟฟ้า</p>
        <div className={'d-flex justify-content-between align-content-center mb-3'}>
            <div style={{width: '90%'}}>
                <ProgressBar bgcolor={'#4d85f7'} progress={97} height={30}/>
            </div>
            <div>97%</div>
        </div>

        <p className={'m-0'}>เครื่องใช้ไฟฟ้า</p>
        <div className={'d-flex justify-content-between align-content-center'}>
            <div style={{width: '90%'}}>
                <ProgressBar bgcolor={'#4d85f7'} progress={50} height={30}/>
            </div>
            <div>97%</div>
        </div>
    </>
);

export default SalesByCategory;