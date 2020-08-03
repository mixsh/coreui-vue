
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CSpinner from '../src/components/spinner/CSpinner'

import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CSpinner', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CSpinner },
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
        grow: {
          type: Boolean,
          default: boolean('Grow', false)
        },
        size: {
          type: String,
          default: select(
            'Size',
            [ undefined, 'sm' ],
            undefined
          )
        },
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CSpinner
              :color.sync="color"
              :grow.sync="grow"
              :size.sync="size"
            />
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})