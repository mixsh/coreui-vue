import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCardFooter from '../src/components/card/CCardFooter'
import CCardHeader from '../src/components/card/CCardHeader'
import CCol from '../src/components/grid/CCol'

storiesOf('CCard', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CCard, CCardHeader, CCardFooter },
      props: {
        colorCCard: {
          type: String,
          default: select('Color', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCard')
        },
        borderColorCCard: {
          type: String,
          default: select('BorderColor', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCard')
        },
        textColorCCard: {
          type: String,
          default: select('TextColor', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCard')
        },
        accentColorCCard: {
          type: String,
          default: select('AccentColor', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCard')
        },
        alignCCard: {
          type: String,
          default: select('Align', [
            '',
            'left', 
            'center', 
            'right' 
          ], '', 'CCard')
        },
        alignCCardHeader: {
          type: String,
          default: select('Align', [
            '',
            'left', 
            'center', 
            'right' 
          ], '', 'CCardHeader')
        },
        colorCCardHeader: {
          type: String,
          default: select('Color', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCardHeader')
        },
        borderColorCCardHeader: {
          type: String,
          default: select('BorderColor', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCardHeader')
        },
        textColorCCardHeader: {
          type: String,
          default: select('TextColor', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCardHeader')
        },
        alignCCardBody: {
          type: String,
          default: select('Align', [
            '',
            'left', 
            'center', 
            'right' 
          ], '', 'CCardBody')
        },
        colorCCardBody: {
          type: String,
          default: select('Color', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCardBody')
        },
        borderColorCCardBody: {
          type: String,
          default: select('BorderColor', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCardBody')
        },
        textColorCCardBody: {
          type: String,
          default: select('TextColor', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCardBody')
        },
        alignCCardFooter: {
          type: String,
          default: select('Align', [
            '',
            'left', 
            'center', 
            'right' 
          ], '', 'CCardFooter')
        },
        colorCCardFooter: {
          type: String,
          default: select('Color', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCardFooter')
        },
        borderColorCCardFooter: {
          type: String,
          default: select('BorderColor', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCardFooter')
        },
        textColorCCardFooter: {
          type: String,
          default: select('TextColor', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'CCardFooter')
        },
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CCard
              :accentColor.sync="accentColorCCard"
              :align.sync="alignCCard"
              :color.sync="colorCCard"
              :borderColor.sync="borderColorCCard"
              :textColor.sync="textColorCCard"
            >
              <CCardHeader
                :align.sync="alignCCardHeader"
                :color.sync="colorCCardHeader"
                :borderColor.sync="borderColorCCardHeader"
                :textColor.sync="textColorCCardHeader"
              >
                Header
              </CCardHeader>
              <CCardBody
                :align.sync="alignCCardBody"
                :color.sync="colorCCardBody"
                :borderColor.sync="borderColorCCardBody"
                :textColor.sync="textColorCCardBody"
              >
                Lorem ipsum dolor cet emit. Dolor emit cet ipsum lorem.
              </CCardBody>
              <CCardFooter
                :align.sync="alignCCardFooter"
                :color.sync="colorCCardFooter"
                :borderColor.sync="borderColorCCardFooter"
                :textColor.sync="textColorCCardFooter"
              >
                Footer
              </CCardFooter>
            </CCard>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})