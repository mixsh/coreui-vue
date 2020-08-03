
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CAlert from '../src/components/alert/CAlert'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CAlert', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CAlert },
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
            <CAlert :color.sync="color">Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem.</CAlert>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
}).add('all', () => {
    return {
      components: { CCol, CCard, CCardBody, CAlert },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CAlert color="primary">CAlert primary</CAlert>
            <CAlert color="secondary">CAlert secondary</CAlert>
            <CAlert color="success">CAlert success</CAlert>
            <CAlert color="danger">CAlert danger</CAlert>
            <CAlert color="warning">CAlert warning</CAlert>
            <CAlert color="info">CAlert info</CAlert>
            <CAlert color="light">CAlert light</CAlert>
            <CAlert color="dark">CAlert dark</CAlert>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})