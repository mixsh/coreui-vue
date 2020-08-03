
import { boolean, select, text, object, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CButton from '../src/components/button/CButton'
import CTooltip from '../src/directives/CTooltip'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CTooltip', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      directives: {
        CTooltip: CTooltip
      },
      components: { CCol, CCard, CCardBody, CButton },
      props: {
        tooltip: {
          type: Object,
          default: object('Tooltip', {
            content: 'Open tooltip',
            html: true,
            placement: 'right',
            delay: 0,
            offset: 0,
            boundaries: 'scrollParent',
            appendToBody: false,
            closeOnClickOutside: true
          })
        },
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CButton 
              color="primary"
              v-c-tooltip="tooltip"
            >
              Lorem ipsum
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})