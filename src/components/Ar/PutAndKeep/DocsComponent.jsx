const DocsComponent = () => {
    return (
        <>
            <div className={'form-group mb-3'}>
                <label htmlFor="">แฟ้มเอกสารหลัก</label>
                <select name="" id="" className={'form-control'}>
                    <option disabled={true} selected={true}>เลือกประเภทบิลหลัก</option>
                    <option value="">บิลวาง</option>
                    <option value="">บิลเก็บ</option>
                </select>
            </div>
            <div className={'form-group mb-3'}>
                <label htmlFor="">แฟ้มเอกสารรอง</label>
                <select name="" id="" className={'form-control'}>
                    <option disabled={true} selected={true}>เลือกประเภทบิลสำรอง</option>
                    <option value={''}>งามวง</option>
                </select>
            </div>
            <div className={'form-group mb-3'}>
            <label htmlFor="">เดือน วาง/เก็บ</label>
                <select name="" id="" className={'form-control'}>
                    <option selected={true}>เลือกเดือนทั้งหมด</option>
                    <option value="">1</option>
                    <option value="">1</option>
                </select>
            </div>
            <button className={'btn btn-primary w-100'}>ค้นหา</button>
            <div className={'row mt-3'}>
                <div className={'col-12'}>
                    <div className={'p-2 w-100 border border-1 rounded-2'}>
                        <div className={''}>
                            กิจชัยเจริญ (715421545)
                        </div>
                        <div className={'text-end'}>
                            <div>
                                <span style={{fontSize: 12}} className={'me-2'}>
                                    จำนวนบิล&nbsp;<span className="badge bg-primary">2</span>
                                </span>
                                <span style={{fontSize: 12}}>

                                    มูลค่า&nbsp;<span className="badge bg-primary">2</span>
                                </span>
                            </div>
                        </div>
                        <div className={'text-end'}>
                            <div>
                                <span style={{fontSize: 12}} className={'me-2'}>
                                    จำนวนบิล&nbsp;<span className="badge bg-danger">2</span>
                                </span>
                                <span style={{fontSize: 12}}>

                                    ดำเนินการ&nbsp;<span className="badge bg-danger">2</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DocsComponent;