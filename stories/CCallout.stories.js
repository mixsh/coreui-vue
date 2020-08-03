
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CCallout from '../src/components/callout/CCallout'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CCallout', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CCallout },
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
        small: {
          type: String,
          default: text('Small', 'Lorem ipsum dolor')
        },
        strong: {
          type: String,
          default: text('Strong', 'Dolor')
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CCallout 
              :color.sync="color"
            >
              <small class="text-muted">{{ small }}</small><br>
              <strong class="h4">{{ strong }}</strong>
            </CCallout>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})
