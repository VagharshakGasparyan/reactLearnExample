import { useState, useEffect, useRef } from "react";
import { Button, Input, Select, Space, Modal } from 'antd';

export default function Test(){

    let [inpValues, setInpValues] = useState([]);
    let [inpCount, setInpCount] = useState(4);
    let [showModal, setShowModal] = useState(false);
    let [myText, setMyText] = useState('1234');
    let [trueOrFalse, setTrueOrFalse] = useState('ՍԽԱԼԱ');
    const inpRefs = useRef({});


    const generateText = (selVal) => {
        let words = '0123456789abcdefghijklmnopqrstuvwxwz';
        let generated = '';
        for(let i = 0; i < selVal; i++){
            let n = Math.floor(words.length * Math.random());
            let word = words[n];
            generated += word;
        }
        // console.log(selVal);
        // inpCount = selVal;
        setMyText(generated);
    }
    const changeInpValues = (selVal) => {
        inpValues = [];
        for(let i = 0; i < selVal; i++){
            inpValues.push('');
        }
        console.log(inpValues);
        setInpValues(inpValues);

    }
    useEffect(() => {
        generateText(inpCount);
        changeInpValues(inpCount);
    }, []);

    const handleInput = (e, i) => {
        let val = e.target.value;
        inpValues[i] = val;
        setInpValues([...inpValues]);
        console.log(inpValues);
        if(val !== ''){
            for(let i1 = 0; i1 < inpCount; i1++){
                let j = i + i1 + 1;
                j = j >= inpCount ? j - inpCount : j;
                // console.log(j, inpRefs.current[j].input.value);
                if(inpRefs.current[j].input.value === ''){
                    inpRefs.current[j].focus();
                    break;
                }
            }
        }
        let show = true;
        let words = '';
        for(let i2 = 0; i2 < inpCount; i2++){
            words += inpRefs.current[i2].input.value;
            if(inpRefs.current[i2].input.value === ''){
                show = false;
            }
        }
        if(show){
            setTrueOrFalse( words === myText ? 'ՃԻՇՏԱ' : 'ՍԽԱԼԱ');
            setShowModal(true);
        }
        // console.log(val, i);
    };

    const handleChange = (selVal) => {
        selVal = parseInt(selVal);
        generateText(selVal);
        changeInpValues(selVal);
        setInpCount(selVal);
    };
    const handleOk = () => {

        for(let i = 0; i < inpCount; i++){
            inpValues[i] = '';
        }
        setInpValues([...inpValues]);
        setShowModal(false);
    };
    const handleCancel = () => {
        setShowModal(false);
    };


    return (
        <>
            {/*<div>aaa{inpValues.join('-')}bbb</div>*/}
            <h1 style={{textAlign:'center'}}>TEST</h1>
            <Space direction="vertical" size="large" align={'center'} style={{display:'flex', justifyContent:'center'}} >
                <Space.Compact>
                    {Array(inpCount).fill(0).map((n, i)=> <Input
                        ref={(el) => inpRefs.current[i] = el} maxLength={1}
                        key={'abc' + i} size="large" style={{ width: '50px', textAlign: 'center' }}
                        defaultValue={''}
                        onInput={(e)=>{handleInput(e, i)}}
                        value={inpValues[i]}
                    />)}
                </Space.Compact>
                <Space.Compact>
                    <Select
                        defaultValue="4"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={[
                            {value: '4', label: 'Չորս հատ'},
                            {value: '5', label: 'Հինգ հատ',},
                            {value: '6', label: 'Վեց հատ',},
                            {value: '7', label: 'Յոթ հատ',/* disabled: true,*/},
                        ]}
                    />
                </Space.Compact>
            </Space>
            <Modal title="Ճիշտ ու սխալի ցուցադրում" open={showModal} onOk={handleOk} onCancel={handleCancel}>
                <h1>{trueOrFalse}</h1>
            </Modal>
            <div style={{fontSize: '50px', textAlign:'center'}}>{myText}</div>
        </>
    );
}