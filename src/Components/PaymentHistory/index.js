import React, { useState, Fragment } from 'react';
import _ from 'lodash'
import ListItem from './ListItem'
const PaymentHistory = (props) => {
    let payments = _.chunk(props.Payments, 5);
    let [page, setPage] = useState(0);
    
    let handleBtnPrevClick = () => {
        let _page = page 
        if( _page <= 0 ) {
            _page = payments.length -1;
        }
        else {
            _page--;
        }
      setPage(_page)
    }

    let handleBtnNextClick = () => {
        let _page = page 
        if( _page >= payments.length -1) {
            _page = 0;
        }
        else {
            _page++;
        }
        setPage(_page)
    }
    if (payments.length) {
        return (
            <Fragment>
                <div>
                    {
                        payments[page].map(e => <ListItem Post={e} />)
                    }
                </div>
                <div className="pagination">
                    <span onClick={handleBtnPrevClick} className={'title-link'}> &lt;&lt;  </span>
                    <span onClick={handleBtnNextClick} className={'title-link'}> &gt;&gt; </span>
                </div>

            </Fragment>
        )
    }
    else
        return null
}

export default PaymentHistory;