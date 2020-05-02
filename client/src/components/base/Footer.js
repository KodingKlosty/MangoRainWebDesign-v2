import React, {Component} from 'react'
import '../../styles/footer.scss'

class Footer extends Component {
    render (){
        return(
            <div>
                <div className='breakerBar'></div>
                <div className='footerdiv'>
                    <div className='centerFooter'> &copy; 2020 Mango Rain Productions, LLC </div>
                </div>
            </div> // End Main div
        )  // End Return
    } // End Render
}

export default Footer