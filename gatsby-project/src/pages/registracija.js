import React from "react"
import Layout from "../components/layout"
import RegistracijaStyle from "../styles/registracija.module.css"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const RegistracijaPage = () => {
  return (
    <Layout>
      <h1>Registracija</h1>
      <p>Ovo je stranica na kojoj će se korisnici registrirati.</p>
      <Form className={RegistracijaStyle.form}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Unesite e-mail adresu"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Lozinka</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Unesite lozinku"
          />{" "}
          <FormText color="muted">Lozinka mora imati ...</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option one is this and
              that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option two can be something
              else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Option three is
              disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Želim primati obavijesti na e-mail
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Layout>
  )
}

export default RegistracijaPage
