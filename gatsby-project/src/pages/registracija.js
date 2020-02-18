import React from "react"
import Layout from "../components/layout"
import RegistracijaStyle from "../styles/registracija.module.css"
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CustomInput,
} from "reactstrap"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

const RegistracijaPage = () => {
  return (
    <Layout>
      <SEO title="Registracija" />
      <div className={RegistracijaStyle.page}>
        <div className={RegistracijaStyle.pageDiv}>
          <h3 className={RegistracijaStyle.pageTitle}>Registracija</h3>

          <Form className={RegistracijaStyle.form}>
            <div className={RegistracijaStyle.forms}>
              <FormGroup className={RegistracijaStyle.formGroup}>
                <Label for="exampleName" className={RegistracijaStyle.label}>
                  Ime
                </Label>
                <Input type="name" name="name" id="exampleName" />
              </FormGroup>
              <FormGroup className={RegistracijaStyle.formGroup}>
                <Label for="exampleSurname" className={RegistracijaStyle.label}>
                  Prezime
                </Label>
                <Input type="surname" name="surname" id="exampleSurname" />
              </FormGroup>
            </div>
            <div className={RegistracijaStyle.forms}>
              <FormGroup className={RegistracijaStyle.formGroup}>
                <Label for="exampleDate" className={RegistracijaStyle.label}>
                  Datum rođenja
                </Label>
                <Input type="date" name="date" id="exampleDate" />
              </FormGroup>
              <FormGroup className={RegistracijaStyle.formGroup}>
                <Label
                  for="exampleCheckbox"
                  className={RegistracijaStyle.label}
                >
                  Spol
                </Label>
                <div className={RegistracijaStyle.genderContainer}>
                  <CustomInput
                    type="radio"
                    id="exampleCustomRadio"
                    name="customRadio"
                    label="žensko"
                  />
                  <CustomInput
                    type="radio"
                    id="exampleCustomRadio2"
                    name="customRadio"
                    label="muško"
                  />
                </div>
              </FormGroup>
            </div>
            <div className={RegistracijaStyle.forms}>
              <FormGroup className={RegistracijaStyle.formGroup}>
                <Label for="exampleEmail" className={RegistracijaStyle.label}>
                  e-mail
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="user@domain.com"
                />
              </FormGroup>
              <FormGroup className={RegistracijaStyle.formGroup}>
                <Label for="exampleNumber" className={RegistracijaStyle.label}>
                  Broj mobitela
                </Label>
                <Input type="name" name="name" id="exampleName" />
              </FormGroup>
            </div>
            <div className={RegistracijaStyle.forms}>
              <FormGroup className={RegistracijaStyle.formGroup}>
                <Label
                  for="examplePassword"
                  className={RegistracijaStyle.label}
                >
                  Lozinka
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder=""
                />
                <FormText color="muted">
                  Lozinka mora imati najmanje 8 znakova.
                </FormText>
              </FormGroup>
              <FormGroup className={RegistracijaStyle.formGroup}>
                <Label
                  for="examplePassword"
                  className={RegistracijaStyle.label}
                >
                  Potvrdite lozinku
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder=""
                />
              </FormGroup>
            </div>
            <CustomInput
              type="checkbox"
              id="exampleCustomCheckbox"
              label="Prihvaćam uvjete korištenja stranice i
                slažem se s pravilima privatnosti tijekom procesa registracije."
              className={RegistracijaStyle.accept}
            />
            <Button className={RegistracijaStyle.button} outline color="danger">
              Registriraj se
            </Button>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default RegistracijaPage
