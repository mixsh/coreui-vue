
import { boolean, select, text, withKnobs, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'

import CInput from '../src/components/form/CInput'
import CTextarea from '../src/components/form/CTextarea'

import CInputCheckbox from '../src/components/form/CInputCheckbox'
import CInputRadio from '../src/components/form/CInputRadio'

import CInputRadioGroup from '../src/components/form/CInputRadioGroup'

import CSelect from '../src/components/form/CSelect'
import CInputFile from '../src/components/form/CInputFile'

import CCard from '../src/components/card/CCard'
import CCardBody from '../src/components/card/CCardBody'
import CCol from '../src/components/grid/CCol'

storiesOf('CForm', module)
  .addDecorator(withKnobs)
  .add('CInput CTextarea', () => {

    return {
      components: { CCol, CCard, CCardBody, CInput, CTextarea },
      props: {
        typeCInput: {
          type: String,
          default: text('Type', 'input', 'basic')
        },
        plaintext: {
          type: Boolean,
          default: boolean('Plaintext', false, 'basic')
        },
        readonly: {
          type: Boolean,
          default: boolean('Readonly', false, 'basic')
        },
        lazy: {
          type: Number,
          default: number('Lazy', 400, {}, 'basic')
        },
        validFeedback: {
          type: String,
          default: text('ValidFeedback', 'Valid', 'basic')
        },
        invalidFeedback: {
          type: String,
          default: text('InvalidFeedback', 'Invalid', 'basic')
        },
        tooltipFeedback: {
          type: Boolean,
          default: boolean('TooltipFeedback', false, 'basic')
        },
        description: {
          type: String,
          default: text('Description', 'Lorem ipsum dolor cet emit', 'basic')
        },
        append: {
          type: String,
          default: text('Append', undefined, 'basic')
        },
        prepend: {
          type: String,
          default: text('Prepend', undefined, 'basic')
        },
        label: {
          type: String,
          default: text('Label', undefined, 'basic')
        },
        wasValidated: {
          type: Boolean,
          default: boolean('WasValidated', false, 'basic')
        },
        isValid: {
          type: Boolean,
          default: select('IsValid', [
            undefined,
            true,
            false,
          ], undefined,
            'basic'
          )
        },
        addInputClasses:{
          type: String,
          default: text('AddInputClasses', '', 'other')
        },
        addLabelClasses:{
          type: String,
          default: text('AddLabelClasses', '', 'other')
        },
        horizontal:{
          type: Boolean,
          default: boolean('Horizontal', false, 'basic')
        },
        size:{
          type: String,
          default: select('Size',
            ['', 'sm', 'lg'],
            '',
            'basic'
          )
        },
        addWrapperClasses:{
          type: String,
          default: text('AddWrapperClasses', '', 'other')
        }
      },
      template: `
      <CCol lg="12" xs="12"> 
        <CCard> 
          <CCardBody>
            <h4>CInput:</h4>
            <CInput
              :type.sync="typeCInput"
              :plaintext.sync="plaintext"
              :readonly.sync="readonly"
              :lazy.sync="lazy"

              :validFeedback.sync="validFeedback"
              :invalidFeedback.sync="invalidFeedback"
              :tooltipFeedback.sync="tooltipFeedback"
              :description.sync="description"
              :append.sync="append"
              :prepend.sync="prepend"
              :label.sync="label"
              :wasValidated.sync="wasValidated"
              :isValid.sync="isValid"

              :addInputClasses.sync="addInputClasses"
              :addLabelClasses.sync="addLabelClasses"
              :horizontal.sync="horizontal"
              :size.sync="size"
              :addWrapperClasses.sync="addWrapperClasses"
            />
            <h4>CTextarea:</h4>
            <CTextarea
              :type.sync="typeCInput"
              :plaintext.sync="plaintext"
              :readonly.sync="readonly"
              :lazy.sync="lazy"

              :validFeedback.sync="validFeedback"
              :invalidFeedback.sync="invalidFeedback"
              :tooltipFeedback.sync="tooltipFeedback"
              :description.sync="description"
              :append.sync="append"
              :prepend.sync="prepend"
              :label.sync="label"
              :wasValidated.sync="wasValidated"
              :isValid.sync="isValid"

              :addInputClasses.sync="addInputClasses"
              :addLabelClasses.sync="addLabelClasses"
              :horizontal.sync="horizontal"
              :size.sync="size"
              :addWrapperClasses.sync="addWrapperClasses"
            >
              Lorem ipsum dolor cet emit. Cet dolor emit ipsum lorem.
            </CTextarea>
          </CCardBody>
        </CCard>
      </CCol>
      `
    }
}).add('CInputCheckbox CInputRadio', () => {

  return {
    components: { CCol, CCard, CCardBody, CInputCheckbox, CInputRadio },
    props: {

      checked:{
        type: Boolean,
        default: boolean('Checked', false, 'basic')
      },
      custom:{
        type: Boolean,
        default: boolean('Custom', false, 'basic')
      },
      inline:{
        type: Boolean,
        default: boolean('Inline', false, 'basic')
      },
      validFeedback: {
        type: String,
        default: text('ValidFeedback', 'Valid', 'basic')
      },
      invalidFeedback: {
        type: String,
        default: text('InvalidFeedback', 'Invalid', 'basic')
      },
      tooltipFeedback: {
        type: Boolean,
        default: boolean('TooltipFeedback', false, 'basic')
      },
      description: {
        type: String,
        default: text('Description', 'Lorem ipsum dolor cet emit', 'basic')
      },
      append: {
        type: String,
        default: text('Append', undefined, 'basic')
      },
      prepend: {
        type: String,
        default: text('Prepend', undefined, 'basic')
      },
      label: {
        type: String,
        default: text('Label', undefined, 'basic')
      },
      wasValidated: {
        type: Boolean,
        default: boolean('WasValidated', false, 'basic')
      },
      isValid: {
        type: Boolean,
        default: select('IsValid', [
          undefined,
          true,
          false,
        ], undefined,
          'basic'
        )
      },
      addInputClasses:{
        type: String,
        default: text('AddInputClasses', '', 'other')
      },
      addLabelClasses:{
        type: String,
        default: text('AddLabelClasses', '', 'other')
      },
      horizontal:{
        type: Boolean,
        default: boolean('Horizontal', false, 'basic')
      },
      size:{
        type: String,
        default: select('Size',
          ['', 'sm', 'lg'],
          '',
          'basic'
        )
      },
      addWrapperClasses:{
        type: String,
        default: text('AddWrapperClasses', '', 'other')
      },
      placeholder:{
        type: String,
        default: text('Placeholder', 'Lorem ipsum dolor', 'other')
      }
    },
    template: `
    <CCol lg="12" xs="12"> 
      <CCard> 
        <CCardBody>
          <h4>CInputCheckbox:</h4>
          <CInputCheckbox
            :checked.sync="checked"
            :custom.sync="custom"
            :inline.sync="inline"

            :validFeedback.sync="validFeedback"
            :invalidFeedback.sync="invalidFeedback"
            :tooltipFeedback.sync="tooltipFeedback"
            :description.sync="description"
            :append.sync="append"
            :prepend.sync="prepend"
            :label.sync="label"
            :wasValidated.sync="wasValidated"
            :isValid.sync="isValid"

            :addInputClasses.sync="addInputClasses"
            :addLabelClasses.sync="addLabelClasses"
            :horizontal.sync="horizontal"
            :size.sync="size"
            :addWrapperClasses.sync="addWrapperClasses"

            :placeholder.sync="placeholder"
          />
          <h4>CInputRadio:</h4>
          <CInputRadio
            :checked.sync="checked"
            :custom.sync="custom"
            :inline.sync="inline"

            :validFeedback.sync="validFeedback"
            :invalidFeedback.sync="invalidFeedback"
            :tooltipFeedback.sync="tooltipFeedback"
            :description.sync="description"
            :append.sync="append"
            :prepend.sync="prepend"
            :label.sync="label"
            :wasValidated.sync="wasValidated"
            :isValid.sync="isValid"

            :addInputClasses.sync="addInputClasses"
            :addLabelClasses.sync="addLabelClasses"
            :horizontal.sync="horizontal"
            :size.sync="size"
            :addWrapperClasses.sync="addWrapperClasses"

            :placeholder.sync="placeholder"
          />
        </CCardBody>
      </CCard>
    </CCol>
    `
  }





}).add('CInputRadioGroup', () => {

  return {
    components: { CCol, CCard, CCardBody, CInputCheckbox, CInputRadio, CInputRadioGroup },
    props: {
      options:{
        type: Array,
        default: ['First', 'Two', 'Three']
      },
      checked:{
        type: Boolean,
        default: boolean('Checked', false, 'basic')
      },
      name:{
        type: String,
        default: text('Name', 'checkbox', 'basic')
      },
      custom:{
        type: Boolean,
        default: boolean('Custom', false, 'basic')
      },
      inline:{
        type: Boolean,
        default: boolean('Inline', false, 'basic')
      },
    },
    template: `
    <CCol lg="12" xs="12"> 
      <CCard> 
        <CCardBody>
          <CInputRadioGroup
            :options.sync="options"
            :checked.sync="checked"
            :name.sync="name"
            :custom.sync="custom"
            :inline.sync="inline"
          />
        </CCardBody>
      </CCard>
    </CCol>
    `
  }

}).add('CSelect', () => {

  return {
    components: { CCol, CCard, CCardBody, CSelect },
    props: {
      options:{
        type: Array,
        default: [ { value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML' }, { value: 'css', label: 'CSS' } ]
      },
      value:{
        type: String,
        default: text('Value', '', 'basic')
      },
      plaintext:{
        type: Boolean,
        default: boolean('Plaintext', false, 'basic')
      },
      placeholder:{
        type: String,
        default: text('Placeholder', '', 'basic')
      },
      custom:{
        type: Boolean,
        default: boolean('Custom', false, 'basic')
      },

      validFeedback: {
        type: String,
        default: text('ValidFeedback', 'Valid', 'basic')
      },
      invalidFeedback: {
        type: String,
        default: text('InvalidFeedback', 'Invalid', 'basic')
      },
      tooltipFeedback: {
        type: Boolean,
        default: boolean('TooltipFeedback', false, 'basic')
      },
      description: {
        type: String,
        default: text('Description', 'Lorem ipsum dolor cet emit', 'basic')
      },
      append: {
        type: String,
        default: text('Append', undefined, 'basic')
      },
      prepend: {
        type: String,
        default: text('Prepend', undefined, 'basic')
      },
      label: {
        type: String,
        default: text('Label', undefined, 'basic')
      },
      wasValidated: {
        type: Boolean,
        default: boolean('WasValidated', false, 'basic')
      },
      isValid: {
        type: Boolean,
        default: select('IsValid', [
          undefined,
          true,
          false,
        ], undefined,
          'basic'
        )
      },
      addInputClasses:{
        type: String,
        default: text('AddInputClasses', '', 'other')
      },
      addLabelClasses:{
        type: String,
        default: text('AddLabelClasses', '', 'other')
      },
      horizontal:{
        type: Boolean,
        default: boolean('Horizontal', false, 'basic')
      },
      size:{
        type: String,
        default: select('Size',
          ['', 'sm', 'lg'],
          '',
          'basic'
        )
      },
      addWrapperClasses:{
        type: String,
        default: text('AddWrapperClasses', '', 'other')
      }
    },
    template: `
    <CCol lg="12" xs="12"> 
      <CCard> 
        <CCardBody>
          <CSelect
            :options.sync="options"
            :value.sync="value"
            :plaintext.sync="plaintext"
            :placeholder.sync="placeholder"
            :custom.sync="custom"

            :validFeedback.sync="validFeedback"
            :invalidFeedback.sync="invalidFeedback"
            :tooltipFeedback.sync="tooltipFeedback"
            :description.sync="description"
            :append.sync="append"
            :prepend.sync="prepend"
            :label.sync="label"
            :wasValidated.sync="wasValidated"
            :isValid.sync="isValid"

            :addInputClasses.sync="addInputClasses"
            :addLabelClasses.sync="addLabelClasses"
            :horizontal.sync="horizontal"
            :size.sync="size"
            :addWrapperClasses.sync="addWrapperClasses"
          />
        </CCardBody>
      </CCard>
    </CCol>
    `
  }

}).add('CInputFile', () => {

  return {
    components: { CCol, CCard, CCardBody, CInputFile },
    props: {
      custom:{
        type: Boolean,
        default: boolean('Custom', false, 'basic')
      },
      placeholder:{
        type: String,
        default: text('Placeholder', '', 'basic')
      },

      validFeedback: {
        type: String,
        default: text('ValidFeedback', 'Valid', 'basic')
      },
      invalidFeedback: {
        type: String,
        default: text('InvalidFeedback', 'Invalid', 'basic')
      },
      tooltipFeedback: {
        type: Boolean,
        default: boolean('TooltipFeedback', false, 'basic')
      },
      description: {
        type: String,
        default: text('Description', 'Lorem ipsum dolor cet emit', 'basic')
      },
      append: {
        type: String,
        default: text('Append', undefined, 'basic')
      },
      prepend: {
        type: String,
        default: text('Prepend', undefined, 'basic')
      },
      label: {
        type: String,
        default: text('Label', undefined, 'basic')
      },
      wasValidated: {
        type: Boolean,
        default: boolean('WasValidated', false, 'basic')
      },
      isValid: {
        type: Boolean,
        default: select('IsValid', [
          undefined,
          true,
          false,
        ], undefined,
          'basic'
        )
      },
      addInputClasses:{
        type: String,
        default: text('AddInputClasses', '', 'other')
      },
      addLabelClasses:{
        type: String,
        default: text('AddLabelClasses', '', 'other')
      },
      horizontal:{
        type: Boolean,
        default: boolean('Horizontal', false, 'basic')
      },
      size:{
        type: String,
        default: select('Size',
          ['', 'sm', 'lg'],
          '',
          'basic'
        )
      },
      addWrapperClasses:{
        type: String,
        default: text('AddWrapperClasses', '', 'other')
      },
    },
    template: `
    <CCol lg="12" xs="12"> 
      <CCard> 
        <CCardBody>
        <h4>Single file:</h4>
          <CInputFile
            :custom.sync="custom"
            :placeholder.sync="placeholder"

            :validFeedback.sync="validFeedback"
            :invalidFeedback.sync="invalidFeedback"
            :tooltipFeedback.sync="tooltipFeedback"
            :description.sync="description"
            :append.sync="append"
            :prepend.sync="prepend"
            :label.sync="label"
            :wasValidated.sync="wasValidated"
            :isValid.sync="isValid"

            :addInputClasses.sync="addInputClasses"
            :addLabelClasses.sync="addLabelClasses"
            :horizontal.sync="horizontal"
            :size.sync="size"
            :addWrapperClasses.sync="addWrapperClasses"
          />
          <h4>Multiple file:</h4>
          <CInputFile
            :custom.sync="custom"
            :placeholder.sync="placeholder"
            multiple="true"

            :validFeedback.sync="validFeedback"
            :invalidFeedback.sync="invalidFeedback"
            :tooltipFeedback.sync="tooltipFeedback"
            :description.sync="description"
            :append.sync="append"
            :prepend.sync="prepend"
            :label.sync="label"
            :wasValidated.sync="wasValidated"
            :isValid.sync="isValid"

            :addInputClasses.sync="addInputClasses"
            :addLabelClasses.sync="addLabelClasses"
            :horizontal.sync="horizontal"
            :size.sync="size"
            :addWrapperClasses.sync="addWrapperClasses"
          />
        </CCardBody>
      </CCard>
    </CCol>
    `
  }

})