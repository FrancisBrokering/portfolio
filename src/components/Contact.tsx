import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import { Box, Button, Center, Grid, GridItem, Textarea } from "@chakra-ui/react";

type messageStatus = {
    success: boolean,
    message: string,
}

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState<messageStatus>({ success: false, message: "" });

    const onFormUpdate = (category: any, value: any) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ success: true, message: 'Message sent successfully' });
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <section className="contact" id="connect">
            <Box ml={'10%'} mr={'10%'}>
                <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(8, 1fr)' gap='10px' alignItems="center">
                    <GridItem colSpan={4}>
                        <Center>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                                }
                            </TrackVisibility>
                        </Center>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Grid templateRows='repeat(6, 1fr)' templateColumns='repeat(4, 1fr)' gap='7px'>
                                            <GridItem colSpan={2} rowSpan={1} className="px-1">
                                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                            </GridItem>
                                            <GridItem colSpan={2} rowSpan={1} className="px-1">
                                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                            </GridItem>
                                            <GridItem colSpan={2} rowSpan={1} className="px-1">
                                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                            </GridItem>
                                            <GridItem colSpan={2} rowSpan={1} className="px-1">
                                                <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                            </GridItem>
                                            <GridItem colSpan={4} rowSpan={3} className="px-1">
                                                <Textarea value={formDetails.message} h='100%' placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></Textarea>
                                                <Button type="submit"><span>{buttonText}</span></Button>
                                            </GridItem>
                                            {
                                                status.message &&
                                                <GridItem>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </GridItem>
                                            }
                                        </Grid>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </GridItem>
                </Grid>
            </Box>
        </section>
    )
}
