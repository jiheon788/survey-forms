const FormMeta = {
  SHORT_ANSWER: '단답형',
  LONG_ANSWER: '장문형',
  MULTIPLE_CHOICE: '객관식',
  CHECK_BOX: '체크박스',
  DROPDOWN: '드롭다운',
} as const;

export type FormMetaKeysType = keyof typeof FormMeta;
export type FormMetaValueType = (typeof FormMeta)[FormMetaKeysType];

export default FormMeta;
