import { graphql, StaticQuery } from "gatsby"
import { navigate } from "gatsby-link"
import React from "react"
import * as SC from "./styles"

function encode(data: { "form-name": string; [key: string]: string }): string {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

interface ContactFormState {
  isValidated: boolean
  "bot-field": string
  name: string
  email: string
  message: string
}

class ContactForm extends React.Component<{}, ContactFormState> {
  state: ContactFormState = { isValidated: false, "bot-field": "", name: "", email: "", message: "" }

  handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    this.setState({ [e.target.name as string]: e.target.value })
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            markdownRemark(fields: { slug: { eq: "/contactez-nous/" } }) {
              frontmatter {
                email
                phone
              }
            }
          }
        `}
        render={data => {
          const { frontmatter } = data.markdownRemark
          const { email, phone } = frontmatter

          return (
            <React.Fragment>
              {phone ? (
                <SC.ContactBlock>
                  <div className="sub">Par téléphone</div>
                  <a className="link" href={`tel:+1-${phone}`}>
                    {phone}
                  </a>
                </SC.ContactBlock>
              ) : null}

              {email ? (
                <SC.ContactBlock>
                  <div className="sub">Par courriel</div>
                  <a className="link" href={`mailto:${email}`}>
                    {email}
                  </a>
                </SC.ContactBlock>
              ) : null}

              <SC.ContactBlock>
                <div className="sub">Ou ici, directement</div>
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Ne pas remplir: <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="name">
                      Votre nom
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        id="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="email">
                      Votre courriel
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        id="email"
                        required
                        placeholder="vous@courriel.com"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="message">
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name="message"
                        onChange={this.handleChange}
                        id="message"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      Soumettre ›
                    </button>
                  </div>
                </form>
              </SC.ContactBlock>
            </React.Fragment>
          )
        }}
      />
    )
  }
}

export default ContactForm
