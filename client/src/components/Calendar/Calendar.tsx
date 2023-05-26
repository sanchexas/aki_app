import React, { useRef } from 'react';
import classnames from 'classNames';

import * as calendar from './calendar';

import './index.css';

export default class Calendar extends React.Component {
    monthSelect = useRef<HTMLSelectElement>(null);
    yearSelect = useRef<HTMLSelectElement>(null);
    
    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };
    p:any = this.props;
    state = {
        date: this.p.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        
        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);
        
        this.setState({ date });
    };

    handleSelectChange = () => {
        const year:any = this.yearSelect.current?.value;
        const month:any = this.monthSelect.current?.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = (date:any) => {
        this.setState({ selectedDate: date });
        this.p.onChange(date);
    };

    render() {
        const { years, monthNames, weekDayNames }:any = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div className="calendar">
                <header>
                    <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

                    <select
                        ref={this.monthSelect}
                        value={this.month}
                        onChange={this.handleSelectChange}
                    >
                        {monthNames.map((name:any, index: number) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>

                    <select
                        ref={this.yearSelect}
                        value={this.year}
                        onChange={this.handleSelectChange}
                    >
                        {years.map((year:any) =>
                            <option key={year} value={year}>{year}</option> 
                        )}
                    </select>

                    <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                </header>

                <table>
                    <thead>
                        <tr>
                            {weekDayNames.map((name:any)=>
                                <th key={name}>{name}</th>    
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {monthData.map((week:any, index:number) =>
                            <tr key={index} className="week">
                                {week.map((date:any, index: number) => date ?
                                    <td
                                        key={index}
                                        className={classnames('day', {
                                            'today': calendar.areEqual(date, currentDate),
                                            'selected': calendar.areEqual(date, selectedDate)
                                        })}
                                        onClick={() => this.handleDayClick(date)}
                                    >{date.getDate()}</td>
                                    :
                                    <td key={index} />
                                )}
                            </tr> 
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
