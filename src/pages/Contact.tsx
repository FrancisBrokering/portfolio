import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { ContactForm } from "../components/ContactForm";
import TrackVisibility from 'react-on-screen';
import { Box, Button, Center, Grid, GridItem, Textarea } from "@chakra-ui/react";
import spaceBurger from "../assets/img/skiingPixelArt.png";

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
        <section className="contact" id="contact">
            <Box ml={'10%'} mr={'10%'}>
                
                <Grid templateRows='repeat(1, 1fr)' templateColumns={{sm:'repeat(1, 1fr)',  md: 'repeat(8, 1fr)'}} gap='10px' alignItems="center">
                    <GridItem colSpan={4}>
                        <Center>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={spaceBurger} alt="Contact Us" />
                                }
                            </TrackVisibility>
                        </Center>
                    </GridItem>
                    <GridItem colSpan={4}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <ContactForm/>
                                </div>}
                        </TrackVisibility>
                    </GridItem>
                </Grid>
            </Box>
        </section>
    )
}
