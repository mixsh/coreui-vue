
import { boolean, select, text, withKnobs, object } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CButton from '../src/components/button/CButton'
import CPopover from '../src/directives/CPopover'

import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CPopover', module)
  .addDecorator(withKnobs)
  .add('single', () => {
    return {
      directives: {
        CPopover: CPopover
      },
      components: { CCol, CCard, CCardBody, CButton },
      props: {
        popover:{
          type: Object,
          default: object('Popover', {
            header: 'Popover!',
            content: 'Opened popover',
            active: true,
            placement: 'right',
            html: true,
            delay: 0,
            offset: 0,
            boundaries: 'scrollParent',
            appendToBody: false,
            closeOnClickOutside: true,
          })
        }
      },

      
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CButton
              color="primary"
              v-c-popover="popover"
            >
              Lorem ipsum
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})