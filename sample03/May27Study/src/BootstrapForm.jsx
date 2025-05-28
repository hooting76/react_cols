import { Badge, Label, Input } from 'reactstrap'
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";

import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/style_ans.css'

function BootstrapForm() {

    return (
        <div className="wrap">

            {/* <!-- 이름 --> */}
            <div className="input-fld-pnl" id="id-fld">

                {/* 
                <label for="name">
                    <span className="txt-label">이름</span>
                </label>
                <input className="input-fld" type="text" id="name" name="name" required /> */}
                <MdOutlinePerson size="1.5rem" color="#333" className="mt-2" />

                {/* bootstrap 간격 : https://getbootstrap.com/docs/5.3/utilities/spacing/ */}
               
                <Label for="name" className="mt-2">이름</Label>

                <Input id="name" name="name" 
                       placeholder="이름을 입력하십시오" />
            </div>
            {/* <!--// 이름 --> */}

            <div className="input-fld-pnl">
                <MdOutlineMailOutline  size="1.5rem" color="#333" className="mt-2" />
                <Label for="email" className="mt-2">이메일</Label>

                <Input id="email" name="email" 
                       placeholder="이메일을 입력하십시오" />                
            </div>

            <div className="input-fld-pnl">
                <MdOutlinePhoneIphone size="1.5rem" color="#333" className="mt-2" />
                <Label for="phone" className="mt-2">번호</Label>

                <Input id="phone" name="phone" 
                       placeholder="000-0000-0000" />                            
            </div>

            <div className="input-fld-pnl">
                <MdOutlineDescription size="1.5rem" color="#333" className="mt-2" />
                <Label for="Description" className="mt-2">내용</Label>

                <Input id="Description" name="Description" type='textarea'
                       placeholder="to ask..." />                      
            </div>

            <div className="input-fld-pnl">
                <Input id="reset" name='reset' type='reset' placeholder='초기화'/>
                <Input id="submit" name='submit' type='submit' placeholder='전송'/>
                {/* 사실 리액트에선 submit 같은 TYPE은 권장되지 않음. */}
            </div>            

        </div>
    )
}

export default BootstrapForm