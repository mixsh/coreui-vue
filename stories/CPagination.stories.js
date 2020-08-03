
import { boolean, select, text, number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CPagination from '../src/components/pagination/CPagination'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CPagination', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CPagination },
      props: {
        activePage:{
          type: Number,
          default: number('ActivePage', 1, {})
        },
        pages:{
          type: Number,
          default: number('Pages', 10, {})
        },
        size:{
          type: String,
          default: select('Size', [ undefined, 'sm', 'lg'], undefined)
        },
        align:{
          type: String,
          default: select('Align', [ 'start', 'center', 'end' ], undefined)
        },
        dots:{
          type: Boolean,
          default: boolean('Dots', true)
        },
        arrows:{
          type: Boolean,
          default: boolean('Arrows', true)
        },
        doubleArrows:{
          type: Boolean,
          default: boolean('DoubleArrows', true)
        },
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CPagination
              :activePage.sync="activePage"
              :pages.sync="pages"
              :size.sync="size"
              :align.sync="align"
              :dots.sync="dots"
              :arrows.sync="arrows"
              :doubleArrows.sync="doubleArrows"
            />
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})