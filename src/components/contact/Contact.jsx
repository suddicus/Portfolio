import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uqwzoks', 'template_r5i8lki', form.current, 'iS8guvw6coa4SSHki')
        e.target.reset()//.then((result) => {
        //     console.log(result.text);
        // },(error) => {
        //     console.log(error.text);
        // });
};
    return (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2>Contact me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option__icon'/>
                        <h4>Email</h4>
                        <h5>suhdenzo04@gmail.com</h5>
                        <a href='mailto:donden5000@gmail.com' target='_blank'>Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <AiOutlineLinkedin className='contact__option__icon'/>
                        <h4>Linkedin</h4>
                        <h5>Profile</h5>
                        <a href='https://www.linkedin.com/in/suhbisi-denzel-nsiela-78991926a/' target='_blank'>Tap me on LinkedIn</a>
                    </article>

                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option__icon'/>
                        <h4>Whatsapp</h4>
                        <h5>Direct message</h5>
                        <a href='https://web.whatsapp.com/send?phone=+237691184732' target='_blank'>Whatsapp me</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <div className='Name'>
                        <input type="text" name='user_name' placeholder='Full Name' required/>
                    </div>

                    <div className='Email'>
                        <input type="email" name='user_email' placeholder='Your email address' required/>
                    </div>
                    
                    <div className='Message'>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message' required></textarea>
                    </div>

                    <div className='submit-Btn'>
                        <button type="submit" className='btn btn-primary'>Send A Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact