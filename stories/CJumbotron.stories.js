
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CJumbotron from '../src/components/jumbotron/CJumbotron'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CJumbotron', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CJumbotron },
      props: {
        color: {
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
          ], '')
        },
        tag: {
          type: String,
          default: text('Tag', 'div')
        },
        fluid: {
          type: Boolean,
          default: boolean('Fluid', false)
        },
        borderColor:{
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
          ], '')
        },
        textColor:{
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
          ], '')
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CJumbotron 
              :color.sync="color"
              :tag.sync="tag"
              :fluid.sync="fluid"
              :borderColor.sync="borderColor"
              :textColor.sync="textColor"
            >
              <h1>Lorem ipsum dolor</h1>
              <p>Lorem ipsum dolor cet emit pew</p>
              <p>Ipsum dolor cet emit lorem. Pew emit, cet dolor ipsum lorem.</p>
            </CJumbotron>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})