import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCardBody,
    MDBCard

}
    from 'mdb-react-ui-kit';

function Registration() {
    const [signIn, setSignIn] = useState(true);

    const navigate = useNavigate();
    const toMainPage = () => {navigate('/shorten')};

    const handleSignIn = (value) => {
        setSignIn(value);
    };

    return (
        <MDBContainer className="my-5 gradient-form">

            <MDBRow>

                <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '600px'}}>
                    <div className="text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                             style={{width: '185px'}} alt="logo" />
                        <h4 className="mt-1 pb-1">We are Team 5</h4>
                    </div>

                    {signIn && <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                            <h3 className="fw-bold text-uppercase">Login</h3>
                            <p className="text-white-50">Please enter your username and password!</p>

                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address'
                                      id='formControlLg' type='email' size="lg"/>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password'
                                      id='formControlLg' type='password' size="lg"/>

                            <MDBBtn onClick={toMainPage} outline className='mx-2 px-5' color='white' size='lg'>
                                Login
                            </MDBBtn>

                            <div>
                                <p className="mt-5">Don't have an account? <a href="#!" onClick={() => handleSignIn(false)} className="text-white-50 fw-bold">Sign Up</a>
                                </p>

                            </div>
                    </MDBCardBody>}

                    {(!signIn) && <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                        <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                        <p className="text-white-50 mb-5">Please fill your information below</p>

                        <MDBInput wrapperClass='mb-4 w-100' label='Name' labelClass='text-white' id='form1' type='text' size='lg'/>
                        <MDBInput wrapperClass='mb-4 w-100' label='Username' labelClass='text-white' id='form1' type='text' size='lg'/>
                        <MDBInput wrapperClass='mb-4 w-100' label='Email' labelClass='text-white' id='form1' type='email' size='lg'/>
                        <MDBInput wrapperClass='mb-4 w-100' label='Password' labelClass='text-white' id='form1' type='password' size='lg'/>

                        <MDBBtn onClick={toMainPage} outline className='mx-2 px-5' color='white' size='lg'>
                            Sign Up
                        </MDBBtn>

                        <div>
                            <p className="mt-5">Already have an account? <a href="#!" onClick={() => handleSignIn(true)} className="text-white-50 fw-bold">Sign In</a>
                            </p>

                        </div>
                    </MDBCardBody>}


                    {/*<MDBCol col='12' className="mb-5">*/}
                    {/*<div className="d-flex flex-column ms-5">*/}

                    {/*    <div className="text-center">*/}
                    {/*        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"*/}
                    {/*             style={{width: '185px'}} alt="logo" />*/}
                    {/*        <h4 className="mt-1 mb-5 pb-1">We are Team 5</h4>*/}
                    {/*    </div>*/}

                    {/*    <MDBTabs pills justify className='d-flex flex-row justify-content-between'>*/}
                    {/*        <MDBTabsItem>*/}
                    {/*            <MDBTabsLink  color="transparent" onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>*/}
                    {/*                Login*/}
                    {/*            </MDBTabsLink>*/}
                    {/*        </MDBTabsItem>*/}

                    {/*        <MDBTabsItem>*/}
                    {/*            <MDBTabsLink color="transparent" onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>*/}
                    {/*                Register*/}
                    {/*            </MDBTabsLink>*/}
                    {/*        </MDBTabsItem>*/}
                    {/*    </MDBTabs>*/}

                    {/*    <MDBTabsContent >*/}
                    {/*        <MDBTabsPane show={justifyActive === 'tab1'}>*/}
                    {/*            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>*/}
                    {/*            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>*/}


                    {/*            <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>*/}

                    {/*        </MDBTabsPane>*/}

                    {/*        <MDBTabsPane show={justifyActive === 'tab2'}>*/}

                    {/*            <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>*/}
                    {/*            <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>*/}
                    {/*            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>*/}
                    {/*            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>*/}

                    {/*            <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign up</MDBBtn>*/}

                    {/*        </MDBTabsPane>*/}
                    {/*    </MDBTabsContent>*/}
                    {/*</div>*/}
                    {/*</MDBCol>*/}
                </MDBCard>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column  justify-content-center h-100 mb-4">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">We are more than just a company</h4>
                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                    </div>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Registration;