
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CBreadcrumb from '../src/components/breadcrumb/CBreadcrumb'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CBreadcrumb', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CBreadcrumb },
      data: function(){
        return {
          items: [
            {
              text: 'This is a router link',
              to: '/?path=/story/calert--single'
            },
            {
              text: 'This is a link without actions'
            },
            {
              text: 'This is a span'
            }
          ],
        }
      },
      props: {},
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CBreadcrumb :items="items"/>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})