import React, {useState} from 'react';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from "react-share";
import {Alert} from "@mui/material";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function Shorten() {
    const [showShortURL, setShowShortURL] = useState(false);
    const [shortenedURL, setShortenedURL] = useState('');

    const handleChange = (event) => {
        setShortenedURL(event.target.value);
    }

    const handleShortenClick = (show) => {
        if (show) {
            setShowShortURL(true);
        } else {
            setShowShortURL(false);
        }
    };

    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                {/*<MDBCol col='12'>*/}

                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '700px'}}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                            <h2 className="fw-bold mb-2 text-uppercase">Generate Shortened URL</h2>

                            <MDBRow>
                                <MDBCol col='6' >
                                    <MDBInput value={shortenedURL} onChange={handleChange}
                                        wrapperClass='mb-4 mx-5 w-100' labelClass='text-white'
                                              label='Original URL' id='oriURL' type='url' size="lg"/>
                                </MDBCol>

                                <MDBCol col='6'>
                                    <MDBBtn onClick={() => handleShortenClick(true)} outline className='mx-5 px-5' color='white' size='lg'>
                                        Shorten
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>

                            {showShortURL &&
                                <MDBRow className='mb-3'>
                                    <Alert onClose={() => handleShortenClick(false)}>Your Shortened URL is: bit.ly/2WptDlc </Alert>
                                </MDBRow>
                            }


                            <p className='mb-1'> Share With: </p>

                            <MDBRow>
                                <MDBCol size='md'>
                                <FacebookShareButton
                                    url={"bit.ly/2WptDlc"}
                                >
                                    <MDBIcon fab icon='facebook-f' size="lg"/>
                                </FacebookShareButton>
                                </MDBCol>

                                <MDBCol size='md'>
                                <TwitterShareButton
                                    url={"bit.ly/2WptDlc"}
                                >
                                    <MDBIcon fab icon='twitter' size="lg"/>
                                </TwitterShareButton>
                                </MDBCol>
                                
                                <MDBCol size='md'>
                                <EmailShareButton
                                    url={"bit.ly/2WptDlc"}>
                                    <MDBIcon fab icon='google' size="lg"/>
                                </EmailShareButton>
                                </MDBCol>
                            </MDBRow>

                        </MDBCardBody>
                    </MDBCard>
                {/*</MDBCol>*/}
            </MDBRow>

        </MDBContainer>
    );
}

export default Shorten;
