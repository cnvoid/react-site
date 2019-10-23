import React from 'react'

class WaterMark extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      img: ''
    }
    this.id = Math.random().toFixed(36)
    this.dom = {}
    this.img = ''

  }

  componentDidMount() {

    let canvas = document.getElementById('waterMarkCanvas')
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(0,0,0,1)'

      ctx.rotate(-30 * Math.PI / 180)
      ctx.font = "14px serif"
      ctx.textBseline = 'alphabetic'
      ctx.fillStyle = 'rgba(183,185,190,.5)'
      ctx.fillText("Sample String", 0, 100);

      this.setState({
        img: canvas.toDataURL('image/png', 0.2)
      })
    }
    this.dom = document.getElementById(this.id)
    setInterval(() => {
      let w3 = document.getElementById(this.id)
      if (this.refs.waterMark != w3) {
        document.getElementById('root').insertAdjacentElement('afterEnd', this.dom)
      }
    }, 2000)
    this.refs.waterMark.remove()
  }

  render() {
    return (<div id={this.id} ref="waterMark" style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      background: 'rgba(0,0,0,0) url(' + this.state.img + ')',
      pointerEvents: 'none',
      zIndex: this.props.zIndex || 6
    }}>
      <canvas width="200" height="115" id="waterMarkCanvas"></canvas>
    </div>)
  }
}

export default WaterMark