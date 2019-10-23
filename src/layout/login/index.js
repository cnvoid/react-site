import React from 'react';
import { connect } from 'react-redux'
import style from '@/assets/css/login.styl'
import '@/assets/css/common.styl'
import { Layout, Input, Button, MessageBox, Message, Form } from 'element-react'

import {submitLogin } from '@/store/actions/user.act'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 60,
      msgBtnDisabled: false,
      msgBtnText: '获取验证码',
      form: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入密码'));
              } else {
                if (this.state.form.checkPass !== '') {
                  this.refs.form.validateField('checkPass');
                }
                callback();
              }
            }
          }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'));
              } else if (value !== this.state.form.pass) {
                callback(new Error('两次输入密码不一致!'));
              } else {
                callback();
              }
            }
          }
        ],
        age: [
          { required: true, message: '请填写年龄', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              var age = parseInt(value, 10);

              setTimeout(() => {
                if (!Number.isInteger(age)) {
                  callback(new Error('请输入数字值'));
                } else {
                  if (age < 18) {
                    callback(new Error('必须年满18岁'));
                  } else {
                    callback();
                  }
                }
              }, 1000);
            }, trigger: 'blur'
          }
        ]
      }
    }
  }

  componentDidMount() {

    // var canvas = document.getElementById("loginBgCanvas");
    // canvas.width = document.documentElement.clientWidth;
    // canvas.height = document.documentElement.clientHeight;
    // var ctx = canvas.getContext("2d");
  
    // function Ball() {
    //   this.x = randomNum(3, canvas.width - 3);
    //   this.y = randomNum(3, canvas.height - 3);
    //   this.r = randomNum(2, 5);
    //   this.color = '#E9F7FF'//randomColor();
    //   this.speedX = randomNum(-33, 33) * 0.2;
    //   this.speedY = randomNum(-33, 33) * 0.2;
    // }
    // Ball.prototype = {
    //   draw: function () {
    //     ctx.beginPath();
    //     ctx.globalAlpha = 1;
    //     ctx.fillStyle = this.color;
    //     ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    //     ctx.fill();
    //   },
    //   move: function () {
    //     this.x += this.speedX;
    //     this.y += this.speedY;
    //     if (this.x <= 3 || this.x > canvas.width - 3) {
    //       this.speedX *= -1;
    //     }
    //     if (this.y <= 3 || this.y >= canvas.height - 3) {
    //       this.speedY *= -1;
    //     }
    //   }
    // }

    // var balls = [];
    // for (var i = 0; i < 79; i++) {
    //   var ball = new Ball();
    //   balls.push(ball);
    // }
    // main();

    // function main() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   mouseLine();
    //   drawLine();
    //   window.requestAnimationFrame(main);
    // }

    // var mouseX;
    // var mouseY;
    // canvas.onmousemove = function (e) {
    //   var ev = window.evnt || e;
    //   mouseX = ev.offsetX;
    //   mouseY = ev.offsetY;
    // }

    // function drawLine() {
    //   for (var i = 0; i < balls.length; i++) {
    //     balls[i].draw();
    //     balls[i].move();
    //     for (var j = 0; j < balls.length; j++) {
    //       if (i != j) {
    //         if (Math.sqrt(Math.pow((balls[i].x - balls[j].x), 2) + Math.pow((balls[i].y - balls[j].y), 2)) < 80) {
    //           ctx.beginPath();
    //           ctx.moveTo(balls[i].x, balls[i].y);
    //           ctx.lineTo(balls[j].x, balls[j].y);
    //           ctx.strokeStyle = "#E9F7FF";
    //           ctx.globalAlpha = 0.2;
    //           ctx.stroke();
    //         }
    //       }
    //     }
    //   }
    // }

    // function mouseLine() {
    //   for (var i = 0; i < balls.length; i++) {
    //     if (Math.sqrt(Math.pow((balls[i].x - mouseX), 2) + Math.pow((balls[i].y - mouseY), 2)) < 80) {
    //       ctx.beginPath();
    //       ctx.moveTo(balls[i].x, balls[i].y);
    //       ctx.lineTo(mouseX, mouseY);
    //       ctx.strokeStyle = "#E9F7FF";
    //       ctx.globalAlpha = 0.8;
    //       ctx.stroke();
    //     }
    //   }
    // }

    // function randomNum(m, n) {
    //   return Math.floor(Math.random() * (n - m + 1) + m);
    // }

    // function randomColor() {
    //   return "rgb(" + randomNum(0, 255) + "," + randomNum(0, 255) + "," + randomNum(0, 255) + ")";
    // }
  }


  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.refs.form.validate((valid) => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }


  onClickMsg() {
    Message({
      type: 'info',
      message: '　短信已发出'
    })
    // MessageBox.msgbox({
    //   title: '消息',
    //   message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
    //   showCancelButton: true
    // }).then(action => {
    //   Message({
    //     type: 'info',
    //     message: 'action: ' + action
    //   });
    // })
    this.setState({
      msgBtnDisabled: true
    })
    let i = setInterval(() => {
      this.setState({
        msgBtnText: --this.state.time + '后重新获取'
      })
      if (this.state.time == 0) {
        this.setState({
          msgBtnDisabled: false,
          msgBtnText: '获取验证码'
        })
        clearInterval(i)
      }
    }, 1000)

  }

  render() {
    return (
      <div className={style.Layout}>
        <div className="bg-blur abs abs-center">
          <div className="rq-logo abs abs-center"></div>
          <div className="rq-text abs abs-center">如祺出行合作伙伴智能运营平台</div>
        </div>
        
        <div className="abs abs-center loginbox">
          <div className="logo abs"></div>
          <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="0" className="form-area">
            <Layout.Row className="mt-40">
              <Layout.Col span="13">
                <div className="title"><div>手机号登录</div></div>
              </Layout.Col>
            </Layout.Row>
            <Layout.Row className="mt-20">
              <Layout.Col span="24">
                <Form.Item prop="checkPass">
                  <div className=""><Input placeholder="请输入手机号码"></Input></div>
                </Form.Item>
              </Layout.Col>
            </Layout.Row>
            <Layout.Row gutter="20" >
              <Layout.Col span="24" className="relative">
                <Form.Item prop="checkPass">
                  <div className=""><Input maxLength={6} placeholder="请输入验证码"></Input></div>
                </Form.Item>
                <Button className="abs btn-msg" type="text" disabled={this.state.msgBtnDisabled} onClick={this.onClickMsg.bind(this)}>{this.state.msgBtnText}</Button>
              </Layout.Col>

            </Layout.Row>
            <Layout.Row>
              <Layout.Col span="24">
                <div className="mt-40"><Button onClick={this.props.submit.bind(this)} className="submit" type="primary" size="large">登录</Button></div>
              </Layout.Col>
            </Layout.Row>

          </Form>
        </div>
      </div>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    sideNav: state.sideNav,
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    submit(items, item) {
      dispatch(submitLogin())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
