import emailjs from '@emailjs/browser';

const FormContact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gtsu1wi', 'template_jw1w59y', e.target, 'QlkawYq_22-BVjpzV')
          .then((result) => {
              console.log(result.text);
              alert("Votre mail est bien envoyé")
          }, (error) => {
              console.log(error.text);
              alert("Il y a eu une erreur lors de l'envoi de votre mail veuillez réessayer")
          });
          e.target.reset()
      };

    return (
        <>
        <div className="boxFormContact">
        <div className="titleContact">
                <h1 test>// Me Contacter</h1>
            </div>
            <div className="containerFormContact">
            <form className="formContact" onSubmit={sendEmail}>
                <div className="row">
                <div className="col">
                    <div className="mb-3">
                    <label className="form-label"></label>
                    <input type="text" className="form-control" placeholder="Nom" id="" name="name"/>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                    <label className="form-label"></label>
                    <input type="email" className="form-control" placeholder="Email" id="" name="email"/>
                    </div>
                </div>
                </div>
                <div className="mb-3">
                <label className="form-label"></label>
                <input type="text" className="form-control" placeholder="Sujet" id="" name="subject"/>
                </div>
                <div className="mb-3">
                <label className="form-label"></label>
                <textarea className="form-control" id="" placeholder="Message..." name="message" rows="5"></textarea>
                </div>
                <div className="mb-3">
                <button type="submit" className="btn btn-custom">Envoyer</button>
                </div>
            </form>
            </div> 
        </div>
        </>
    )
}

export default FormContact