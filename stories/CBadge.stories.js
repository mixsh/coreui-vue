
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CBadge from '../src/components/badge/CBadge'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CBadge', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CBadge },
      props: {
        color: {
          type: String,
          default: select('Color', [
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], 'primary', 'Other')
        },
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CBadge :color.sync="color">Lorem ipsum</CBadge>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
}).add('all', () => {
    return {
      components: { CCol, CCard, CCardBody, CBadge },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CBadge color="primary">CBadge primary</CBadge>
            <CBadge color="secondary">CBadge secondary</CBadge>
            <CBadge color="success">CBadge success</CBadge>
            <CBadge color="danger">CBadge danger</CBadge>
            <CBadge color="warning">CBadge warning</CBadge>
            <CBadge color="info">CBadge info</CBadge>
            <CBadge color="light">CBadge light</CBadge>
            <CBadge color="dark">CBadge dark</CBadge>
            <CBadge>CBadge raw</CBadge>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})