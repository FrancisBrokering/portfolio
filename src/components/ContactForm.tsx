import { Button, Grid, GridItem, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Textarea } from '@chakra-ui/react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
export function ContactForm() {
    const [state, handleSubmit] = useForm("xoqzaqoj");
    return (
        <form onSubmit={handleSubmit}>
            <h2>Get In Touch</h2>
            <Grid templateRows='repeat(6, 1fr)' templateColumns='repeat(4, 1fr)' gap='7px'>
                <GridItem colSpan={4} rowSpan={1} className="px-1">
                    <input id="fullName" type="fullName" name="Full Name" placeholder="Full Name" />
                </GridItem>
                <GridItem colSpan={4} rowSpan={1} className="px-1">
                    <input id="email" type="email" name="email" placeholder="Email Address" />
                </GridItem>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <GridItem colSpan={4} rowSpan={3} className="px-1">
                    <Textarea h='100%' id="message" name="message" placeholder="Message" />
                    <Popover placement='right'>
                        <PopoverTrigger>
                            <Button className='contact-button' >
                                {state.succeeded ? <span>Message Sent!</span> : <span>Send</span>}
                            </Button>
                        </PopoverTrigger>
                        {!state.succeeded &&
                            <PopoverContent color='black'>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader fontWeight='semibold'>Confirmation!</PopoverHeader>
                                <PopoverBody>Are you sure you want to send this email?</PopoverBody>
                                <PopoverFooter display='flex' justifyContent='flex-end'>
                                    <Button w='20%' type="submit" disabled={state.submitting} colorScheme='green' >
                                        Yes
                                    </Button>
                                </PopoverFooter>
                            </PopoverContent>
                        }
                    </Popover>
                </GridItem>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

            </Grid>
        </form>
    );
}