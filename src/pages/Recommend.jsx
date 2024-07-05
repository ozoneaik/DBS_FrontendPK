import Content from "../layouts/Content.jsx";
import SumScComponent from "../components/Recommend/SumScComponent.jsx";
import CustListComponent from "../components/Recommend/CustListComponent.jsx";
import SearchComponent from "../components/Recommend/SearchComponent.jsx";

function Recommend() {

    return (
        <Content>
            <div className={'card'}>
                <div className={'card-body'}>
                    <div className={'row mb-3'}>
                        <div className={'col-12'}>
                            <SumScComponent/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'card'}>
                <div className={'card-body'}>
                    <div className={'row mb-3'}>
                        <div className={'col-12'}>
                            <CustListComponent/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'card'}>
                <div className={'card-header fw-bold'}>
                    ค้นหาข้อมูล
                </div>
                <div className={'card-body'}>
                    <div className={'row mb-3'}>
                        <div className={'col-12'}>
                            <SearchComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default Recommend;