import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CMedia from '../src/components/media/CMedia'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CMedia', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CMedia },
      props: {
        addAsideMargin: {
          type: Boolean,
          default: boolean('AddAsideMargin', true)
        },
        addAsideClasses: {
          type: String,
          default: text('AddAsideClasses', '')
        },
        addBodyClasses:{
          type: String,
          default: text('AddBodyClasses', '')
        },
        asideRight:{
          type: Boolean,
          default: boolean('AsideRight', false)
        },
        asideVerticalPosition:{
          type: String,
          default: select(
            'AsideVerticalPosition',
            [
              'start', 'center', 'end', 'stretch'
            ],
            'start'
          )
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CMedia 
              :addAsideMargin.sync="addAsideMargin"
              :addAsideClasses.sync="addAsideClasses" 
              :addBodyClasses.sync="addBodyClasses"
              :asideRight.sync="asideRight"
              :asideVerticalPosition.sync="asideVerticalPosition"
            >
              <h4>Lorem ipsum dolor</h4>
              Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem.
            </CMedia>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }



})