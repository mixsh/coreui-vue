
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CLink from '../src/components/link/CLink'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CLink', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CLink },
      props: {
        href: {
          type: String,
          default: text('Href', '')
        },
        to: {
          type: String,
          default: text('To', '')
        },
        rel: {
          type: String,
          default: text('Rel', '')
        },
        target: {
          type: String,
          default: text('Target', '_self')
        },
        disabled: {
          type: Boolean,
          default: boolean('Disabled', false)
        },
        active: {
          type: Boolean,
          default: boolean('Active', false)
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CLink 
              :href.sync="href"
              :to.sync="to"
              :rel.sync="rel"
              :target.sync="target"
              :disabled.sync="disabled"
              :active.sync="active"
            >
              Lorem ipsum dolor cet emit.
            </CLink>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})