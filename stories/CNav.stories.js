
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CNav from '../src/components/nav/CNav'
import CNavItem from '../src/components/nav/CNavItem'

import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CNav', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CNav, CNavItem },
      props: {
        fill: {
          type: Boolean,
          default: boolean('Fill', false)
        },
        justified:{
          type: Boolean,
          default: boolean('Justified', false)
        },
        variant:{
          type: String,
          default: select(
            'Variant', 
            [ undefined, 'tabs', 'pills' ], 
            undefined
          )
        },
        vertical:{
          type: Boolean,
          default: boolean('Vertical', false)
        },
        inCard:{
          type: Boolean,
          default: boolean('InCard', false)
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CNav
              :fill.sync="fill"
              :justified.sync="justified"
              :variant.sync="variant"
              :vertical.sync="vertical"
              :inCard.sync="inCard"

            >
              <CNavItem active>
                Lorem 
              </CNavItem>
              <CNavItem>
                Ipsum 
              </CNavItem>
              <CNavItem>
                Dolor 
              </CNavItem>
              <CNavItem disabled>
                Cet emit
              </CNavItem>
            </CNav>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})