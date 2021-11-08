import React, { useState , useEffect } from 'react';
import LoaderScreen from '../layouts/loader';
import Breadcrumbs from '../layouts/breadcrumbs';
import axios from 'axios';
import swal from 'sweetalert';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Contact() {

    const [isLoading,setIsLoading]=useState(true);
    const [isButtonLoading,setisButtonLoading]=useState(false);
    const [pageHeading]=useState('Contact Us');
    const [apiUrl]=useState(process.env.REACT_APP_API_URL);

    // Form Fields 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Form Submit Method
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setisButtonLoading(true);  // Add Loading Button

        let formData = new FormData();    
        console.log(name);
        formData.append('name',name);  
        formData.append('email',email);  
        formData.append('subject',subject);  
        formData.append('message',message);
        
        const url = apiUrl+'api/post_contact';
        console.log(url);
        axios.post(url, formData) // first Method
        .then(res => {
            setisButtonLoading(false); // Hide Loading Btn
            console.log(res);
            console.log(res.data);
            if(res.data.status === 'success'){
                swal('Success',res.data.message,'success');
                setName('');setEmail('');setSubject('');setMessage('');
            }
            else if(res.data.status === 'error'){
                swal('Error',res.data.message,'error');
            }
        })
        .catch((xhr) => {
            setisButtonLoading(false); // Hide Loading Btn
            console.log(xhr.response.data);
            console.log(xhr.response.data.errors);
            let errors = xhr.response.data.errors;
            Object.keys(errors).map(key => {
                console.log(errors[key][0]);
                swal('Error',errors[key][0],'error')
            });
        });
        
    }

    useEffect(() => {
        // setIsLoading(false);
        setTimeout(() => {
            setIsLoading(false);
          }, 500);
    }, [])

    // Submit Button 
    let submitButton;
    console.log(isButtonLoading);
    if (isButtonLoading===false) {
        submitButton = <Button type="submit" class="btn btn-default btn-primary" variant="primary" > Send Message</Button>
    }else{
        submitButton = <Button type="submit" class="btn btn-default btn-primary" variant="primary" disabled>{/* <Spinner animation="border" variant="primary" />    */}Processing...</Button>
    }

    return (
        
    <div> {/* Must Close all Code in a Single <DIV> */}

        <LoaderScreen isLoading={isLoading} />
        <Breadcrumbs header={pageHeading}/>
        
        {/* <!--Contact start--> */}
            <div class="contWrap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-7">
                            <form action="#" class="contact-one__form" onSubmit={handleSubmit}>
                                <div class="block-title text-left">
                                    <h3>Send us a Message</h3>
                                    <p>Proident sunt culpa officia deserunt mollit animd laborum perspicia natus <br /> error voluptatem qui acusantium doloremque laudan.</p>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="mb-3">
                                            <label class="form-label">Your Name</label>
                                            <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" id="name" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="mb-3">
                                            <label class="form-label">Your Email</label>
                                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} name="email" id="email" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="mb-3">
                                            <label class="form-label">Subject</label>
                                            <input type="text" value={subject} onChange={e => setSubject(e.target.value)} name="subject" id="subject" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="mb-3">
                                            <label class="form-label">Message</label>
                                            <textarea value={message} onChange={e => setMessage(e.target.value)} name="message" id="message" class="form-control" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-btnn text-left mb-0">
                                            {submitButton}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-5 col-md-5">
                            <div class="contact-one__info">
                                <div class="block-title text-left">
                                    <h3>Our Location</h3>
                                    <p>Miventore veritatis et quasi architecto beatae vitae dicta sunt <br />nemo enim consequuntur magni dolores eos.</p>
                                </div>
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div class="text">
                                            <h4>Address:</h4>
                                            <p>551 Mt Pleasant Rd, Rydal, GA 30171, <br />United States</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-phone-alt"></i>
                                        </div>
                                        <div class="text">
                                            <h4>Call Us</h4>
                                            <p><a href="tel:470-586-7168">470-586-7168</a><br /><a href="tel:470-586-7168">470-586-7168</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="far fa-envelope"></i>
                                        </div>
                                        <div class="text">
                                            <h4>Email:</h4>
                                            <p><a href="#">Support@BootExperts.com</a><br /><a href="#">Support@BootExperts.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="far fa-clock"></i>
                                        </div>
                                        <div class="text">
                                            <h4>Work hours:</h4>
                                            <p>Mon to Fri : 09:00 am - 18:00 pm <br />Sat : 08:00 am - 16:00 pm</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="contact-one__info-social">
                                            <a href="#" class="fab fa-twitter"></a>
                                            <a href="#" class="fab fa-facebook-f"></a>
                                            <a href="#" class="fab fa-instagram"></a>
                                            <a href="#" class="fab fa-linkedin-in"></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!--Contact end--> */}
    <div class="google_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1696088.9737370568!2d-86.11531584436358!3d33.87229724791704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5597049ea327f%3A0xc86e66327a8477eb!2sCPC%20MOTORCYCLE%20CO.!5e0!3m2!1sen!2s!4v1628674957539!5m2!1sen!2s"></iframe>
    </div>

    </div>
    );
};
 


export default Contact;


// import React from 'react';

// class Contact extends React.Component {
//     render() {
//       return (  
    
      
//       );
//     }
// }
// export default Contact;