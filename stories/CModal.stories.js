
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import CModal from '../src/components/modal/CModal'
import CButton from '../src/components/button/CButton'
import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CModal', module)
  .addDecorator(withKnobs)
  .add('single', () => {

    return {
      components: { CCol, CCard, CCardBody, CModal, CButton },
      data: function(){
        return {
          warningModal: false,
        }
      },
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
          ], '', 'Other')
        },
        centered:{
          type: Boolean,
          default: boolean('Centered', false)
        },
        title: {
          type: String,
          default: text('Title', '')
        },
        size: {
          type: String,
          default: select(
            'Size',
            [undefined, 'sm', 'lg', 'xl'],
            undefined
          )
        },
        borderColor:{
          type: String,
          default: select('BorderColor', [
            '',
            "primary",
            "secondary",
            "success",
            "warning",
            "danger",
            "info",
            "light",
            "dark",
          ], '', 'Other')
        },
        fade:{
          type: Boolean,
          default: boolean('Fade', true)
        },
        backdrop:{
          type: Boolean,
          default: boolean('Backdrop', true)
        },
        closeOnBackdrop:{
          type: Boolean,
          default: boolean('CloseOnBackdrop', true)
        },
        addContentClasses:{
          type:String,
          default: text('AddContentClasses', '')
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <CButton
              @click="warningModal = true"
              color="primary"
            >
              Open modal
            </CButton>
            <CModal
              :color.sync="color"
              :centered.sync="centered"
              :title.sync="title"
              :size.sync="size"
              :borderColor.sync="borderColor"
              :fade.sync="fade"
              :backdrop.sync="backdrop"
              :closeOnBackdrop.sync="closeOnBackdrop"
              :addContentClasses.sync="addContentClasses"

              :show.sync="warningModal"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CModal>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
})