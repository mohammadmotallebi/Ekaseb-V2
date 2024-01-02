import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {f7, ListInput, useStore} from "framework7-react";
import fa from "../lang/fa";
import {Dom7 as $$} from 'framework7'
import store from "../store/store";

const DatePicker = ({...rest}) => {

    const [days, setDays] = useState('');
    const [day, setDay] = useState({day: 0});
    const loading = useStore('loading')



  //   useEffect(() => {
  //       new Promise((resolve, reject) => {
  //           if (rest.hasOwnProperty('start_date')) {
  //               resolve(true)
  //           }
  //           reject(false)
  //       }).then (r => {
  //           if(r){
  //               store.dispatch('setLoading' ,true)
  //           }
  //       }).catch(r =>{
  //           store.dispatch('setLoading' ,r)
  //       })
  //
  //   }, [loading]);
  //
  // if (loading){
  //     return true
  // }



    const handleLeftToolbar = useMemo(() => (e) =>{

        const b = [];
        e.value.map(function (item) {
            b.push(parseInt(item, 10))
        });
        const week_day = new f7.params.date.moment(b.reverse()).toLocale('fa').format('dddd, DD MMMM YYYY')
        if (e.opened)
            e.$el.find('#left-toolbar').text(week_day)

    },[])

   const memoDate = useMemo(() => {

       let daysNumber = {a: [], b: []}, monthNumber = [], yearsNumber = [];
       if (daysNumber.a.length === 0) {
           for (let i = 1; i <= 31; i++) {
               daysNumber.a.push(i < 10 ? '0' + i : i.toString())
               if (i < 31)
                   daysNumber.b.push(i < 10 ? '0' + i : i.toString())
           }
       }
       for (let i = 1; i <= 12; i++) {
           monthNumber.push(i < 10 ? '0' + i : i.toString())

       }
       for (let i = (rest.minYear > rest.value.split('/').reverse()[2]) ? rest.value.split('/').reverse()[2] : rest.minYear ; i <= rest.maxYear; i++) {
           yearsNumber.push(i.toString())
       }
       return {daysNumber,monthNumber,yearsNumber}
   }, []);

    // useEffect(() => {
    //             setValue([rest.value.split('/').reverse()])
    //     },
    //     [value[0]]);


    useEffect(() => {
        let node = null;

        if ($$(`#${rest.parentId}`)[0].firstChild === null) {
            node = document.createElement("ul");
            node.className = 'row no-gap'
            node.innerHTML = `<li class="${rest.className}"><div class="item-content item-input ${rest.outline && ' item-input-outline'}">
                            <div class="item-inner">
                            <div class="item-title item-label  ${rest.floatingLabel && '  item-floating-label'}">${rest.label}</div>
                            <div class="item-input-wrap">
                            <input name="${rest.name}" id="${rest.id}" type="text" placeholder="${rest.placeholder}" class="text-align-center" value="" style="direction: ltr;">
                            <span class="input-clear-button ${!rest.clearButton && ' display-none'}"></span>
                            </div></div></div></li>`
        } else {
            node = document.createElement("li");
            node.innerHTML = `<div class="item-content item-input ${rest.outline && ' item-input-outline'}">
                            <div class="item-inner">
                            <div class="item-title item-label  ${rest.floatingLabel && '  item-floating-label'}">${rest.label}</div>
                            <div class="item-input-wrap">
                            <input name="${rest.name}" id="${rest.id}" type="text" placeholder="${rest.placeholder}" class="text-align-center" value="" style="direction: ltr;">
                            <span class="input-clear-button ${!rest.clearButton && ' display-none'}"></span>
                            </div></div></div>`
            if (rest.className) {
                node.className = rest.className
            }
        }


        // node.textContent('')
        // const l = f7.$el.find('form#profile ul')[0].childNodes.item(7).after(node)
        if ($$(`#${rest.parentId}`)[0].firstChild === null) {
            $$(`#${rest.parentId}`).append(node)
        } else {
            $$(`#${rest.parentId} ul`)[0].childNodes.item(rest.indexAfter).after(node)
        }
    }, []);


  useEffect(() => {
       const p = f7.picker.create({
            inputEl: `#${rest.id}`,
            rotateEffect: true,
            renderToolbar: function ($f7) {
                return `<div class="toolbar">
                    <div class="toolbar-inner">
                    <div class="left">
                    <span class="badge mr-2" id="left-toolbar" style="background-color: rgba(var(--f7-theme-color-rgb)"></span>
                    </div>
                    <div class="right display-flex align-items-center">
                    <a href="#" id="set_today" class="button button-round button-fill button-small">${fa.today}</a>
                    <a href="#" class="link sheet-close popover-close">${fa.close_icon}</a>
                    </div>
                    </div>
                    </div>`
            },
            toolbarCloseText: fa.close_icon,
            value: rest.value.split('/').reverse(),
            formatValue: function (values) {
                return values[2] + '/' + values[1] + '/' + values[0];
            },
            cols: [
                {
                    textAlign: 'center',
                    width: '30%',
                    values: (days === 31) ? memoDate.daysNumber.a :
                        memoDate.daysNumber.b,
                    onChange(v, e) {
                        setDay({day: e})
                    },
                },
                {
                    textAlign: 'center',
                    width: '30%',
                    values: memoDate.monthNumber,
                    displayValues: f7.params.date.months.reverse(),
                    onChange(v, e) {
                        if (e <= 6) {
                            if (v.cols[0].values.length !== 31) {
                                new Promise((resolve, reject) => {
                                    setDay(prevState => {
                                        prevState.day && resolve(prevState)
                                        return {...prevState, day: !prevState.day}
                                    })

                                }).then(r => {

                                    v.cols[0].replaceValues(memoDate.daysNumber.a)
                                    v.cols[0].setValue(r.day)
                                })
                            }
                        } else {
                            if (v.cols[0].values.length !== 30) {
                                new Promise((resolve, reject) => {
                                    setDay(prevState => {
                                        prevState.day && resolve(prevState)
                                        return {...prevState, day: !prevState.day}
                                    })
                                }).then(r => {

                                    v.cols[0].replaceValues(memoDate.daysNumber.b)
                                    v.cols[0].setValue(r.day)
                                })


                            }


                        }
                    }
                },
                {
                    textAlign: 'center',
                    width: '30%',
                    values: memoDate.yearsNumber
                },
            ],
            on: {
                init(v) {
                    v.setValue(rest.value.split('/').reverse())
                    if (parseInt(v.value[1]) <= 6) {
                        setDays('31')
                    } else {
                        setDays('30')
                    }
                    setDay({day: parseInt(v.value[0])
                })
                },
                change(v) {
                    handleLeftToolbar(v)

                },
                 opened(v) {
                    handleLeftToolbar(v)
                     if (parseInt(v.value[1]) <= 6) {
                         setDays('31')
                     } else {
                         setDays('30')
                     }
                     v.$el.find (  'a#set_today').on('click',(e) => {

                             v.setValue(f7.params.date.fullDateArray)
                    })
                }


            }
        })
    }, []);



}


export default DatePicker;