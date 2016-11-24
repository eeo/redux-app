import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
    constructor(props) {
        super(props);
    }
    onYearBtnClick(e) {
        console.log(e)
        this.props.setYear(+e.target.textContent)
    }
    render() {
        const { year, photos } = this.props
        return <div className='ib page'>
                    <p>
                        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2016</button>{' '}
                        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2015</button>{' '}
                        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2014</button>
                    </p>
                    <h3>{year} год</h3>
                    <p>У тебя {photos.length} фото.</p>
                </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
}
