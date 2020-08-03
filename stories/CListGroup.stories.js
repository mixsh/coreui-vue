
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CListGroup from '../src/components/list-group/CListGroup'
import CListGroupItem from '../src/components/list-group/CListGroupItem'

import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CListGroup', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CListGroup, CListGroupItem },
      props: {
        flush:{
          type: Boolean,
          default: boolean('Flush', false, 'CListGroup')
        },
        horizontal: {
          type: Boolean,
          default: boolean('Horizontal', false, 'CListGroup')
        },

        action: {
          type: Boolean,
          default: boolean('Action', false, 'CListGroupItem')
        },
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
          ], '', 'CListGroupItem')
        },
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CListGroup
              :flush.sync="flush"
              :horizontal.sync="horizontal"
            >
              <CListGroupItem
                :action.sync="action"
                :color.sync="color"              
              >
                Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem.
              </CListGroupItem>
              <CListGroupItem>
                Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem.
              </CListGroupItem>
              <CListGroupItem>
                Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem.
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})