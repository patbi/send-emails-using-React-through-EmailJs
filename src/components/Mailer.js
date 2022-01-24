import emailjs from 'emailjs-com';

const Mailer = () => {

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_yyyyy', 'template_yyyyy', e.target, 'user_yyyyy')
            .then((result) => {
                alert("success");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <h1 className='text-center'>Say Hello !!</h1>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className='col-8 pt-2 form-group mx-auto'>
                        <input type="text" className='form-control' placeholder='Name' name='name' />
                    </div>
                    <div className='col-8 pt-2 form-group mx-auto'>
                        <input type="email" className='form-control' placeholder='Email Address' name='email' />
                    </div>
                    <div className='col-8 pt-2 form-group mx-auto'>
                        <input type="text" className='form-control' placeholder='Subject' name='subject' />
                    </div>
                    <div className='col-8 pt-2 form-group mx-auto'>
                        <textarea className='form-control' id='' col='30' rows='8' placeholder='Your message' name='message' />
                    </div>
                    <div className='col-8 pt-3 mx-auto'>
                        <input type="submit" className='btn btn-info' value='Send Message' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Mailer
