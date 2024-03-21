import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <div>
            <>
                <MDBNavbar light bgColor='secondary'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='/' style={{color:'white', fontWeight:'600',fontSize:'2rem'}}>
                        <i class="fa-solid fa-user-doctor me-2"></i>
                          Doctor Appointment
                        </MDBNavbarBrand>
                    </MDBContainer>
                </MDBNavbar>
            </>


        </div>
    )
}

export default Header