import React from 'react'
import { Dropdown, Button } from 'element-react'
import 'element-theme-default/lib/dropdown.css'

class Operate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      btnTypes: props.opts,
      btnMap: {
        view: <Button className="c-blue text-btn" type="text" size="small" onClick={() => { this.props.onClickOperate('view') }}>查看</Button>,
        edit: <Button className="c-blue text-btn" type="text" size="small" onClick={() => { this.props.onClickOperate('eidt') }}>编辑</Button>,
        switchOn: <Button className="c-blue text-btn" type="text" size="small" onClick={() => { this.props.onClickOperate('switchOn') }}>启用</Button>,
        switchOff: <Button className="c-blue text-btn" type="text" size="small" onClick={() => { this.props.onClickOperate('switchOff') }}>停用</Button>,
        auth: <Button className="c-blue text-btn" type="text" size="small" onClick={() => { this.props.onClickOperate('auth') }}>分配权限</Button>,
        muteOn: <Button className="c-blue text-btn" type="text" size="small" onClick={() => { this.props.onClickOperate('muteOn') }}>静默</Button>,
        muteOff:  <Button className="c-blue text-btn" type="text" size="small" onClick={() => { this.props.onClickOperate('muteOff') }}>取消静默</Button>,
        ticket: <Button className="c-blue text-btn" type="text" size="small" onClick={() => { this.props.onClickOperate('ticket') }}>发券</Button>,
      },
      item: props.item
    }
  }

  render() {
    let btns = this.state.btnTypes.map((item)=>{
      return this.state.btnMap[item]
    })

    return (
      <>
       {
         btns.length <= 4 ? btns :
         <>
         <span>{btns.slice(0, 3)}</span>
       <span className="relative">
       <Dropdown menu={(
          <Dropdown.Menu className="c-blue">
            {
            (btns.slice(3)).map((item)=>{
              return (<Dropdown.Item className="fz-12 lh-20 c-blue">
                {item}
                </Dropdown.Item>)
              
            })
          }
          
          </Dropdown.Menu>
        )}>
          <span className="el-dropdown-link c-blue fz-12 ">
            <span className="ml-10 relative">更多</span><i className="el-icon-caret-bottom el-icon--right"></i>
          </span>
        </Dropdown>
        </span>
        </>
       }
      </>
       
    )
  }
}

export default Operate