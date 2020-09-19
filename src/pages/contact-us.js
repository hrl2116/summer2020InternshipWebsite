import React from "react";
import Layout from "../components/layout";
import Recaptcha from "react-recaptcha";
import { loadReCaptcha } from 'react-recaptcha-google';
import jsonp from "jsonp"
import SmartchainBanner from "../components/ParticleBanner.jsx";
import styled from "styled-components";
import SEO from "../components/seo.js";
import { theme } from "../theme/GlobalStyles"



const MainDiv = styled.div `
   text-align: left;
   align-items: center;
   justify-content: center; 
   display: flex;
   height: 40rem;

   div {
     margin: 1.5rem 0;
   }
   
`
const Input = styled.input `
  width: 300px;
  height: 30px;
  padding: 0 8px;
  display: block;
  border-radius: 10px;
  border: 1px solid #666;
  &:focus { 
    box-shadow: 0 0 8px ${theme.fontLightBlue};
  }
`

const Select = styled.select `
  width: 100%;
  height: 30px;
  padding: 0 8px;
  display: block;
  border-radius: 10px;
  border: 1px solid #666;
  
  &:focus { 
    box-shadow: 0 0 8px ${theme.fontLightBlue};
  }
`

const TextArea = styled.textarea `
  width: 300px;
  padding: 0 8px;
  margin-bottom: 8px;
  display: block;
  border-radius: 10px;
  border: 1px solid #666;
  &:focus { 
    box-shadow: 0 0 8px ${theme.fontLightBlue};
  }
`
const Button = styled.button `
  display: flex;
  margin: 30px auto 5rem auto;
  padding: 5px 10px;
  background-color: ${theme.fontLightBlue};
  border: 1px solid ${theme.fontLightBlue};
  border-radius: 5px;
  color: #fff;
  text-align: center;
  &:hover {
    background-color: ${theme.fontDarkBlue};
    border: 1px solid ${theme.fontDarkBlue};
    transition: all 0.2s ease-in-out;
  }
`

const ContactLabel = styled.label `
  font-weight: bold; 
  font-size: 45px;
  color: ${theme.fontLightBlue};
  justify-content: center;
  display: flex;
  padding-top: 30px;
  padding-bottom: 1.5rem;
`

const Label = styled.label `
  margin-top: 10px;
  margin-bottom: 1px;
`

class Contact extends React.Component {
  captchaDemo

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      name: '',
      email: '',
      industry: '',
      companyName: '',
      message: '',
      isVerified: false
    }
  }

  componentDidMount() {
    loadReCaptcha();
    if (this.captchaDemo) {
      console.log("started, just a second...")
      this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      });
    }
  }
  recaptchaLoaded() {
    console.log('Captcha Loaded');
  }
  //Add form labels 
  render() {
    const { status } = this.state;
    return (
      <Layout>
        <SEO title="Contact Us" />
        <SmartchainBanner />
        <ContactLabel htmlFor="Contact Us"> Contact Us </ContactLabel>
        <MainDiv>

          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

            <div>
              <Label htmlFor="name"> Name </Label>

              <Input type="text" value={this.state.name}
                     onChange={({ target }) => this.setState({ ['name']: target.value })}/>
            </div>

            <div>
              <Label htmlFor="exampleInputEmail1">Email Address</Label>

              <Input type="email" aria-describedby="emailHelp" value={this.state.email}
                     onChange={({ target }) => this.setState({ ['email']: target.value })}
              />
            </div>

            <div>
              <Label htmlFor="industry">Industry</Label>
              
              <Select
                name="industry"
                id="mce-INDUSTRY"
                onChange={({ target }) => this.setState({ ['industry']: target.value })}>
                
                <option value=""></option>
                <option value="banks">Banks/Financial institutes</option>
                <option value="Government">Government</option>
                <option value="Investors">Investors</option>
                <option value="Freight forwarders">Freight Forwarders</option>
                <option value="Other">Other</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="company">Company</Label>
              <Input type="text" aria-describedby="companyName" value={this.state.company}
                     onChange={({ target }) => this.setState({ ['companyName']: target.value })}/>
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <TextArea rows="10" value={this.state.message}
                        onChange={({ target }) => this.setState({ ['message']: target.value })}/>
            </div>

            <div>
              <Recaptcha
                sitekey="6Ld0ELAZAAAAACu7fyKy2htAhJQCCbH71rO1k7g1"
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
              />
            </div>

            <Button
                    disabled={status === "sending" || status === "success"}
                    type="submit"
                    > Submit
            </Button>

            <div>
              {status === "sending" && <p >Sending</p>}
              {status === "success" && <p>Thank you for contacting!</p>}
              {status === "duplicate" && <p>Too many subscribe attempts for this email address</p>}
              {status === "empty" && <p>You must write an e-mail.</p>}
              {status === "error" && <p>Enter a valid email address</p>}
            </div>

          </form>
          <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer> </script>
        </MainDiv>

      </Layout>
    );
  }


  handleSubmit(event) {
    if (this.state.isVerified) {
    } else {
      alert('Please verify you are human.')
    }
    event.preventDefault();
    const values = `name=${encodeURIComponent(this.state['name'])}&` +
      `EMAIL=${encodeURIComponent(this.state['email'])}&` +
      `industry=${encodeURIComponent(this.state['industry'])}&` +
      `company=${encodeURIComponent(this.state['companyName'])}&` +
      `message=${encodeURIComponent(this.state['message'])}`
    const path = `${process.env.REACT_APP_MAILCHIMP_URL}&${values}`;

    const url = path.replace('/post?', '/post-json?');
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    const email = this.state['email'];
    (!regex.test(email)) ? this.setState({ status: "empty" }) : this.sendData(url);
  };

  sendData(url) {
    this.setState({ status: "sending" });

    console.log("URL: " + url);


    jsonp(url, { param: "c" }, (err, data) => {
      if (data.msg.includes("already subscribed")) {
        this.setState({ status: 'duplicate' });
      } else if (err) {
        console.log(err);
        this.setState({ status: 'error' });
      } else if (data.result !== 'success') {
        this.setState({ status: 'error' });
      } else {
        this.setState({ status: 'success' });
      };
    });
  }
}

export default Contact;
