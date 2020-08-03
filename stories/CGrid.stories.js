
import { boolean, select, text, number, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CContainer from '../src/components/grid/CContainer'
import CRow from '../src/components/grid/CRow'

import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CContiner', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CContainer, CRow, CCol },
      props: {
        fluid: {
          type: Boolean,
          default: boolean('Fluid', false, 'CContainer')
        },
        gutters:{
          type: Boolean,
          default: boolean('Fluid', true, 'CRow')
        },
        alignVertical:{
          type: String,
          default: select('AlignVertical', 
          [
            undefined, 'start', 'end', 'center', 'baseline', 'strech'
          ],
          undefined,
           'CRow')
        },
        alignHorizontal:{
          type: String,
          default: select('AlignHorizontal', 
          [
            undefined, 'start', 'end', 'center', 'baseline', 'strech'
          ],
          undefined,
           'CRow')
        },
        tag:{
          type: String,
          default: text('Tag', 'div', 'CRow')
        },
        form:{
          type: Boolean,
          default: boolean('Fluid', false, 'CRow')
        },
        xs:{
          type: String,
          default: number(
          'xs', 
          12,
          {
            range: true,
            min: 1,
            max: 12,
            step: 1
          },
          'CCol'
          )
        },
        sm:{
          type: String,
          default: number(
          'sm', 
          12,
          {
            range: true,
            min: 1,
            max: 12,
            step: 1
          },
          'CCol'
          )
        },
        md:{
          type: String,
          default: number(
          'md', 
          12,
          {
            range: true,
            min: 1,
            max: 12,
            step: 1
          },
          'CCol'
          )
        },
        lg:{
          type: String,
          default: number(
          'lg', 
          12,
          {
            range: true,
            min: 1,
            max: 12,
            step: 1
          },
          'CCol'
          )
        },
        xl:{
          type: String,
          default: number(
          'xl', 
          12,
          {
            range: true,
            min: 1,
            max: 12,
            step: 1
          },
          'CCol'
          )
        },      
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CContainer 
              :fluid.sync="fluid"
            >
              <CRow
                :gutters.sync="gutters"
                :alignVertical.sync="alignVertical"
                :alignHorizontal.sync="alignHorizontal"
                :tag.sync="tag"
                :form.sync="form"
              >
                <CCol
                  :xs.sync="xs"
                  :sm.sync="sm"
                  :md.sync="md"
                  :lg.sync="lg"
                  :xl.sync="xl"
                >
                  <CCard color="success"> 
                    Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem.
                  </CCard>
                </CCol>
              </CRow>
            </CContainer>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})